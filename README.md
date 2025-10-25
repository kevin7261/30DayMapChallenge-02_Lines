# 🌍 30DayMapChallenge - 世界城市線條地圖

> **一個優雅的城市線條可視化專案，透過簡約的白色線條展現六座世界名城的都市肌理與空間結構**

[![Vue.js](https://img.shields.io/badge/Vue.js-3.2+-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9+-199900?style=flat&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Pinia](https://img.shields.io/badge/Pinia-2.1+-FFC107?style=flat&logo=pinia&logoColor=white)](https://pinia.vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3+-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 專案簡介

這是一個參與 **#30DayMapChallenge**
第二日「Lines（線條）」主題的互動式地圖可視化專案。透過純粹的白色線條，以極簡風格重新詮釋六座世界歷史名城的城市街道網絡，呈現出不同文明圈的都市規劃特色與空間美學。

### 🎯 設計理念

- **極簡主義**：使用純白色線條在深色背景上勾勒城市輪廓，回歸最純粹的空間表達
- **文化對比**：展現東西方城市規劃的差異——從中國的棋盤式布局到歐洲的放射狀街道
- **互動探索**：提供流暢的城市導航體驗，支援顏色主題切換，讓用戶自由探索每座城市的獨特性
- **技術美學**：運用現代 Web 技術打造高性能、響應式的地圖應用

### 🌆 展示城市

| 城市                       | 特色                                 | 主題色彩 |
| -------------------------- | ------------------------------------ | -------- |
| 🏯 **西安 (XI'AN)**        | 中國古都，唐代長安城的棋盤式街道布局 | 金黃色   |
| 🏮 **北京 (BEIJING)**      | 紫禁城為中心的方正格局與現代環路系統 | 深藍色   |
| 🗼 **巴黎 (PARIS)**        | 以凱旋門為中心的放射狀林蔭大道       | 淡紫色   |
| 🏛️ **羅馬 (ROME)**         | 古羅馬帝國的同心圓街道與七丘地形     | 粉紅色   |
| 🏛️ **柏林 (BERLIN)**       | 戰後重建的現代都市規劃               | 淺藍色   |
| 🏛️ **華盛頓 (WASHINGTON)** | 美國首都的棋盤與放射混合式布局       | 青綠色   |

## ✨ 核心功能

### 🗺️ 地圖互動功能

#### 1. 一鍵城市導航

- **快速切換**：點擊左側按鈕即可瞬間飛往目標城市
- **智能縮放**：自動調整到最佳觀賞視角（每座城市的預設縮放級別經過精心調校）
- **平滑動畫**：使用 Leaflet 的動畫引擎，提供流暢的視覺過渡
- **狀態同步**：當前選中城市會高亮顯示，清晰呈現導航狀態

#### 2. 雙模式底圖系統

- **地圖模式**：Carto Dark 深色底圖，提供地理背景資訊
- **顏色主題模式**：根據每座城市的文化特色，配置專屬主題色彩
  - 切換至顏色模式時，背景色會自動匹配當前城市的主題色
  - 白色線條在彩色背景上呈現不同的視覺效果

#### 3. 極簡線條渲染

- **統一樣式**：所有城市街道以純白色 1px 線條繪製
- **高對比度**：深色背景搭配白色線條，確保最佳可讀性
- **性能優化**：使用 Leaflet 的矢量圖層渲染，支援大量線條數據

### 🎨 視覺設計特色

- **暗黑美學**：深色界面減少視覺疲勞，突出地圖內容
- **響應式佈局**：自適應各種螢幕尺寸，從桌面到行動裝置無縫切換
- **漸層動畫**：按鈕懸停效果、城市切換動畫，提供細膩的互動回饋
- **FontAwesome 圖標**：使用現代化圖標系統增強 UI 表達

### 🚀 技術亮點

- **Vue 3 Composition API**：採用最新的 Vue 組合式 API，代碼邏輯更清晰
- **Pinia 狀態管理**：輕量級、類型安全的狀態管理方案
- **GeoJSON 數據驅動**：所有城市數據以標準 GeoJSON 格式儲存，便於擴展
- **模組化架構**：清晰的目錄結構，便於維護和二次開發

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

- 提供全域佈局框架
- 管理載入狀態和進度顯示
- 整合 Vue Router 路由系統

#### 2. **HomeView.vue** - 主頁面組件

- 整合地圖顯示與控制面板
- 管理城市導航邏輯
- 處理底圖模式切換
- 初始化應用程式並載入城市數據

**核心功能：**

```javascript
// 城市導航
navigateToCity(cityId) - 將地圖視圖移動到指定城市

// 底圖切換
toggleBasemap() - 在地圖模式和顏色模式之間切換

// 地圖實例管理
setMapInstance(map) - 接收 Leaflet 地圖實例並傳遞給 dataStore
```

#### 3. **MapTab.vue** - 地圖渲染組件

- 創建和管理 Leaflet 地圖實例
- 處理 GeoJSON 圖層渲染
- 管理底圖切換和樣式應用
- 響應地圖互動事件

**關鍵特性：**

- 禁用所有地圖互動（拖拽、縮放），僅通過按鈕導航
- 自動處理容器尺寸變化（ResizeObserver）
- 支援顏色主題背景動態切換

#### 4. **dataStore.js** - 數據管理存儲

- 管理六座城市的圖層配置
- 處理 GeoJSON 數據載入
- 提供城市導航功能
- 計算並緩存地理邊界

**數據結構：**

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

- 管理底圖配置列表
- 保存當前選中的底圖類型
- 記錄地圖視圖狀態（中心點、縮放級別）

**狀態管理：**

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

### 響應式設計策略

1. **容器適配**：使用 Bootstrap 5 的 flexbox 系統，實現自適應佈局
2. **尺寸監聽**：使用 ResizeObserver 監聽容器尺寸變化，自動刷新地圖
3. **觸控支援**：雖然禁用了觸控縮放，但保留了按鈕的觸控互動

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
│   │   ├── dataProcessor.js         # 數據處理（GeoJSON 載入）
│   │   └── utils.js                 # 通用工具函數
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

- **`vue.config.js`**: Vue CLI 構建配置，設定 publicPath 用於 GitHub Pages 部署
- **`babel.config.js`**: Babel 轉譯配置，確保舊版瀏覽器兼容性
- **`jsconfig.json`**: VSCode 路徑別名配置（`@` 指向 `src`）

#### 樣式文件

- **`common.css`**: 包含全域樣式、城市按鈕樣式、地圖背景類別
- **`variables.css`**: CSS 自定義屬性，定義六座城市的主題色彩

#### 數據文件

所有 GeoJSON 文件遵循標準 RFC 7946 規範：

- 座標系統：WGS84 (EPSG:4326)
- 幾何類型：MultiLineString（道路網絡）
- 屬性：name、type 等城市街道元數據

## 🚀 快速開始

### 環境要求

| 工具     | 最低版本   | 推薦版本                |
| -------- | ---------- | ----------------------- |
| Node.js  | 16.0       | 18.x LTS                |
| npm      | 7.0        | 8.x                     |
| 作業系統 | -          | macOS / Windows / Linux |
| 瀏覽器   | Chrome 90+ | Chrome 最新版           |

### 安裝步驟

#### 1. 克隆專案

```bash
# HTTPS
git clone https://github.com/kevin7261/30DayMapChallenge-02_Lines.git

# SSH
git clone git@github.com:kevin7261/30DayMapChallenge-02_Lines.git

# 進入專案目錄
cd 30DayMapChallenge-02_Lines
```

#### 2. 安裝依賴

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm（更快）
pnpm install
```

#### 3. 啟動開發服務器

```bash
npm run serve
```

開發服務器啟動後，瀏覽器會自動開啟 `http://localhost:8080`

**終端輸出範例：**

```
 DONE  Compiled successfully in 3421ms

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.1.100:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

#### 4. 構建生產版本

```bash
# 構建優化後的生產檔案
npm run build

# 構建完成後，dist 目錄會包含所有靜態資源
```

#### 5. 部署至 GitHub Pages

```bash
# 自動構建並部署到 gh-pages 分支
npm run deploy
```

## 📖 使用指南

### 基本操作

#### 1. 城市導航

1. 查看左側控制面板的城市列表
2. 點擊任意城市按鈕（例如「BEIJING」）
3. 地圖會自動飛往該城市並調整到最佳視角
4. 當前選中的城市按鈕會高亮顯示

**城市列表（從上到下）：**

- XI'AN（西安）
- BEIJING（北京）
- ROME（羅馬）
- PARIS（巴黎）
- WASHINGTON（華盛頓）
- BERLIN（柏林）

#### 2. 底圖模式切換

點擊控制面板底部的地圖圖標按鈕：

- **地圖模式（深色底圖）**：

  - 顯示 Carto Dark 底圖
  - 提供地理背景資訊（街道名稱、地標等）
  - 適合了解城市地理位置

- **顏色主題模式**：
  - 背景色自動匹配當前城市的主題色
  - 純色背景突出白色線條的視覺效果
  - 適合欣賞城市街道的幾何美學

**切換行為：**

- 從地圖模式切換到顏色模式時，會自動載入當前城市的主題色
- 從顏色模式切換回地圖模式時，恢復深色底圖

#### 3. 地圖瀏覽

**注意**：為保持簡潔的導航體驗，此應用禁用了以下互動：

- ❌ 滑鼠拖拽移動
- ❌ 滾輪縮放
- ❌ 雙擊縮放
- ❌ 觸控手勢

**可用操作：**

- ✅ 點擊城市按鈕導航
- ✅ 切換底圖模式
- ✅ 點擊街道線條查看 Popup（顯示城市名稱）

### 顏色主題對照表

| 城市   | 主題色 | 色彩代碼  | 文化意涵                       |
| ------ | ------ | --------- | ------------------------------ |
| 西安   | 金黃色 | `#D4AF37` | 中國古代帝王色，象徵盛唐輝煌   |
| 北京   | 深藍色 | `#1E3A8A` | 中國傳統青花瓷色，代表皇家威嚴 |
| 羅馬   | 粉紅色 | `#EC4899` | 義大利浪漫色彩，呼應羅馬夕陽   |
| 巴黎   | 淡紫色 | `#A78BFA` | 法國薰衣草色，象徵優雅與藝術   |
| 華盛頓 | 青綠色 | `#10B981` | 美國自然色彩，代表自由與活力   |
| 柏林   | 淺藍色 | `#60A5FA` | 德國現代色彩，象徵理性與科技   |

### 鍵盤快捷鍵（未來功能）

目前版本未實作鍵盤快捷鍵，可考慮在未來版本加入：

```
數字鍵 1-6：快速切換城市
Space：切換底圖模式
R：重置視圖
```

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
        "type": "LineString",  // 或 MultiLineString
        "coordinates": [[lng, lat], ...]
      },
      "properties": {
        "name": "Street Name",
        "type": "primary"  // 可選
      }
    }
  ]
}
```

**數據來源建議：**

- [OpenStreetMap](https://www.openstreetmap.org/)（使用 Overpass API 提取）
- [Natural Earth Data](https://www.naturalearthdata.com/)
- 各國政府開放數據平台

**數據處理工具：**

- [QGIS](https://qgis.org/)：專業 GIS 軟體，可進行座標轉換、數據簡化
- [Mapshaper](https://mapshaper.org/)：線上工具，可壓縮 GeoJSON 文件大小

#### 步驟 2：添加 GeoJSON 文件

```bash
# 將處理好的文件放入 public/data/geojson/
cp your-city.geojson public/data/geojson/
```

#### 步驟 3：更新 dataStore.js

在 `src/stores/dataStore.js` 的 `layers` 陣列中添加新城市配置：

```javascript
{
  layerId: 'YourCity',          // 唯一標識符（駝峰式命名）
  layerName: 'YOUR CITY',       // 顯示名稱（全大寫）
  colorName: 'city-yourcity',   // CSS 變數名（全小寫）
  geoJsonData: null,            // 初始為 null，載入後填充
  loader: loadCityGeoJson,      // 使用現有的載入函數
  fileName: 'your-city.geojson',// GeoJSON 文件名
  fieldName: null,              // 主要字段（可選）
  center: [lng, lat],           // 城市中心座標（經度, 緯度）
  zoom: 12,                     // 最佳觀賞縮放級別
  boundsCenter: null,           // 自動計算，無需手動設定
}
```

**如何確定最佳縮放級別？**

1. 在開發模式下啟動應用
2. 手動調整地圖縮放，找到最佳視角
3. 打開瀏覽器控制台，執行 `console.log(mapInstance.getZoom())`
4. 將得到的數值填入 `zoom` 欄位

#### 步驟 4：定義城市主題色

在 `src/assets/css/variables.css` 或 `common.css` 中添加 CSS 變數：

```css
:root {
  --my-color-city-yourcity: #YOUR_HEX_COLOR;
}

