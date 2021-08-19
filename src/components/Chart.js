import React from 'react';
import CardList from './CardList';
import SelectedCard from './SelectedCard';

const Chart = ({countySelected, dataSelected, setSelectedCard, selectedCard}) => {

  return (
    <div className="chart__container">
      <h3 className="chart__location">{countySelected || `新北市`}</h3>
      <div className="chart__update-time"><span>更新時間：</span>{selectedCard.PublishTime}</div>
      <section className="chart__selected-card">
        <SelectedCard selectedCard={selectedCard}/>
      </section>
      <section className="chart__cardList">
        <CardList dataSelected={dataSelected} setSelectedCard={setSelectedCard}/>
      </section>
    </div>
  )
}

export default Chart;