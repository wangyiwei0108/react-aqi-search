import React from 'react';

const Bar = ({counties, countySelected, setCountySelected}) => {

  const countySelectedHandler = (e) => {
    setCountySelected(e.target.value);
  }

  return (
    <div className="bar__container">
      <h3 className="bar__title">空氣品質指標（AQI）</h3>
      <select className="bar__selections" value={countySelected} onChange={countySelectedHandler}>
        <option value="">請選擇地區</option>
        {counties.map((county, index) => <option value={county} key={index}>{county}</option>)}
      </select>
      <div className="bar__aqi-container">
        <div className="bar__aqi-box">
          <div className="bar__aqi-num bar__aqi-num--1"><p>0 - 50</p></div>
          <div className="bar__aqi-info"><p>良好</p></div>
        </div>
        <div className="bar__aqi-box">
          <div className="bar__aqi-num bar__aqi-num--2"><p>51 - 100</p></div>
          <div className="bar__aqi-info"><p>普通</p></div>
        </div>
        <div className="bar__aqi-box">
          <div className="bar__aqi-num bar__aqi-num--3"><p>101 - 150</p></div>
          <div className="bar__aqi-info"><p>敏感</p></div>
        </div>
        <div className="bar__aqi-box">
          <div className="bar__aqi-num bar__aqi-num--4"><p>151 - 200</p></div>
          <div className="bar__aqi-info"><p>不良</p></div>
        </div>
        <div className="bar__aqi-box">
          <div className="bar__aqi-num bar__aqi-num--5"><p>201 - 300</p></div>
          <div className="bar__aqi-info"><p>糟糕</p></div>
        </div>
        <div className="bar__aqi-box">
          <div className="bar__aqi-num bar__aqi-num--6"><p>301 - 400</p></div>
          <div className="bar__aqi-info"><p>危害</p></div>
        </div>
      </div>
    </div>
  )
}

export default Bar;