/* 對應的顏色主題背景 */
.my-map-bg-city-yourcity-theme {
  background-color: var(--my-color-city-yourcity) !important;
}
```

**顏色選擇建議：**

- 使用 [Adobe Color](https://color.adobe.com/) 挑選協調的色彩
- 確保顏色與白色線條有足夠對比度（WCAG AA 標準）
- 考慮城市的文化特色與視覺印象

#### 步驟 5：更新顏色主題映射

在 `src/stores/dataStore.js` 的 `navigateToCity` 函數中，添加顏色主題映射：

```javascript
const colorThemeMap = {
  'city-beijing': 'city-beijing_theme',
  'city-xian': 'city-xian_theme',
  // ... 其他城市
  'city-yourcity': 'city-yourcity_theme', // 新增這一行
};
```

在 `src/views/HomeView.vue` 的 `toggleBasemap` 函數中也要添加相同映射。

#### 步驟 6：測試新城市

```bash
# 重新啟動開發服務器
npm run serve

# 在瀏覽器中測試：
# 1. 點擊新城市按鈕，檢查是否正確導航
# 2. 切換底圖模式，確認顏色主題是否正常
# 3. 檢查瀏覽器控制台是否有錯誤訊息
```

### 自定義線條樣式

預設情況下，所有城市使用統一的白色線條樣式。如果你想為特定城市自定義樣式，可修改
`MapTab.vue`：

#### 方法 1：修改全域線條樣式

在 `MapTab.vue` 的 `createFeatureLayer` 函數中：

```javascript
style: () => {
  return {
    color: 'white',      // 線條顏色
    weight: 1,           // 線寬（像素）
    opacity: 0.8,        // 不透明度（0-1）
    lineCap: 'square',   // 線端樣式：'butt' | 'round' | 'square'
    lineJoin: 'miter',   // 線連接樣式：'miter' | 'round' | 'bevel'
  };
},
```

#### 方法 2：為不同城市設定不同樣式

```javascript
style: (feature) => {
  // 根據圖層名稱決定樣式
  if (layerName === 'BEIJING') {
    return {
      color: 'cyan',
      weight: 2,
      opacity: 1,
    };
  }

  // 預設樣式
  return {
    color: 'white',
    weight: 1,
    opacity: 0.8,
  };
},
```

#### 方法 3：根據街道類型設定樣式

如果你的 GeoJSON 包含街道類型屬性（如 `properties.highway`）：

```javascript
style: (feature) => {
  const roadType = feature.properties.highway || 'default';

  const styleMap = {
    'motorway': { color: '#FF6B6B', weight: 3 },      // 高速公路
    'primary': { color: '#4ECDC4', weight: 2 },       // 主要道路
    'secondary': { color: '#95E1D3', weight: 1.5 },   // 次要道路
    'default': { color: 'white', weight: 1 },         // 其他道路
  };

  return {
    ...styleMap[roadType],
    opacity: 0.8,
    lineCap: 'round',
  };
},
```

### 性能優化建議

#### 1. 壓縮 GeoJSON 文件

```bash
# 使用 Mapshaper 簡化幾何形狀（命令列工具）
mapshaper your-city.geojson -simplify 10% -o your-city-simplified.geojson

