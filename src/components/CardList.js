import React from 'react';
import Card from './Card';

const CardList = ({dataSelected, setSelectedCard}) => {

  return (
    <div className="cardList__container">
      {dataSelected.map(data => <Card key={data.SiteId} district={data.SiteName} aqi={data.AQI} setSelectedCard={setSelectedCard} data={data} color={data.color}/>)}
    </div>
  )
}

export default CardList;