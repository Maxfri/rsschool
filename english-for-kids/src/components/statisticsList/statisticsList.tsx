import React from 'react';
import Statistics from '../statistics/statistics';
import StatisticsBtn from '../statisticsBtn/statisticsBtn';

interface Category {
  id: number,
  title: string,
  image: string,
}
interface Cards {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
  clicks: string,
  rightClick: string,
  wrongClick: string,
  percent: string
}
interface Props {
  categories: Category[],
  cards: Cards[][]
}

function StatisticsList({ categories, cards }: Props): JSX.Element {
  return (
    <main className="grid-wrapper statistics-category-wrapper">
      {categories.map((category) => (
        <Statistics category={category} cards={cards[category.id - 1]} key={category.id} />
      ))}
      <StatisticsBtn />
    </main>
  );
}

export default StatisticsList;
