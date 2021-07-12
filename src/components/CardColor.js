import React from 'react';

const CardColor = ({aqi, color}) => {

  return (
    <div className={`cardColor__container ${color}`}>
      <p>{aqi}</p>
    </div>
  )
}

export default CardColor;