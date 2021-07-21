import React from 'react';
import Statistics from '../statistics/statistics';
import StatisticsBtn from '../statisticsBtn/statisticsBtn';

function StatisticsList({ categories, cards, setCards }) {
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
