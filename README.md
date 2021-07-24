# 臺灣空氣品質查詢

運用行政院環保署提供的[開放資料](https://data.epa.gov.tw/dataset/aqx_p_432)，開發而成的互動式網頁。使用者可點擊表單選項，查看臺灣各地區之即時空氣品質指標（AQI）。

## DEMO
[前往頁面](https://wangyiwei0108.github.io/react-aqi-search/)
(https://wangyiwei0108.github.io/react-aqi-search/)

## 使用技術
- HTML / CSS / JS
- SASS
- Fetch API
- React

## 實現功能

- RWD：瀏覽器畫面支援手機、平板、電腦等裝置
- 點擊下拉式選單，選擇欲查看之縣市別
- 畫面右側，顯示縣市別之所有地區，可進一步點選查看資訊
- 畫面左側，顯示所選擇之該地區空氣品質指標（AQI）

## 學習記錄

- 使用 React Hooks（useState、useEffect）
- 串接 API 取得資料
- 使用 Async / Await 處理非同步請求
- 資料處理（filter、map、forEach 之應用）
- 設定元件狀態之預設顯示值
- 以 gh-pages 部署至 Github

![GITHUB](https://github.com/wangyiwei0108/react-aqi-search/blob/master/src/assets/aqi.png)