# 或線上使用：https://mapshaper.org/
```

**簡化策略：**

- 保留視覺上的主要特徵
- 移除過於細節的線段
- 目標文件大小：< 1MB（可根據需求調整）

#### 2. 延遲載入城市數據

當前所有城市數據在應用初始化時同時載入。如果城市數量增加，可改為按需載入：

```javascript
// 在 dataStore.js 中修改 loadCityLayers
const loadCityLayers = async (cityId = null) => {
  const layersToLoad = cityId
    ? [findLayerById(cityId)] // 只載入指定城市
    : getAllLayers(); // 載入所有城市

  for (const layer of layersToLoad) {
    // ... 載入邏輯
  }
};
```

#### 3. 使用 Canvas Renderer（適用於超大數據集）

如果單個城市包含數萬條線段，可切換到 Canvas 渲染器：

```javascript
// 在 MapTab.vue 的 createMap 函數中
mapInstance = L.map(mapContainer.value, {
  // ... 其他設定
  preferCanvas: true, // 使用 Canvas 而非 SVG 渲染
});
```

**權衡考量：**

- Canvas：適合大量線條，但互動性較差
- SVG（預設）：適合中等數據量，互動性佳

### 開發工具推薦

#### IDE 擴展（Visual Studio Code）

```json
// .vscode/extensions.json
{
  "recommendations": [
    "vue.volar", // Vue 3 語法支援
    "dbaeumer.vscode-eslint", // ESLint 整合
    "esbenp.prettier-vscode", // Prettier 程式碼格式化
    "bradlc.vscode-tailwindcss", // CSS 變數提示
    "wayou.vscode-todo-highlight" // TODO 高亮
  ]
}
```

#### 調試技巧

##### 1. 啟用 Vue DevTools

安裝 [Vue DevTools](https://devtools.vuejs.org/) 瀏覽器擴展，可以：

- 檢查組件樹狀結構
- 查看 Pinia store 狀態
- 追蹤事件傳遞

##### 2. Leaflet 調試

在瀏覽器控制台訪問地圖實例：

```javascript
// 在 MapTab.vue 中暫時將 mapInstance 暴露到全域
window.__map__ = mapInstance;

