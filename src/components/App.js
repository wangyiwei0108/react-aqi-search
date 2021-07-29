import React, {useEffect, useState} from 'react';
import Bar from './Bar';
import Chart from './Chart';

const App = () => {

  const [counties, setCounties] = useState([]);//所有 county 名稱
  const [countySelected, setCountySelected] = useState('');//使用者所選擇的 county
  const [dataWithColor, setDataWithColor] = useState([]);//所有的資料加入「顏色」
  const [selectedCard, setSelectedCard] = useState({});//使用者所選擇的 county、district 的資料

  useEffect(() => {

    const getData = async() => {
      try {
        //要全部的資料
        const response = await fetch('https://data.epa.gov.tw/api/v1/aqx_p_432?offset=0&limit=100&api_key=d15d5d72-05e5-41c0-ad3b-65eb8555311e');
        const data = await response.json();

        //把 empty string 改成 -
        data.records.map((record) => {
          return Object.keys(record).forEach(k => record[k] = record[k] === '' ? '-' : record[k])
        })

        //篩選出不重複的 county
        const repeatedCounties = data.records.map((record) => record.County)
        const nonRepeatedCounties = repeatedCounties.filter((item, index, arr) => {return arr.indexOf(item) === index})
        setCounties(nonRepeatedCounties);

        //將 aqi 顏色匯入資料
        const dataWithColors = data.records.map((record) => {
          if(record.AQI < 51) {
            return {...record, color: "green"}
          } else if(50 < record.AQI && record.AQI < 100) {
            return {...record, color: "yellow"}
          } else if (100 < record.AQI && record.AQI < 151) {
            return {...record, color: "orange"}
          } else if (150 < record.AQI && record.AQI < 201) {
            return {...record, color: "red"}
          } else if (200 < record.AQI && record.AQI < 301) {
            return {...record, color: "purple"}
          } else if ( 300 < record.AQI && record.AQI < 401) {
            return {...record, color: "brown"}
          } else {
            return {...record, color: "pink"}
          }
        })
        setDataWithColor(dataWithColors);

        //有選擇 county 以及沒有選擇 county 的 SelectedCard 顯示設定
        const defaultSelectedCounty = dataWithColors.filter(data => data.County === "新北市");
        const notdefault = dataWithColors.filter(data => data.County === countySelected);
        ! countySelected
        ? setSelectedCard(defaultSelectedCounty[0])
        : setSelectedCard(notdefault[0])
      }
      catch(err) {
        setDataWithColor(null);
        console.log(err);
      }
    }
    getData();


  }, [countySelected])

  return(
    <div className="app__wrapper">
      <div className="app__container">
        <section className="app__title">
          <h1>臺灣空氣品質查詢</h1>
          <i className="fas fa-search"></i>
        </section>
        { !dataWithColor ?
        <div>抱歉！資料每整點更新一次，請您稍候再嘗試，感謝。</div> :
        <div>
          <section className="app__bar">
            <Bar counties={counties} countySelected={countySelected} setCountySelected={setCountySelected}/>
          </section>
          <section className="app__chart">
            <Chart countySelected={countySelected} data={dataWithColor} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
          </section>
        </div>
        }
      </div>
    </div>
  )
}

export default App;
