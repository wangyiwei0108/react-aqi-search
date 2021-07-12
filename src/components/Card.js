import React from 'react';
import CardColor from './CardColor';

const Card = ({district, aqi, setSelectedCard, data, color}) => {

  const selectedCardHandler = (data) => {
    setSelectedCard(data);
  }

  return (
    <div className="card__container" onClick={() => selectedCardHandler(data)}>
      <div className="card__district">
        <h3>{district}</h3>
      </div>
      <div className="card__aqi">
        <CardColor aqi={aqi} color={color}/>
      </div>
    </div>
  )
}

export default Card;