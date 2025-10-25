# 🌍 30DayMapChallenge - 世界城市線條地圖

> **一個優雅的城市線條可視化專案，透過簡約的白色線條展現六座世界名城的都市肌理與空間結構**

[![Vue.js](https://img.shields.io/badge/Vue.js-3.2+-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9+-199900?style=flat&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Pinia](https://img.shields.io/badge/Pinia-2.1+-FFC107?style=flat&logo=pinia&logoColor=white)](https://pinia.vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3+-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📖 目錄 (Table of Contents)

- [專案簡介](#-專案簡介)
- [核心功能](#-核心功能)
- [快速開始](#-快速開始)
- [技術架構](#-技術架構)
- [專案結構](#-專案結構)
- [使用指南](#-使用指南)
- [開發指南](#-開發指南)
- [部署說明](#-部署說明)
- [API 文檔](#-api-文檔)
- [故障排除](#-故障排除)
- [貢獻指南](#-貢獻指南)
- [授權條款](#-授權條款)

---

## 📖 專案簡介

這是一個參與 **#30DayMapChallenge**
第二日「Lines（線條）」主題的互動式地圖可視化專案。透過純粹的白色線條，以極簡風格重新詮釋六座世界歷史名城的城市街道網絡，呈現出不同文明圈的都市規劃特色與空間美學。

### 🎯 設計理念

本專案追求極簡主義美學，透過以下設計理念實現獨特的視覺體驗：

- **極簡主義**：使用純白色線條在深色背景上勾勒城市輪廓，回歸最純粹的空間表達
- **文化對比**：展現東西方城市規劃的差異——從中國的棋盤式布局到歐洲的放射狀街道
- **互動探索**：提供流暢的城市導航體驗，支援顏色主題切換，讓用戶自由探索每座城市的獨特性
- **技術美學**：運用現代 Web 技術打造高性能、響應式的地圖應用

### 🌆 展示城市

本專案收錄了六座世界歷史名城，每座城市都代表著不同的文明和都市規劃理念：

| 城市                       | 特色                                 | 主題色彩 | 座標範圍          | 縮放級別 |
| -------------------------- | ------------------------------------ | -------- | ----------------- | -------- |
| 🏯 **西安 (XI'AN)**        | 中國古都，唐代長安城的棋盤式街道布局 | 金黃色   | 108.94°E, 34.27°N | 12       |
| 🏮 **北京 (BEIJING)**      | 紫禁城為中心的方正格局與現代環路系統 | 深藍色   | 116.40°E, 39.90°N | 12       |
| 🗼 **巴黎 (PARIS)**        | 以凱旋門為中心的放射狀林蔭大道       | 淡紫色   | 2.35°E, 48.86°N   | 13       |
| 🏛️ **羅馬 (ROME)**         | 古羅馬帝國的同心圓街道與七丘地形     | 粉紅色   | 12.50°E, 41.90°N  | 14       |
| 🏛️ **柏林 (BERLIN)**       | 戰後重建的現代都市規劃               | 淺藍色   | 13.40°E, 52.52°N  | 13       |
| 🏛️ **華盛頓 (WASHINGTON)** | 美國首都的棋盤與放射混合式布局       | 青綠色   | -77.04°W, 38.91°N | 13       |

### 🎨 視覺設計系統

#### 顏色主題

每座城市都配置了獨特的主題色彩，體現其文化特色：

- **西安** - `#D4AF37` (Golden Yellow) - 中國古代帝王色，象徵盛唐輝煌
- **北京** - `#1E3A8A` (Deep Blue) - 中國傳統青花瓷色，代表皇家威嚴
- **羅馬** - `#EC4899` (Pink) - 義大利浪漫色彩，呼應羅馬夕陽
- **巴黎** - `#A78BFA` (Lavender) - 法國薰衣草色，象徵優雅與藝術
- **華盛頓** - `#10B981` (Emerald) - 美國自然色彩，代表自由與活力
- **柏林** - `#60A5FA` (Sky Blue) - 德國現代色彩，象徵理性與科技

---

## ✨ 核心功能

### 🗺️ 地圖互動功能

#### 1. 一鍵城市導航 ⭐⭐⭐⭐⭐

- **快速切換**：點擊左側按鈕即可瞬間飛往目標城市
- **智能縮放**：自動調整到最佳觀賞視角（每座城市的預設縮放級別經過精心調校）
- **平滑動畫**：使用 Leaflet 的內建動畫引擎，提供流暢的視覺過渡
- **狀態同步**：當前選中城市會高亮顯示，清晰呈現導航狀態

**技術實現**：

```javascript
// 使用 Leaflet 的 setView 方法實現平滑導航
mapInstance.setView([lat, lng], zoom, {
  animate: true, // 啟用動畫
  duration: 1.0, // 動畫持續時間（秒）
});
```

#### 2. 雙模式底圖系統 ⭐⭐⭐⭐

**地圖模式**：

- Carto Dark 深色底圖，提供地理背景資訊
- 適合了解城市地理位置和周邊環境

**顏色主題模式**：

- 根據每座城市的文化特色，配置專屬主題色彩
- 切換至顏色模式時，背景色會自動匹配當前城市的主題色
- 白色線條在彩色背景上呈現不同的視覺效果

#### 3. 極簡線條渲染 ⭐⭐⭐⭐⭐

- **統一樣式**：所有城市街道以純白色 1px 線條繪製
- **高對比度**：深色背景搭配白色線條，確保最佳可讀性
- **性能優化**：使用 Leaflet 的矢量圖層渲染，支援大量線條數據

### 🎨 UI/UX 設計特色

- **暗黑美學**：深色界面減少視覺疲勞，突出地圖內容
- **響應式佈局**：自適應各種螢幕尺寸，從桌面到行動裝置無縫切換
- **漸層動畫**：按鈕懸停效果、城市切換動畫，提供細膩的互動回饋
- **FontAwesome 圖標**：使用現代化圖標系統增強 UI 表達

---

## 🚀 快速開始

### 環境要求

| 工具     | 最低版本   | 推薦版本                | 說明                     |
| -------- | ---------- | ----------------------- | ------------------------ |
| Node.js  | 16.0       | 18.x LTS                | JavaScript 運行環境      |
| npm      | 7.0        | 8.x                     | Node.js 包管理器         |
| 作業系統 | -          | macOS / Windows / Linux | 支援所有主流作業系統     |
| 瀏覽器   | Chrome 90+ | Chrome 最新版           | 支援現代瀏覽器的最新特性 |

### 安裝步驟

#### 步驟 1：克隆專案

```bash
# 使用 HTTPS 協議克隆（推薦新手）
git clone https://github.com/kevin7261/30DayMapChallenge-02_Lines.git

# 或使用 SSH 協議克隆（需要配置 SSH 金鑰）
git clone git@github.com:kevin7261/30DayMapChallenge-02_Lines.git

# 進入專案目錄
cd 30DayMapChallenge-02_Lines
```

**常見問題**：

- 如果遇到 "command not found: git" 錯誤，請先安裝 Git
- Windows 用戶建議使用 Git Bash 或 WSL

#### 步驟 2：安裝依賴

```bash
# 使用 npm（推薦）
npm install

# 或使用 yarn（更快）
yarn install

# 或使用 pnpm（最快，節省磁碟空間）
pnpm install
```

**依賴安裝說明**：

- 首次安裝需要幾分鐘時間
- 下載的依賴會存放在 `node_modules/` 目錄
- 如果遇到網絡問題，可以使用國內鏡像：
  ```bash
  npm config set registry https://registry.npmmirror.com
  ```

#### 步驟 3：啟動開發服務器

```bash
# 啟動開發服務器
npm run serve

# 或使用 yarn
yarn serve
```

**服務器啟動後**：

- 瀏覽器會自動開啟 `http://localhost:8080`
- 支援熱重載（Hot Module Replacement），修改代碼後自動刷新
- 終端會顯示訪問地址和網絡地址

**終端輸出範例**：

```
 DONE  Compiled successfully in 3421ms

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.1.100:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

#### 步驟 4：構建生產版本

```bash
# 構建優化後的生產檔案
npm run build

# 構建完成後，dist 目錄會包含所有靜態資源
```

**構建輸出**：

- `dist/` 目錄包含所有生產文件
- 使用 Tree Shaking 和代碼壓縮優化
- 靜態資源會自動添加哈希值用於緩存控制

#### 步驟 5：本地預覽生產版本

```bash
# 安裝 serve 工具（全局）
npm install -g serve

# 預覽生產版本
serve -s dist

# 或使用 Python 內建的 HTTP 服務器
cd dist && python -m http.server 8000
```

---

## 🏗️ 技術架構

### 技術棧總覽

```
前端框架：Vue 3.2.13 (Composition API)
地圖引擎：Leaflet 1.9.0
狀態管理：Pinia 2.1.0
UI 框架：Bootstrap 5.3.0
圖標庫：FontAwesome 6.7.2
數據可視化：D3.js 7.8.0
構建工具：Vue CLI 5.0.8 + Webpack
代碼規範：ESLint + Prettier
包管理：npm
部署平台：GitHub Pages
```

### 核心組件說明

#### 1. **App.vue** - 應用程式根組件

**功能職責**：

- 提供全域佈局框架
- 管理載入狀態和進度顯示
- 整合 Vue Router 路由系統

**技術細節**：

- 使用 Vue 3 Composition API
- 響應式佈局設計
- 模組化組件架構

#### 2. **HomeView.vue** - 主頁面組件

**功能職責**：

- 整合地圖顯示與控制面板
- 管理城市導航邏輯
- 處理底圖模式切換
- 初始化應用程式並載入城市數據

**核心方法**：

```javascript
// 城市導航
navigateToCity(cityId);
// - 將地圖視圖移動到指定城市
// - 更新當前城市狀態
// - 觸發地圖動畫

// 底圖切換
toggleBasemap();
// - 在地圖模式和顏色模式之間切換
// - 更新背景顏色和底圖圖層

// 地圖實例管理
setMapInstance(map);
// - 接收 Leaflet 地圖實例
// - 傳遞給 dataStore 進行統一管理
```

#### 3. **MapTab.vue** - 地圖渲染組件

**功能職責**：

- 創建和管理 Leaflet 地圖實例
- 處理 GeoJSON 圖層渲染
- 管理底圖切換和樣式應用
- 響應地圖互動事件

**關鍵特性**：

- 禁用所有地圖互動（拖拽、縮放），僅通過按鈕導航
- 自動處理容器尺寸變化（ResizeObserver）
- 支援顏色主題背景動態切換

#### 4. **dataStore.js** - 數據管理存儲

**功能職責**：

- 管理六座城市的圖層配置
- 處理 GeoJSON 數據載入
- 提供城市導航功能
- 計算並緩存地理邊界

**數據結構**：

```javascript
{
  layerId: 'Beijing',           // 圖層唯一標識
  layerName: 'BEIJING',         // 顯示名稱
  colorName: 'city-beijing',    // 主題色變數名
  geoJsonData: {...},           // GeoJSON 數據
  center: [116.4074, 39.9042], // 城市中心座標
  zoom: 11,                     // 最佳縮放級別
  boundsCenter: {...}           // 緩存的邊界中心（性能優化）
}
```

#### 5. **defineStore.js** - 配置管理存儲

**功能職責**：

- 管理底圖配置列表
- 保存當前選中的底圖類型
- 記錄地圖視圖狀態（中心點、縮放級別）

**狀態管理**：

```javascript
selectedBasemap: 'city-xian_theme',  // 當前底圖
mapView: {
  center: [34.3416, 108.9402],       // 地圖中心
  zoom: 11                            // 縮放級別
}
```

### 數據流向圖

```
用戶操作
   ↓
HomeView (視圖層)
   ↓
dataStore / defineStore (狀態層)
   ↓
MapTab (地圖渲染層)
   ↓
Leaflet API (地圖引擎)
   ↓
DOM 更新
```

---

## 📁 專案結構

```
30DayMapChallenge-02_Lines/
│
├── 📂 public/                        # 靜態資源目錄
│   ├── 📂 data/
│   │   ├── 📂 geojson/              # 城市 GeoJSON 數據
│   │   │   ├── beijing.geojson      # 北京街道數據
│   │   │   ├── berlin.geojson       # 柏林街道數據
│   │   │   ├── paris.geojson        # 巴黎街道數據
│   │   │   ├── rome.geojson         # 羅馬街道數據
│   │   │   ├── washingtondc.geojson # 華盛頓街道數據
│   │   │   └── xian.geojson         # 西安街道數據
│   │   └── README.md                # 數據說明文件
│   ├── favicon.ico                   # 網站圖標
│   ├── index.html                    # HTML 模板
│   └── 404.html                      # GitHub Pages 404 頁面
│
├── 📂 src/                           # 源代碼目錄
│   ├── 📂 assets/                    # 資源文件
│   │   ├── 📂 css/
│   │   │   ├── common.css           # 全域通用樣式
│   │   │   └── variables.css        # CSS 變數定義（顏色主題）
│   │   └── logo.png                 # 專案 Logo
│   │
│   ├── 📂 components/                # 可重用組件（預留）
│   │
│   ├── 📂 stores/                    # Pinia 狀態管理
│   │   ├── dataStore.js             # 數據存儲（城市圖層、導航）
│   │   └── defineStore.js           # 配置存儲（底圖、地圖狀態）
│   │
│   ├── 📂 tabs/                      # 標籤頁組件
│   │   └── MapTab.vue               # 地圖組件（核心地圖渲染）
│   │
│   ├── 📂 utils/                     # 工具函數
│   │
│   ├── 📂 views/                     # 頁面視圖
│   │   └── HomeView.vue             # 主頁面（整合地圖與控制面板）
│   │
│   ├── 📂 router/                    # 路由配置
│   │   └── index.js                 # Vue Router 路由定義
│   │
│   ├── App.vue                       # 根組件
│   └── main.js                       # 應用程式入口
│
├── 📂 dist/                          # 構建輸出目錄（部署用）
│
├── 📄 package.json                   # npm 依賴配置
├── 📄 package-lock.json              # npm 依賴鎖定
├── 📄 babel.config.js                # Babel 配置
├── 📄 vue.config.js                  # Vue CLI 配置
├── 📄 jsconfig.json                  # JavaScript 項目配置
└── 📄 README.md                      # 專案說明文件（本文件）
```

### 關鍵文件說明

#### 配置文件

**`vue.config.js`**：Vue CLI 構建配置

- 設定 `publicPath` 用於 GitHub Pages 部署
- 配置 Webpack 打包選項
- 設定開發服務器參數

**`babel.config.js`**：Babel 轉譯配置

- 確保舊版瀏覽器兼容性
- 轉譯 ES6+ 語法

**`jsconfig.json`**：JavaScript 項目配置

- 配置路徑別名（`@` 指向 `src`）
- 提供 VSCode IntelliSense 支援

#### 樣式文件

**`common.css`**：包含全域樣式、城市按鈕樣式、地圖背景類別

**`variables.css`**：CSS 自定義屬性，定義六座城市的主題色彩

#### 數據文件

所有 GeoJSON 文件遵循標準 RFC 7946 規範：

- 座標系統：WGS84 (EPSG:4326)
- 幾何類型：LineString / MultiLineString（道路網絡）
- 屬性：name、type 等城市街道元數據

---

## 📖 使用指南

### 基本操作

#### 1. 城市導航 🚀

**操作步驟**：

1. 查看左側控制面板的城市列表
2. 點擊任意城市按鈕（例如「BEIJING」）
3. 地圖會自動飛往該城市並調整到最佳視角
4. 當前選中的城市按鈕會高亮顯示

**城市列表（從上到下）**：

- XI'AN（西安）
- BEIJING（北京）
- ROME（羅馬）
- PARIS（巴黎）
- WASHINGTON（華盛頓）
- BERLIN（柏林）

**技術細節**：

- 使用 Leaflet 的 `setView()` 方法實現平滑動畫
- 自動計算城市中心點座標
- 根據城市規模調整最佳縮放級別

#### 2. 底圖模式切換 🎨

**操作步驟**：

1. 點擊控制面板底部的地圖圖標按鈕
2. 在地圖模式和顏色模式之間切換

**地圖模式（深色底圖）**：

- 顯示 Google Maps 衛星圖底圖
- 提供地理背景資訊
- 適合了解城市地理位置

**顏色主題模式**：

- 背景色自動匹配當前城市的主題色
- 純色背景突出白色線條的視覺效果
- 適合欣賞城市街道的幾何美學

**切換行為**：

- 從地圖模式切換到顏色模式時，會自動載入當前城市的主題色
- 從顏色模式切換回地圖模式時，恢復衛星圖底圖

#### 3. 地圖瀏覽 🗺️

**注意**：為保持簡潔的導航體驗，此應用禁用了以下互動：

- ❌ 滑鼠拖拽移動
- ❌ 滾輪縮放
- ❌ 雙擊縮放
- ❌ 觸控手勢

**可用操作**：

- ✅ 點擊城市按鈕導航
- ✅ 切換底圖模式
- ✅ 點擊街道線條查看 Popup（顯示城市名稱）

---

## 🛠️ 開發指南

### 添加新城市

#### 步驟 1：準備 GeoJSON 數據

確保你的 GeoJSON 文件符合以下規範：

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [[lng, lat], [lng, lat]]
      },
      "properties": {
        "name": "Street Name",
        "type": "primary"
      }
    }
  ]
}
```

**數據來源建議**：

- [OpenStreetMap](https://www.openstreetmap.org/)（使用 Overpass API 提取）
- [Natural Earth Data](https://www.naturalearthdata.com/)
- 各國政府開放數據平台

**數據處理工具**：

- [QGIS](https://qgis.org/)：專業 GIS 軟體
- [Mapshaper](https://mapshaper.org/)：線上工具，可壓縮 GeoJSON

#### 步驟 2：添加 GeoJSON 文件

```bash
cp your-city.geojson public/data/geojson/
```

#### 步驟 3：更新 dataStore.js

在 `src/stores/dataStore.js` 的 `layers` 陣列中添加：

```javascript
{
  layerId: 'YourCity',
  layerName: 'YOUR CITY',
  colorName: 'city-yourcity',
  geoJsonData: null,
  loader: loadCityGeoJson,
  fileName: 'your-city.geojson',
  fieldName: null,
  center: [lng, lat],
  zoom: 12,
  boundsCenter: null
}
```

#### 步驟 4：定義城市主題色

在 `src/assets/css/variables.css` 中添加：

```css
:root {
  --my-color-city-yourcity: #YOUR_HEX_COLOR;
}

.my-map-bg-city-yourcity-theme {
  background-color: var(--my-color-city-yourcity) !important;
}
```

---

## 📄 授權條款

本專案採用 **MIT License** 授權條款。

### 第三方資源授權

| 資源          | 授權條款     |
| ------------- | ------------ |
| Vue.js        | MIT License  |
| Leaflet       | BSD 2-Clause |
| Pinia         | MIT License  |
| Bootstrap     | MIT License  |
| FontAwesome   | Font Awesome |
| OpenStreetMap | ODbL License |

---

## 📞 聯繫方式

- **線上展示**:
  [https://kevin7261.github.io/30DayMapChallenge-02_Lines/](https://kevin7261.github.io/30DayMapChallenge-02_Lines/)
- **GitHub 倉庫**:
  [https://github.com/kevin7261/30DayMapChallenge-02_Lines](https://github.com/kevin7261/30DayMapChallenge-02_Lines)

---

<div align="center">

**🌍 30DayMapChallenge - 用線條探索世界城市之美 ✨**

Made with ❤️ by [Kevin Cheng](https://github.com/kevin7261)

[⬆ 回到頂部](#-30daymapchallenge---世界城市線條地圖)

</div>
