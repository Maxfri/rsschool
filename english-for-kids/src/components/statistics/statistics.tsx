import React from 'react';
import StatisticsCardList from '../statisticsCardList/statisticsCardList';
import './statistics.css';

interface Props {
  category: any,
  cards: any,
}

function Statistics({ category, cards }: Props): JSX.Element {
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