// 然後在控制台執行：
__map__.getCenter(); // 查看當前中心點
__map__.getZoom(); // 查看當前縮放級別
__map__.getBounds(); // 查看當前可視範圍
```

##### 3. 性能分析

```javascript
// 使用 Performance API 測量載入時間
console.time('loadCity');
await dataStore.loadCityLayers();
console.timeEnd('loadCity');
```

#### 代碼質量檢查

```bash
# 執行 ESLint 檢查
npm run lint

# 自動修復可修復的問題
npm run lint:fix

# 執行 Prettier 格式化
npm run prettier

# 同時執行 Prettier 和 ESLint
npm run format
```

### Git 工作流程

```bash
# 創建功能分支
git checkout -b feature/add-tokyo-city

# 進行開發...
# 提交變更
git add .
git commit -m "feat: add Tokyo city with cherry blossom theme"

# 推送到遠端
git push origin feature/add-tokyo-city

# 在 GitHub 上創建 Pull Request
```

**Commit 訊息規範：**

```
feat: 新功能
fix: 修復 bug
docs: 文檔更新
style: 代碼格式調整（不影響功能）
refactor: 代碼重構
perf: 性能優化
test: 測試相關
chore: 構建/工具相關
```

## 🚀 部署說明

### GitHub Pages 部署（推薦）

此專案預設配置為部署到 GitHub Pages。

#### 自動部署

```bash
# 一鍵部署（包含構建）
npm run deploy
```

此命令會：

1. 執行 `npm run build` 構建專案
2. 將 `dist` 目錄推送到 `gh-pages` 分支
3. 自動觸發 GitHub Pages 部署

#### 手動部署

```bash
# 1. 構建專案
npm run build

# 2. 進入構建輸出目錄
cd dist

# 3. 初始化 Git 倉庫（首次）
git init
git add -A
git commit -m 'deploy'

# 4. 推送到 gh-pages 分支
git push -f git@github.com:kevin7261/30DayMapChallenge-02_Lines.git main:gh-pages

