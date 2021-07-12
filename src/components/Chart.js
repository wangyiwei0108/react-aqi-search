import React, {useState, useEffect} from 'react';
import CardList from './CardList';
import SelectedCard from './SelectedCard';

const Chart = ({countySelected, data, setSelectedCard, selectedCard}) => {

  const [dataSelected, setDataSelected] = useState([]);
  //有選擇 county 以及沒有選擇 county 的 CardList 顯示設定
  useEffect(() => {
    const defaultSelectedCounty = data.filter(item => item.County === "新北市")

    ! countySelected
    ? setDataSelected(defaultSelectedCounty)
    : (setDataSelected(data.filter(item => item.County === countySelected)));

  }, [data, countySelected])

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