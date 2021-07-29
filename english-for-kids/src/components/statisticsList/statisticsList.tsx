import React from 'react';
import Statistics from '../statistics/statistics';
import StatisticsBtn from '../statisticsBtn/statisticsBtn';
import { Category, Card } from '../../interface/interface';
import { INCRIMENT as DECREMENT } from '../../const/const';

interface Props {
  categories: Category[],
  cards: Card[][]
}

function StatisticsList({ categories, cards }: Props): JSX.Element {
  return (
    <main className="grid-wrapper statistics-category-wrapper">
      {categories.map((category) => (
        <Statistics category={category} cards={cards[category.id - DECREMENT]} key={category.id} />
      ))}
      <StatisticsBtn />
    </main>
  );
}

export default StatisticsList;