# 5. 返回專案根目錄
cd -
```

#### 配置 GitHub Pages

1. 前往 GitHub 倉庫設定頁面
2. 找到「Pages」選項
3. Source 選擇「gh-pages」分支
4. 目錄選擇「/ (root)」
5. 點擊「Save」

**訪問地址：**

```
https://kevin7261.github.io/30DayMapChallenge-02_Lines/
```

### 其他部署平台

#### Vercel

1. 安裝 Vercel CLI：

```bash
npm i -g vercel
```

2. 部署：

```bash
vercel --prod
```

3. 設定 `vercel.json`：

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### Netlify

1. 安裝 Netlify CLI：

```bash
npm i -g netlify-cli
```

2. 部署：

```bash
netlify deploy --prod --dir=dist
```

3. 設定 `netlify.toml`：

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 自托管（Nginx）

1. 構建專案：

```bash
npm run build
```

2. 配置 Nginx：

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/30DayMapChallenge-02_Lines;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 壓縮靜態資源
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 快取靜態資源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

3. 上傳 `dist` 目錄內容到服務器：

```bash
scp -r dist/* user@yourserver:/var/www/30DayMapChallenge-02_Lines/
```

### 環境變數配置

#### 開發環境

創建 `.env.development`：

```env
NODE_ENV=development
VUE_APP_API_URL=http://localhost:3000
VUE_APP_MAP_CENTER=[34.3416, 108.9402]
VUE_APP_MAP_ZOOM=11
```

#### 生產環境

創建 `.env.production`：

```env
NODE_ENV=production
VUE_APP_API_URL=https://api.yourdomain.com
VUE_APP_MAP_CENTER=[34.3416, 108.9402]
VUE_APP_MAP_ZOOM=11
```

#### 在代碼中使用

```javascript
// main.js
console.log('API URL:', process.env.VUE_APP_API_URL);
```

### 性能優化策略

#### 1. 代碼分割

當前專案已使用 Vue Router 的動態導入，未來可進一步優化：

```javascript
// router/index.js - 懶加載路由組件
const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
  },
];
```

#### 2. 資源壓縮

在 `vue.config.js` 中啟用壓縮：

```javascript
module.exports = {
  productionSourceMap: false, // 禁用 source map

  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
          },
          common: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  },

  // 生產環境使用 CDN
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.externals({
        vue: 'Vue',
        leaflet: 'L',
      });
    }
  },
};
```

#### 3. HTTP 快取策略

在 Nginx 配置中：

```nginx
# 針對不同資源類型設定快取
location ~* \.(?:ico|css|js|gif|jpe?g|png|svg|woff2?)$ {
    expires 1y;
    access_log off;
    add_header Cache-Control "public, immutable";
}

location ~* \.(?:json|geojson)$ {
    expires 1d;
    add_header Cache-Control "public, must-revalidate";
}
```

#### 4. 使用 Service Worker（PWA）

安裝 PWA 插件：

```bash
vue add pwa
```

配置 `vue.config.js`：

```javascript
module.exports = {
  pwa: {
    name: '30DayMapChallenge - Lines',
    themeColor: '#1a202c',
    msTileColor: '#1a202c',
    manifestOptions: {
      background_color: '#1a202c',
    },
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|geojson)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 天
            },
          },
        },
      ],
    },
  },
};
```

## 📚 API 文檔

### dataStore API

#### 狀態 (State)

##### `layers`

- **類型**: `Ref<Array<LayerGroup>>`
- **描述**: 城市圖層配置的響應式陣列
- **結構**:

  ```typescript
  interface LayerGroup {
    groupName: string; // 圖層組名稱
    groupLayers: Layer[]; // 圖層列表
  }

  interface Layer {
    layerId: string; // 唯一標識符
    layerName: string; // 顯示名稱
    colorName: string; // CSS 變數名
    geoJsonData: object | null; // GeoJSON 數據
    loader: Function; // 載入函數
    fileName: string; // 文件名
    fieldName: string | null; // 主要字段
    center: [number, number]; // 中心座標 [lng, lat]
    zoom: number; // 縮放級別
    boundsCenter: object | null; // 邊界中心（緩存）
  }
  ```

##### `mapInstance`

- **類型**: `Ref<L.Map | null>`
- **描述**: Leaflet 地圖實例的引用
- **用途**: 用於執行地圖操作（導航、縮放等）

##### `selectedFeature`

- **類型**: `Ref<object | null>`
- **描述**: 當前選中的地圖要素
- **用途**: 追蹤用戶點擊的街道線條

##### `visibleLayers`

- **類型**: `ComputedRef<Layer[]>`
- **描述**: 所有可見圖層的計算屬性
- **注意**: 當前版本所有城市圖層永久可見

#### 方法 (Actions)

##### `getAllLayers()`

```javascript
getAllLayers(): Layer[]
```

- **描述**: 獲取所有圖層的扁平陣列
- **返回值**: Layer[] - 包含所有城市圖層的陣列
- **使用範例**:
  ```javascript
  const dataStore = useDataStore();
  const allLayers = dataStore.getAllLayers();
  console.log(`總共有 ${allLayers.length} 個城市`);
  ```

##### `findLayerById()`

```javascript
findLayerById(layerId: string): Layer | null
```

- **描述**: 根據圖層 ID 查找圖層對象
- **參數**:
  - `layerId` (string): 圖層唯一標識符
- **返回值**: Layer | null - 找到的圖層對象，未找到返回 null
- **使用範例**:
  ```javascript
  const beijingLayer = dataStore.findLayerById('Beijing');
  if (beijingLayer) {
    console.log('城市名稱:', beijingLayer.layerName);
    console.log('中心座標:', beijingLayer.center);
  }
  ```

##### `loadCityLayers()`

```javascript
loadCityLayers(): Promise<void>
```

- **描述**: 載入所有城市圖層的 GeoJSON 數據
- **返回值**: Promise<void> - 異步操作，無返回值
- **功能**:
  1. 遍歷所有城市圖層
  2. 使用 `loader` 函數載入 GeoJSON 文件
  3. 計算並緩存邊界框中心點（用於導航）
  4. 更新圖層的 `geoJsonData` 和 `boundsCenter`
- **使用範例**:
  ```javascript
  await dataStore.loadCityLayers();
  console.log('所有城市數據載入完成');
  ```

##### `navigateToCity()`

```javascript
navigateToCity(cityId: string): void
```

- **描述**: 將地圖視圖移動到指定城市
- **參數**:
  - `cityId` (string): 城市圖層 ID（如 'Beijing'、'Paris'）
- **功能**:
  1. 查找目標城市圖層
  2. 確定最佳中心點（優先使用 boundsCenter）
  3. 切換到對應的顏色主題（如果當前在顏色模式）
  4. 執行地圖導航動畫
- **使用範例**:
  ```javascript
  dataStore.navigateToCity('Paris'); // 飛往巴黎
  ```

##### `setMapInstance()`

```javascript
setMapInstance(map: L.Map): void
```

- **描述**: 設定 Leaflet 地圖實例
- **參數**:
  - `map` (L.Map): Leaflet 地圖對象
- **用途**: 在 MapTab 組件初始化時調用，將地圖實例傳遞給 store
- **使用範例**:
  ```javascript
  // 在 MapTab.vue 中
  const mapInstance = L.map(...);
  dataStore.setMapInstance(mapInstance);
  ```

##### `setSelectedFeature()`

```javascript
setSelectedFeature(feature: object | null): void
```

- **描述**: 設定當前選中的地圖要素
- **參數**:
  - `feature` (object | null): GeoJSON Feature 對象或 null（清除選擇）
- **用途**: 追蹤用戶點擊的街道線條
- **使用範例**:

  ```javascript
  // 選中要素
  dataStore.setSelectedFeature(feature);

  // 清除選擇
  dataStore.setSelectedFeature(null);
  ```

### defineStore API

#### 狀態 (State)

##### `selectedBasemap`

- **類型**: `string`
- **預設值**: `'city-xian_theme'`
- **描述**: 當前選中的底圖類型
- **可選值**:

  ```javascript
  // 地圖模式
  'carto_dark';

  // 通用顏色主題
  'red_theme',
    'blue_theme',
    'green_theme',
    'purple_theme',
    'orange_theme',
    'yellow_theme';

  // 城市專屬顏色主題
  'city-beijing_theme',
    'city-xian_theme',
    'city-paris_theme',
    'city-berlin_theme',
    'city-rome_theme',
    'city-washington_theme';
  ```

##### `mapView`

- **類型**: `object`
- **結構**:
  ```typescript
  interface MapView {
    center: [number, number]; // [緯度, 經度]
    zoom: number; // 縮放級別 (1-18)
  }
  ```
- **預設值**: `{ center: [34.3416, 108.9402], zoom: 11 }`
- **描述**: 當前地圖視圖狀態
- **用途**: 記錄地圖的中心點和縮放級別，用於恢復視圖狀態

##### `basemaps`

- **類型**: `Array<BasemapConfig>`
- **結構**:
  ```typescript
  interface BasemapConfig {
    label: string; // 顯示標籤
    value: string; // 底圖識別碼
    url: string; // Tile Layer URL（顏色主題無 URL）
  }
  ```
- **描述**: 底圖配置列表
- **使用範例**:
  ```javascript
  const defineStore = useDefineStore();
  console.log(defineStore.basemaps);
  // [
  //   { label: 'Carto Dark', value: 'carto_dark', url: '...' },
  //   { label: '紅色主題地圖', value: 'red_theme', url: '...' },
  //   ...
  // ]
  ```

#### 方法 (Actions)

##### `setSelectedBasemap()`

```javascript
setSelectedBasemap(value: string): void
```

- **描述**: 設定選中的底圖類型
- **參數**:
  - `value` (string): 底圖識別碼（對應 `basemaps` 中的 `value`）
- **觸發效果**: 自動更新地圖顯示，切換底圖或背景色
- **使用範例**:

  ```javascript
  const defineStore = useDefineStore();

  // 切換到地圖模式
  defineStore.setSelectedBasemap('carto_dark');

  // 切換到北京主題色
  defineStore.setSelectedBasemap('city-beijing_theme');
  ```

##### `setMapView()`

```javascript
setMapView(center: [number, number], zoom: number): void
```

- **描述**: 設定地圖視圖狀態
- **參數**:
  - `center` ([number, number]): 地圖中心點 [緯度, 經度]
  - `zoom` (number): 縮放級別 (1-18)
- **用途**: 記錄地圖的當前視圖，用於狀態持久化
- **使用範例**:

  ```javascript
  const defineStore = useDefineStore();

  // 手動設定視圖（通常由地圖事件自動觸發）
  defineStore.setMapView([48.8566, 2.3522], 12); // 巴黎
  ```

### 組件事件 (Component Events)

#### MapTab 組件

##### `@map-ready`

```javascript
@map-ready="handleMapReady"
```

- **觸發時機**: Leaflet 地圖實例創建完成後
- **回調參數**: `map: L.Map` - Leaflet 地圖對象
- **用途**: 在父組件中接收地圖實例，進行初始化設定
- **使用範例**:

  ```vue
  <template>
    <MapTab @map-ready="setMapInstance" />
  </template>

  <script>
    setup() {
      const setMapInstance = (map) => {
        dataStore.setMapInstance(map);
        console.log('地圖已準備就緒');
      };

      return { setMapInstance };
    }
  </script>
  ```

##### `@feature-selected`

```javascript
@feature-selected="handleFeatureSelected"
```

- **觸發時機**: 用戶點擊地圖上的街道線條時
- **回調參數**: `feature: object` - GeoJSON Feature 對象
- **用途**: 處理要素選擇事件，顯示詳細資訊或高亮效果
- **使用範例**:

  ```vue
  <template>
    <MapTab @feature-selected="handleFeatureSelected" />
  </template>

  <script>
    setup() {
      const handleFeatureSelected = (feature) => {
        console.log('選中的街道:', feature.properties.name);
        console.log('街道類型:', feature.properties.type);
      };

      return { handleFeatureSelected };
    }
  </script>
  ```

## 🤝 貢獻指南

歡迎任何形式的貢獻！無論是回報 bug、提出新功能建議，或是提交代碼改進。

### 貢獻方式

#### 1. 回報問題 (Issue)

如果你發現 bug 或有功能建議：

1. 前往
   [Issues 頁面](https://github.com/kevin7261/30DayMapChallenge-02_Lines/issues)
2. 點擊「New Issue」
3. 選擇對應的模板：
   - **Bug Report**: 回報錯誤
   - **Feature Request**: 功能建議
   - **Documentation**: 文檔改進

**優質 Issue 範例：**

```markdown
## 問題描述

點擊柏林城市按鈕時，地圖未正確導航到柏林，而是停留在西安。

## 重現步驟

1. 啟動應用（npm run serve）
2. 點擊左側控制面板的「BERLIN」按鈕
3. 觀察地圖視圖

## 預期行為

地圖應該平滑移動到柏林的中心位置（52.52°N, 13.405°E）

## 實際行為

地圖沒有移動，仍然顯示西安

## 環境資訊

- 瀏覽器：Chrome 120.0.6099.109
- 作業系統：macOS 14.2
- Node.js 版本：18.17.0
- 專案版本：0.1.0

## 截圖

（如果適用，請附上截圖）

## 控制台錯誤訊息
```

Error: Cannot read property 'center' of null at navigateToCity
(dataStore.js:275)

```

```

#### 2. 提交拉取請求 (Pull Request)

##### 步驟 1：Fork 專案

點擊 GitHub 頁面右上角的「Fork」按鈕，將專案 fork 到你的帳號下。

##### 步驟 2：克隆 Fork 的倉庫

```bash
git clone https://github.com/YOUR_USERNAME/30DayMapChallenge-02_Lines.git
cd 30DayMapChallenge-02_Lines
```

##### 步驟 3：創建功能分支

```bash
# 從 main 分支創建新分支
git checkout -b feature/add-tokyo-city

# 分支命名規範：
# feature/xxx  - 新功能
# fix/xxx      - 修復 bug
# docs/xxx     - 文檔更新
# refactor/xxx - 代碼重構
# perf/xxx     - 性能優化
```

##### 步驟 4：進行開發

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run serve

# 進行代碼修改...
```

##### 步驟 5：提交變更

```bash
# 查看變更
git status

# 添加變更
git add .

# 提交變更（遵循 Commit 訊息規範）
git commit -m "feat: add Tokyo city with cherry blossom theme"
```

**Commit 訊息規範：**

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 類型：**

- `feat`: 新功能
- `fix`: 修復 bug
- `docs`: 文檔更新
- `style`: 代碼格式調整（不影響功能）
- `refactor`: 代碼重構
- `perf`: 性能優化
- `test`: 測試相關
- `chore`: 構建/工具相關

**範例：**

```
feat(dataStore): add Tokyo city layer with custom theme

- Add tokyo.geojson to public/data/geojson/
- Configure Tokyo layer in dataStore.js
- Define cherry blossom pink theme color
- Update color theme mapping in navigation function

Closes #42
```

##### 步驟 6：推送到 GitHub

```bash
git push origin feature/add-tokyo-city
```

##### 步驟 7：創建 Pull Request

1. 前往你 fork 的 GitHub 倉庫頁面
2. 點擊「Compare & pull request」按鈕
3. 填寫 PR 標題和描述：

```markdown
## 變更摘要

新增東京城市圖層，使用櫻花粉主題色

## 變更類型

- [x] 新功能
- [ ] Bug 修復
- [ ] 文檔更新
- [ ] 代碼重構

## 變更內容

- 添加 tokyo.geojson 數據文件
- 在 dataStore.js 中配置東京圖層
- 定義櫻花粉主題色（#FFB7C5）
- 更新顏色主題映射邏輯

## 測試

- [x] 本地測試通過
- [x] 東京城市導航正常
- [x] 顏色主題切換正常
- [x] 無控制台錯誤

## 截圖

（附上東京城市的截圖）

## 相關 Issue

Closes #42
```

4. 點擊「Create pull request」

##### 步驟 8：代碼審查

專案維護者會審查你的 PR，可能會提出修改建議：

```bash
# 根據反饋進行修改
# ... 編輯代碼 ...

# 提交新的 commit
git add .
git commit -m "fix: adjust Tokyo zoom level to 12"

# 推送更新
git push origin feature/add-tokyo-city
```

##### 步驟 9：合併

PR 被批准後，維護者會將你的代碼合併到 main 分支。

#### 3. 成為核心貢獻者

如果你有興趣長期參與專案開發，請通過以下方式聯繫：

- 提交 3+ 個高質量的 PR
- 在 Issues 中積極參與討論
- 發送郵件至 [your.email@example.com]（請替換為實際郵箱）

### 開發規範

#### 代碼風格

- **縮排**：2 空格
- **引號**：單引號
- **分號**：不強制（遵循 Prettier 配置）
- **命名**：
  - 組件名：PascalCase（如 `MapTab.vue`）
  - 變數/函數：camelCase（如 `navigateToCity`）
  - 常數：UPPER_SNAKE_CASE（如 `MAX_ZOOM`）
  - CSS 類名：kebab-case（如 `my-city-btn`）

#### Vue 組件規範

```vue
<!-- 組件結構順序 -->
<script>
  // 1. 導入
  import { ref, computed, onMounted } from 'vue';

  // 2. 組件定義
  export default {
    name: 'MyComponent',

    // 3. Props
    props: {
      cityId: { type: String, required: true },
    },

    // 4. Emits
    emits: ['city-changed'],

    // 5. Setup
    setup(props, { emit }) {
      // ... 邏輯
      return {
        /* 暴露給模板的屬性 */
      };
    },
  };
