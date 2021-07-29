import React from 'react';
import StatisticsCardList from '../statisticsCardList/statisticsCardList';
import { Category, Card } from '../../interface/interface';
import './statistics.css';

interface Props {
  category: Category,
  cards: Card[],
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
