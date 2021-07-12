import React from 'react';
import Card from './Card';

const SelectedCard = ({selectedCard}) => {
  
  return (
    <div className="selectedCard__container">
      <div className="selectedCard__district">
        <Card district={selectedCard.SiteName} aqi={selectedCard.AQI} color={selectedCard.color}/>
      </div>
      <div className="selectedCard__pollutions">
        <div className="selectedCard__pollution">
          <p className="selectedCard__name">臭氧</p>
          <p className="selectedCard__unit">O3 (ppb)</p>
          <p className="selectedCard__aqi">{selectedCard.O3}</p>
        </div>
        <div className="selectedCard__pollution">
          <p className="selectedCard__name">懸浮微粒</p>
          <p className="selectedCard__unit">PM10 (μg/m3)</p>
          <p className="selectedCard__aqi">{selectedCard.PM10}</p>
        </div>
        <div className="selectedCard__pollution">
          <p className="selectedCard__name">細懸浮微粒</p>
          <p className="selectedCard__unit">PM2.5 (μg/m3)</p>
          <p className="selectedCard__aqi">{selectedCard["PM2.5"]}</p>
        </div>
        <div className="selectedCard__pollution">
          <p className="selectedCard__name">一氧化碳</p>
          <p className="selectedCard__unit">CO (ppm)</p>
          <p className="selectedCard__aqi">{selectedCard.CO}</p>
        </div>
        <div className="selectedCard__pollution">
          <p className="selectedCard__name">二氧化硫</p>
          <p className="selectedCard__unit">SO2 (ppb)</p>
          <p className="selectedCard__aqi">{selectedCard.SO2}</p>
        </div>
        <div className="selectedCard__pollution">
          <p className="selectedCard__name">二氧化氮</p>
          <p className="selectedCard__unit">NO2 (ppb)</p>
          <p className="selectedCard__aqi">{selectedCard.NO2}</p>
        </div>
      </div>
      <p className="selectedCard__source">資料來源：行政院環保署</p>
    </div>
  )
}

export default SelectedCard;