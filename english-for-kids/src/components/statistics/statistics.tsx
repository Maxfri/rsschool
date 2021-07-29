import React from 'react';
import StatisticsCardList from '../statisticsCardList/statisticsCardList';
import './statistics.css';

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
interface Category {
  id: number,
  title: string,
  image: string,
}
interface Props {
  category: Category,
  cards: Cards[],
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
