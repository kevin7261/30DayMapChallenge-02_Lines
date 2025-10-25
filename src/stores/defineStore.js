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
    // 🗺️ 地圖視圖狀態
    mapView: {
      center: [34.271271085914, 108.942232774512], // 地圖中心點 [緯度, 經度] - 西安街道線條中心點
      zoom: 12, // 縮放等級（與西安定義一致）
    },
    // 🗺️ Google Maps 衛星圖配置（固定使用）
    googleSatelliteConfig: {
      url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      attribution: '© Google',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      detectRetina: true,
    },
  }),
  actions: {
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
