<script>
  /**
   * 🗺️ MapTab.vue - 簡化版地圖組件 (Simplified Map Component)
   *
   * 這是一個簡化的地圖組件，專為世界城市地圖展示設計。
   * 主要功能：
   * - 顯示世界六大城市的 GeoJSON 數據
   * - 提供城市導航功能
   * - 支援多種底圖切換
   * - 響應式設計
   *
   * 技術架構：
   * - Vue 3 Composition API
   * - Leaflet 地圖庫
   * - Pinia 狀態管理
   * - Bootstrap 5 樣式
   */

  import { ref, onMounted, onUnmounted, watch, nextTick, computed } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import { useDataStore } from '@/stores/dataStore.js';
  import { useDefineStore } from '@/stores/defineStore.js';

  export default {
    name: 'MapTab',
    props: {
      currentCity: { type: String, default: '城市名稱' },
    },
    emits: ['map-ready'],
    setup(props, { emit }) {
      // 📦 存儲實例
      const dataStore = useDataStore();
      const defineStore = useDefineStore();

      // 🗺️ 地圖相關變數
      const mapContainer = ref(null);
      let mapInstance = null;
      let currentTileLayer = null;
      let layerGroups = {};

      // 🎛️ 地圖控制狀態
      const isMapReady = ref(false);
      const mapContainerId = ref(`leaflet-map-${Math.random().toString(36).substr(2, 9)}`);

      // 📊 計算屬性：檢查是否有任何圖層可見
      const isAnyLayerVisible = computed(() => dataStore.getAllLayers().some((l) => l.geoJsonData));

      // 🏙️ 當前城市信息
      const currentCityInfo = computed(() => {
        if (!props.currentCity) {
          console.log('❌ currentCityInfo: 沒有當前城市');
          return null;
        }

        // 從dataStore中獲取城市信息
        const allLayers = dataStore.getAllLayers();
        console.log(
          '🔍 查找城市:',
          props.currentCity,
          '可用圖層:',
          allLayers.map((l) => l.layerName)
        );

        const cityLayer = allLayers.find((layer) => layer.layerName === props.currentCity);
        if (cityLayer) {
          console.log('✅ 找到城市圖層:', cityLayer.layerName);
          return {};
        } else {
          console.log('❌ 未找到城市圖層:', props.currentCity);
          return null;
        }
      });

      /**
       * 🏗️ 創建地圖實例
       * 初始化 Leaflet 地圖並設定基本配置
       */
      const createMap = () => {
        if (!mapContainer.value) return false;

        const rect = mapContainer.value.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
          console.warn('[MapTab] 容器尺寸為零，延遲初始化');
          return false;
        }

        try {
          mapInstance = L.map(mapContainer.value, {
            center: defineStore.mapView.center,
            zoom: defineStore.mapView.zoom,
            zoomControl: false,
            attributionControl: false,
            dragging: false, // 禁用拖拽
            touchZoom: false, // 禁用觸控縮放
            doubleClickZoom: false, // 禁用雙擊縮放
            scrollWheelZoom: false, // 禁用滾輪縮放
            boxZoom: false, // 禁用框選縮放
            keyboard: false, // 禁用鍵盤控制
          });

          // 綁定地圖事件
          mapInstance.on('zoomend', handleZoomEnd);
          mapInstance.on('moveend', handleMoveEnd);

          // 點擊空白處清除選取
          mapInstance.on('click', function (e) {
            if (!e.originalEvent.target.closest('.leaflet-interactive')) {
              dataStore.setSelectedFeature(null);
              resetAllLayerStyles();
            }
          });

          // 設定 popup 面板的 z-index
          mapInstance.getPane('popupPane').style.zIndex = 2200;

          isMapReady.value = true;
          emit('map-ready', mapInstance);

          console.log('[MapTab] 地圖創建成功');
          return true;
        } catch (error) {
          console.error('[MapTab] 地圖創建失敗:', error);
          return false;
        }
      };

      /**
       * 📡 處理縮放結束事件
       * 更新地圖視圖狀態到存儲中
       */
      const handleZoomEnd = () => {
        if (mapInstance) {
          const zoom = mapInstance.getZoom();
          const center = mapInstance.getCenter();
          defineStore.setMapView([center.lat, center.lng], zoom);
          emit('update:zoomLevel', zoom);
        }
      };

      /**
       * 📡 處理移動結束事件
       * 更新地圖中心座標
       */
      const handleMoveEnd = () => {
        if (mapInstance) {
          const center = mapInstance.getCenter();
          defineStore.setMapView([center.lat, center.lng], mapInstance.getZoom());
          emit('update:currentCoords', { lat: center.lat, lng: center.lng });
        }
      };

      /**
       * 🎨 設定 Google Maps 衛星圖底圖
       * 固定使用 Google Maps 衛星圖作為底圖
       */
      const setBasemap = () => {
        if (!mapInstance) return;

        // 移除現有底圖
        if (currentTileLayer) {
          mapInstance.removeLayer(currentTileLayer);
        }

        // 添加 Google Maps 衛星圖圖層
        const config = defineStore.googleSatelliteConfig;
        currentTileLayer = L.tileLayer(config.url, {
          attribution: config.attribution,
          maxZoom: config.maxZoom,
          subdomains: config.subdomains,
          detectRetina: config.detectRetina,
        });
        mapInstance.addLayer(currentTileLayer);

        // 設定容器背景為透明，讓衛星圖顯示
        const mapContainerElement = mapContainer.value;
        const mapRootElement = mapContainerElement ? mapContainerElement.parentElement : null;
        if (mapContainerElement) {
          console.log('🎨 設定 Google Maps 衛星圖底圖');

          const allBgClasses = ['my-map-bg-blank', 'my-map-bg-black', 'my-map-bg-transparent'];

          // 移除所有背景顏色類別
          [mapContainerElement, mapRootElement].forEach((el) => {
            if (!el) return;
            el.classList.remove(...allBgClasses);
          });

          // 設定透明背景
          [mapContainerElement, mapRootElement].forEach((el) => {
            if (!el) return;
            el.classList.add('my-map-bg-transparent');
          });
        }
      };

      /**
       * 🎨 創建要素圖層
       * 將嵌入的 GeoJSON 數據轉換為 Leaflet 圖層
       */
      const createFeatureLayer = (layer) => {
        if (!layer.geoJsonData) return null;

        const { layerName } = layer;

        const geoJsonLayer = L.geoJSON(layer.geoJsonData, {
          // 樣式設定函數 - 處理 LineString
          style: () => {
            return {
              color: 'white', // 白色線條
              weight: 2, // 線寬
              opacity: 0.8,
              lineCap: 'round', // 圓角線端
              lineJoin: 'round', // 圓角連接
            };
          },
          // 每個要素的處理函數
          onEachFeature: (feature, layer) => {
            // 綁定彈窗
            layer.bindPopup(`
              <div class="p-2">
                <div class="mb-2">${layerName}</div>
                <div>街道線條</div>
              </div>
            `);

            // 綁定點擊事件
            layer.on('click', () => {
              emit('feature-selected', feature);
              highlightFeature(feature);
            });
          },
        });

        return geoJsonLayer;
      };

      /**
       * 🎯 高亮顯示特定要素
       * 當用戶點擊地圖要素時高亮顯示
       */
      const highlightFeature = (feature) => {
        // 重置所有圖層樣式
        resetAllLayerStyles();

        // 高亮選中的要素
        if (feature && feature._leaflet_id) {
          // 這裡可以添加高亮邏輯
          console.log('高亮要素:', feature.properties.name);
        }
      };

      /**
       * 🔄 重置所有圖層樣式
       * 清除所有高亮效果
       */
      const resetAllLayerStyles = () => {
        // 這裡可以添加重置樣式的邏輯
        console.log('重置圖層樣式');
      };

      /**
       * 🔄 同步圖層
       * 根據存儲中的圖層狀態同步地圖上的圖層
       */
      const syncLayers = () => {
        if (!mapInstance) return;

        const allLayers = dataStore.getAllLayers();

        allLayers.forEach((layer) => {
          const layerId = layer.layerId;

          if (layer.geoJsonData) {
            // 顯示圖層
            if (!layerGroups[layerId]) {
              const geoJsonLayer = createFeatureLayer(layer);
              if (geoJsonLayer) {
                layerGroups[layerId] = geoJsonLayer;
                mapInstance.addLayer(geoJsonLayer);
                console.log(`✅ 添加圖層: ${layer.layerName}`);
              }
            }
          } else {
            // 隱藏圖層
            if (layerGroups[layerId]) {
              mapInstance.removeLayer(layerGroups[layerId]);
              delete layerGroups[layerId];
            }
          }
        });
      };

      /**
       * 📏 刷新地圖尺寸
       * 當容器大小改變時重新計算地圖尺寸
       */
      const invalidateSize = () => {
        if (mapInstance) {
          setTimeout(() => {
            mapInstance.invalidateSize();
          }, 100);
        }
      };

      /**
       * 🚀 初始化地圖
       * 創建地圖並載入初始數據
       */
      const initMap = () => {
        let attempts = 0;
        const maxAttempts = 20;

        const tryCreateMap = () => {
          if (attempts >= maxAttempts) {
            console.error('[MapTab] 地圖初始化失敗，已達到最大嘗試次數');
            return;
          }

          attempts++;
          console.log(`[MapTab] 嘗試創建地圖 (${attempts}/${maxAttempts})`);

          if (createMap()) {
            console.log('[MapTab] 地圖創建成功，開始初始化');
            setBasemap();
            syncLayers();
          } else {
            console.log('[MapTab] 地圖創建失敗，100ms 後重試');
            setTimeout(tryCreateMap, 100);
          }
        };

        tryCreateMap();
      };

      // 📏 設置 ResizeObserver 監聽容器大小變化
      let resizeObserver = null;
      let resizeTimeout = null;

      const setupResizeObserver = () => {
        if (!mapContainer.value || !window.ResizeObserver) return;

        resizeObserver = new ResizeObserver(() => {
          if (resizeTimeout) {
            clearTimeout(resizeTimeout);
          }

          resizeTimeout = setTimeout(() => {
            console.log('🔄 容器大小變化，刷新地圖');
            invalidateSize();
          }, 200);
        });

        resizeObserver.observe(mapContainer.value);
        console.log('✅ ResizeObserver 已設置');
      };

      // 🧹 生命週期：組件掛載
      onMounted(() => {
        nextTick(() => {
          initMap();
          setupResizeObserver();
        });
      });

      // 🧹 生命週期：組件卸載
      onUnmounted(() => {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }

        if (resizeObserver) {
          resizeObserver.disconnect();
        }

        if (mapInstance) {
          mapInstance.remove();
          mapInstance = null;
        }

        layerGroups = {};
        currentTileLayer = null;
        isMapReady.value = false;
      });

      // 👀 監聽器：監聽資料存儲中的圖層變化
      watch(() => dataStore.layers, syncLayers, { deep: true });

      // 📤 返回組件公開的屬性和方法
      return {
        mapContainer,
        mapContainerId,
        isAnyLayerVisible,
        currentCityInfo,
        highlightFeature,
        invalidateSize,
        defineStore,
      };
    },
  };
</script>

<template>
  <!-- 🗺️ 地圖主容器 -->
  <div id="map-container" class="h-100 w-100 position-relative bg-transparent z-0">
    <!-- 🗺️ Leaflet 地圖容器 -->
    <div :id="mapContainerId" ref="mapContainer" class="h-100 w-100"></div>
  </div>
</template>

<style>
  @import '../assets/css/common.css';
</style>
