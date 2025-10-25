/**
 * 🗺️ 定義存儲模組 (Define Store Module)
 *
 * 管理應用程式的全局配置和設定，包括底圖選擇和地圖視圖狀態。
 * 主要功能：
 * - 管理底圖配置和選擇
 * - 保存地圖視圖狀態（中心點、縮放級別）
 * - 提供底圖切換功能
 *
 * 技術架構：
 * - Pinia 狀態管理
 * - 響應式狀態更新
 * - 模組化配置管理
 */

import { defineStore } from 'pinia';

export const useDefineStore = defineStore('define', {
  state: () => ({
    // 🗺️ 當前選中的底圖類型
    selectedBasemap: 'google_satellite',

    // 🗺️ 地圖視圖狀態
    mapView: {
      center: [34.3416, 108.9402], // 地圖中心點 [緯度, 經度] - 西安市中心
      zoom: 11, // 縮放等級（調整到11級，顯示詳細的內容）
    },
    // 🗺️ 底圖配置列表
    basemaps: [
      {
        label: 'Google 衛星圖',
        value: 'google_satellite',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        attribution: '© Google',
        maxZoom: 20,
      },
      {
        label: 'Google 混合圖',
        value: 'google_hybrid',
        url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
        attribution: '© Google',
        maxZoom: 20,
      },
      {
        label: 'Google 街道圖',
        value: 'google_roadmap',
        url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        attribution: '© Google',
        maxZoom: 20,
      },
      {
        label: 'Carto Dark',
        value: 'carto_dark',
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      },
    ],
  }),
  actions: {
    /**
     * 🗺️ 設定選中的底圖
     * @param {string} value - 底圖類型值
     */
    setSelectedBasemap(value) {
      this.selectedBasemap = value;
    },

    /**
     * 🗺️ 設定地圖視圖狀態
     * @param {Array} center - 地圖中心點 [緯度, 經度]
     * @param {number} zoom - 縮放級別
     */
    setMapView(center, zoom) {
      this.mapView.center = center;
      this.mapView.zoom = zoom;
    },
  },
});