</script>

<template>
  <!-- 模板內容 -->
</template>

<style scoped>
  /* 組件樣式 */
</style>
```

#### 註釋規範

```javascript
/**
 * 函數說明（使用 JSDoc 格式）
 *
 * @param {string} cityId - 城市 ID
 * @param {number} zoom - 縮放級別
 * @returns {Promise<void>} 異步操作，無返回值
 *
 * @example
 * await navigateToCity('Beijing', 12);
 */
const navigateToCity = async (cityId, zoom) => {
  // 實現邏輯
};
```

#### 測試規範

目前專案尚未引入自動化測試，但計劃在未來版本中添加：

```bash
# 未來將支援
npm run test:unit      # 單元測試（Vitest）
npm run test:e2e       # E2E 測試（Cypress）
npm run test:coverage  # 測試覆蓋率
```

### 需要幫助的領域

我們特別歡迎以下方面的貢獻：

1. **🌏 添加更多城市**：

   - 亞洲：東京、首爾、曼谷、德里
   - 歐洲：倫敦、馬德里、阿姆斯特丹
   - 美洲：紐約、聖保羅、墨西哥城
   - 非洲：開羅、拉各斯、約翰尼斯堡
   - 大洋洲：雪梨、墨爾本

2. **🎨 設計改進**：

   - 優化控制面板 UI
   - 添加更多顏色主題
   - 設計 Logo 和 Favicon

3. **⚡ 性能優化**：

   - 實作虛擬化渲染（處理超大 GeoJSON）
   - 優化地圖動畫效果
   - 減少初始載入時間

4. **📱 響應式優化**：

   - 改進移動端體驗
   - 添加觸控手勢支援
   - 優化小螢幕佈局

5. **📚 文檔完善**：

   - 翻譯成其他語言（英文、日文、韓文等）
   - 添加視頻教程
   - 編寫開發者指南

6. **🧪 測試**：
   - 引入單元測試框架
   - 編寫組件測試
   - 添加 E2E 測試

## 📄 授權條款

本專案採用 **MIT License** 授權條款。

### MIT License

```
MIT License

