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

      // 🏙️ 當前城市信息
      const currentCityInfo = computed(() => {
        if (!props.currentCity) {
          return null;
        }

        // 從dataStore中獲取城市信息
        const allLayers = dataStore.getAllLayers();
        const cityLayer = allLayers.find((layer) => layer.layerName === props.currentCity);
        if (cityLayer) {
          return {};
        } else {
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
            }
          });

          // 設定 popup 面板的 z-index
          mapInstance.getPane('popupPane').style.zIndex = 2200;

          isMapReady.value = true;
          emit('map-ready', mapInstance);

          return true;
        } catch (error) {
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
       * 在 coordinates 的兩個端點創建紅點標記
       */
      const createFeatureLayer = (layer) => {
        if (!layer.coordinates || layer.coordinates.length < 2) return null;

        // 創建圖層組，用於包含多個點標記
        const layerGroup = L.layerGroup([]);

        // 為每個座標點創建紅色圓形標記
        layer.coordinates.forEach((coord) => {
          const [lng, lat] = coord;

          // 創建紅色圓形標記
          const circleMarker = L.circleMarker([lat, lng], {
            radius: 2, // 圓點半徑
            fillColor: 'red', // 填充顏色
            fillOpacity: 1, // 填充不透明度
            stroke: false, // 不顯示邊框
          });

          // 將標記添加到圖層組
          layerGroup.addLayer(circleMarker);
        });

        return layerGroup;
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

          if (layer.coordinates && layer.coordinates.length >= 2) {
            // 顯示圖層
            if (!layerGroups[layerId]) {
              const geoJsonLayer = createFeatureLayer(layer);
              if (geoJsonLayer) {
                layerGroups[layerId] = geoJsonLayer;
                mapInstance.addLayer(geoJsonLayer);
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
            return;
          }

          attempts++;

          if (createMap()) {
            setBasemap();
            syncLayers();

            // 預設顯示西安的街道線條
            setTimeout(() => {
              const xianLayer = dataStore.findLayerById('Xian');
              if (xianLayer && xianLayer.coordinates) {
                const geoJsonLayer = createFeatureLayer(xianLayer);
                if (geoJsonLayer) {
                  layerGroups['Xian'] = geoJsonLayer;
                  mapInstance.addLayer(geoJsonLayer);
                }
              }
            }, 500);
          } else {
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
            invalidateSize();
          }, 200);
        });

        resizeObserver.observe(mapContainer.value);
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
        currentCityInfo,
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
