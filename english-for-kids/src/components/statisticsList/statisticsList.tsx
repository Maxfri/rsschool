import React from 'react';
import Statistics from '../statistics/statistics';
import StatisticsBtn from '../statisticsBtn/statisticsBtn';

interface Props {
  categories: any,
  cards: any,
  setCards: any
}

function StatisticsList({ categories, cards, setCards }: Props): JSX.Element {
  return (
    <main className="grid-wrapper statistics-category-wrapper">
      {categories.map((category) => (
        <Statistics category={category} cards={cards[category.id]} key={category.id} />
      ))}
      <StatisticsBtn />
    </main>
  );
}

export default StatisticsList;