Copyright (c) 2024 Kevin Cheng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 使用條款說明

✅ **你可以**：

- 商業使用（用於商業專案）
- 修改代碼（進行自定義開發）
- 分發代碼（分享給他人）
- 私人使用（個人項目）
- 授權他人（允許他人使用）

❗ **你必須**：

- 保留版權聲明（在代碼中保留原作者資訊）
- 包含授權條款（附帶 MIT License 文件）

❌ **作者不承擔**：

- 代碼質量保證
- 功能完整性保證
- 任何法律責任

### 第三方資源授權

本專案使用的第三方資源及其授權：

| 資源                                            | 授權條款                  | 說明       |
| ----------------------------------------------- | ------------------------- | ---------- |
| [Vue.js](https://vuejs.org/)                    | MIT License               | 前端框架   |
| [Leaflet](https://leafletjs.com/)               | BSD 2-Clause              | 地圖庫     |
| [Pinia](https://pinia.vuejs.org/)               | MIT License               | 狀態管理   |
| [Bootstrap](https://getbootstrap.com/)          | MIT License               | UI 框架    |
| [FontAwesome](https://fontawesome.com/)         | Font Awesome Free License | 圖標庫     |
| [D3.js](https://d3js.org/)                      | ISC License               | 數據可視化 |
| [OpenStreetMap](https://www.openstreetmap.org/) | ODbL License              | 地圖數據   |
| [Carto](https://carto.com/)                     | BSD License               | 底圖服務   |

### 數據來源聲明

本專案使用的城市街道數據來源於
[OpenStreetMap](https://www.openstreetmap.org/)，遵循 **Open Database License
(ODbL)** 條款：

- 數據版權歸 OpenStreetMap 貢獻者所有
- 使用數據時需註明出處
- 數據的衍生作品需採用相同授權條款

**數據引用格式**：

```
© OpenStreetMap contributors
Data licensed under the Open Database License (ODbL)
```

## 📞 聯繫方式

### 專案維護者

- **姓名**: Kevin Cheng
- **GitHub**: [@kevin7261](https://github.com/kevin7261)
- **Email**: [請替換為實際郵箱]
- **Twitter**: [請替換為實際 Twitter]

### 專案連結

- **線上展示**:
  [https://kevin7261.github.io/30DayMapChallenge-02_Lines/](https://kevin7261.github.io/30DayMapChallenge-02_Lines/)
- **GitHub 倉庫**:
  [https://github.com/kevin7261/30DayMapChallenge-02_Lines](https://github.com/kevin7261/30DayMapChallenge-02_Lines)
- **Issue 追蹤**:
  [https://github.com/kevin7261/30DayMapChallenge-02_Lines/issues](https://github.com/kevin7261/30DayMapChallenge-02_Lines/issues)

### 獲取協助

遇到問題？請嘗試以下方式：

1. **查看文檔**：本 README 包含詳細的使用和開發指南
2. **搜尋 Issues**：可能已有類似問題的解答
3. **提交 Issue**：描述你的問題，我們會盡快回覆
4. **參與討論**：前往
   [Discussions](https://github.com/kevin7261/30DayMapChallenge-02_Lines/discussions)（如果啟用）

### 社群資源

- **#30DayMapChallenge**: [官方網站](https://30daymapchallenge.com/)
- **Leaflet 社群**: [官方論壇](https://leafletjs.com/community.html)
- **Vue.js 社群**: [Discord](https://discord.com/invite/vue)

## 🙏 致謝

### 技術貢獻者

感謝以下開源專案，使本專案得以實現：

- **[Leaflet](https://leafletjs.com/)** - Vladimir
  Agafonkin 創建的優秀開源地圖庫
- **[Vue.js](https://vuejs.org/)** - Evan
  You 及 Vue 核心團隊開發的漸進式 JavaScript 框架
- **[Pinia](https://pinia.vuejs.org/)** - Eduardo San Martin
  Morote 開發的 Vue 狀態管理庫
- **[Bootstrap](https://getbootstrap.com/)** - Twitter 團隊創建的 CSS 框架
- **[D3.js](https://d3js.org/)** - Mike Bostock 創建的數據可視化庫
- **[FontAwesome](https://fontawesome.com/)** - Dave Gandy 創建的圖標庫

### 數據提供者

- **[OpenStreetMap](https://www.openstreetmap.org/)**
  及其全球貢獻者 - 提供開放的地理數據
- **[Natural Earth](https://www.naturalearthdata.com/)** - 提供公共領域的地圖數據集
- **[Carto](https://carto.com/)** - 提供優質的底圖服務

### 靈感來源

- **[#30DayMapChallenge](https://30daymapchallenge.com/)** - Topi
  Tjukanov 發起的地圖可視化挑戰
- **[Stamen Maps](https://stamen.com/maps/)** - 極簡風格地圖的設計靈感
- **[Felt](https://felt.com/)** - 現代地圖應用的 UI/UX 參考

### 特別感謝

- 所有提交 Issue 和 PR 的貢獻者
- 在社群中分享和推廣本專案的朋友們
- 提供建議和反饋的測試用戶

---

<div align="center">

**🌍 30DayMapChallenge - 用線條探索世界城市之美 ✨**

Made with ❤️ by [Kevin Cheng](https://github.com/kevin7261)

[⬆ 回到頂部](#-30daymapchallenge---世界城市線條地圖)

</div>
