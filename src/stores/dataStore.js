/**
 * 📦 數據存儲模組 (Data Store Module)
 *
 * 管理城市圖層數據和地圖導航功能
 * 使用 Pinia 狀態管理系統和 Vue 3 Composition API
 */

// 核心依賴
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

/**
 * 🏪 數據存儲商店定義 (Data Store Definition)
 *
 * 使用 Pinia 的 defineStore 創建一個名為 'data' 的狀態管理商店。
 * 採用 Composition API 語法，提供更好的 TypeScript 支援和代碼組織。
 *
 * @returns {Object} 包含所有狀態和方法的商店對象
 */
export const useDataStore = defineStore(
  'data', // 商店唯一標識符
  () => {
    /**
     * 🗺️ 圖層配置數據 (Layer Configuration Data)
     *
     * 定義所有可用的地圖圖層，採用分組結構組織，每個圖層包含完整的配置信息。
     * 使用 ref 創建響應式數據，當圖層狀態改變時會自動更新相關 UI 組件。
     *
     * 📋 圖層結構說明：
     * - groupName: 圖層組名稱，用於 UI 分組顯示
     * - groupLayers: 該組下的所有圖層列表
     *   - layerId: 圖層唯一標識符
     *   - layerName: 圖層顯示名稱
     *   - zoom: 縮放級別
     *   - coordinates: 街道線條的兩個端點座標 [起點, 終點]
     */
    const layers = ref([
      {
        // 🌍 世界城市地圖集合
        // 包含各大洲代表性城市的地理邊界數據
        groupName: '世界城市',
        groupLayers: [
          {
            // 🏛️ 西安圖層配置
            layerId: 'Xian', // 圖層唯一標識符
            layerName: "XI'AN", // 圖層顯示名稱
            zoom: 12, // 最佳縮放級別
            coordinates: [
              [108.94187642402278, 34.192881967113934],
              [108.94258912558922, 34.34966320467116],
            ],
          },
          {
            // 🏛️ 北京圖層配置
            layerId: 'Beijing', // 圖層唯一標識符
            layerName: 'BEIJING', // 圖層顯示名稱
            zoom: 12, // 最佳縮放級別
            coordinates: [
              [116.39637957256002, 39.80351256231435],
              [116.38618671648146, 40.012091717672405],
            ],
          },
          {
            // 🏛️ 羅馬圖層配置
            layerId: 'Rome', // 圖層唯一標識符
            layerName: 'ROME', // 圖層顯示名稱
            zoom: 14, // 最佳縮放級別
            coordinates: [
              [12.467227004214806, 41.93300140114903],
              [12.483219652625365, 41.89425990038757],
            ],
          },
          {
            // 🏛️ 巴黎圖層配置
            layerId: 'Paris', // 圖層唯一標識符
            layerName: 'PARIS', // 圖層顯示名稱
            zoom: 13, // 最佳縮放級別
            coordinates: [
              [2.33334539087744, 48.86160021235486],
              [2.2188966642140713, 48.89782995675384],
            ],
          },
          {
            // 🏛️ 華盛頓圖層配置
            layerId: 'Washington', // 圖層唯一標識符
            layerName: 'WASHINGTON', // 圖層顯示名稱
            zoom: 13, // 最佳縮放級別
            coordinates: [
              [-77.05013839452597, 38.88929463507836],
              [-76.9133749343309, 38.88976503523864],
            ],
          },
          {
            // 🏛️ 柏林圖層配置
            layerId: 'Berlin', // 圖層唯一標識符
            layerName: 'BERLIN', // 圖層顯示名稱
            zoom: 13, // 最佳縮放級別
            coordinates: [
              [13.229711365656641, 52.50673639566284],
              [13.399053707740194, 52.51765971170866],
            ],
          },
        ],
      },
    ]);

    /**
     * 🔍 根據圖層 ID 查找圖層對象 (Find Layer by ID)
     *
     * 在分組結構的圖層配置中搜索指定 ID 的圖層，返回完整的圖層配置對象。
     * 使用嵌套循環遍歷所有圖層組和圖層，確保能夠找到正確的圖層。
     *
     * @param {string} layerId - 要查找的圖層唯一標識符
     * @returns {Object|null} 找到的圖層對象，如果未找到則返回 null
     *
     * @example
     * const layer = findLayerById('安養機構');
     * if (layer) {
     *   console.log('找到圖層:', layer.layerName);
     * }
     */
    const findLayerById = (layerId) => {
      // 遍歷所有圖層組
      for (const group of layers.value) {
        // 遍歷當前組的所有圖層
        for (const layer of group.groupLayers) {
          // 檢查圖層 ID 是否匹配
          if (layer.layerId === layerId) {
            return layer; // 返回找到的圖層對象
          }
        }
      }
      return null; // 未找到指定 ID 的圖層
    };

    /**
     * 📋 獲取所有圖層的扁平陣列 (Get All Layers as Flat Array)
     *
     * 將分組結構的圖層配置轉換為扁平的一維陣列，便於進行批量操作和遍歷。
     * 使用展開運算符將每個圖層組的所有圖層合併到一個陣列中。
     *
     * @returns {Array} 包含所有圖層的扁平陣列
     *
     * @example
     * const allLayers = getAllLayers();
     * console.log('總共有', allLayers.length, '個圖層');
     */
    const getAllLayers = () => {
      const allLayers = []; // 初始化結果陣列
      // 遍歷所有圖層組
      for (const group of layers.value) {
        // 使用展開運算符將當前組的所有圖層添加到結果陣列
        allLayers.push(...group.groupLayers);
      }
      return allLayers; // 返回扁平化的圖層陣列
    };

    /**
     * 🔄 切換圖層可見性狀態 (Toggle Layer Visibility)
     *
     * 控制指定圖層的顯示/隱藏狀態，並在圖層首次顯示時自動載入相關數據。
     * 這是圖層管理的核心方法，負責處理圖層狀態變更和數據載入邏輯。
     *
     * @param {string} layerId - 要切換狀態的圖層唯一標識符
     * @returns {Promise<void>} 異步操作，無返回值
     *
     * @example
     * // 切換安養機構圖層的顯示狀態
     * await toggleLayerVisibility('安養機構');
     */
    // 移除圖層可見性切換（城市圖層永久可見，且無需勾選切換）

    // ------------------------------------------------------------
    // 選中的地圖物件（用於清除選取狀態）
    const selectedFeature = ref(null);

    const setSelectedFeature = (feature) => {
      selectedFeature.value = feature;
    };

    // ------------------------------------------------------------
    // 地圖導航功能
    const mapInstance = ref(null);

    const setMapInstance = (map) => {
      mapInstance.value = map;
    };

    /**
     * 🌍 導航到指定城市
     *
     * 將地圖視圖移動到指定城市的中心位置，並根據當前底圖模式
     * 自動切換到對應的顏色主題（如果適用）
     *
     * @param {string} cityId - 城市圖層的唯一標識符
     * @returns {void}
     */
    const navigateToCity = (cityId) => {
      // 查找城市圖層
      const cityLayer = findLayerById(cityId);
      if (!cityLayer) {
        console.error('❌ 找不到城市圖層:', cityId);
        return;
      }

      // 檢查地圖實例是否準備就緒
      if (!mapInstance.value) {
        console.error('❌ 地圖實例未準備就緒，等待地圖初始化...');
        // 延遲重試機制
        setTimeout(() => {
          if (mapInstance.value) {
            console.log('🌍 地圖已準備就緒，重新嘗試移動');
            navigateToCity(cityId);
          } else {
            console.error('❌ 地圖實例仍未準備就緒');
          }
        }, 1000);
        return;
      }

      // 從座標數據計算街道線條中心點
      let targetCenter = null;
      const optimalZoom = cityLayer.zoom || 11;

      if (cityLayer.coordinates && cityLayer.coordinates.length >= 2) {
        // 計算兩點連線的中間點
        const [lng1, lat1] = cityLayer.coordinates[0];
        const [lng2, lat2] = cityLayer.coordinates[1];
        const centerLng = (lng1 + lng2) / 2;
        const centerLat = (lat1 + lat2) / 2;
        targetCenter = [centerLat, centerLng]; // Leaflet 需要 [lat, lng] 格式
        console.log('📍 導航到城市:', cityLayer.layerName, '計算的中心點:', targetCenter);
      }

      if (!targetCenter) {
        console.error('❌ 無法計算城市中心點:', cityId);
        return;
      }

      // 執行地圖導航
      try {
        mapInstance.value.setView(targetCenter, optimalZoom, { animate: false });
        console.log(`🌍 成功導航到城市: ${cityLayer.layerName}`);
      } catch (error) {
        console.error('❌ 地圖導航失敗:', error);
      }
    };

    return {
      layers,
      findLayerById, // 根據 ID 尋找圖層
      getAllLayers, // 獲取所有圖層的扁平陣列
      selectedFeature, // 選中的地圖要素
      setSelectedFeature, // 設定選中的地圖要素
      mapInstance, // 地圖實例
      setMapInstance, // 設定地圖實例
      navigateToCity, // 導航到指定城市
      // 所有圖層都是可見的，所以直接返回所有圖層
      visibleLayers: computed(() => getAllLayers()),
    };
  },
  {
    persist: true,
  }
);
