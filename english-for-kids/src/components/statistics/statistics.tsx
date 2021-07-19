import React from 'react';
import StatisticsCardList from '../statisticsCardList/statisticsCardList';
import './statistics.css';

function Statistics({ category, cards }) {
  // console.log(cards);
  return (
    <div className="statistics-category">
      <div className="statistics-category-name">
        <div>{category.title}</div>
        <img src={category.image} alt="" />
      </div>

      <StatisticsCardList cards={cards} />
    </div>
  );
}

export default Statistics;
