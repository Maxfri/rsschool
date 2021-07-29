import React from 'react';
import StatisticsCard from '../statisticsCard/statisticsCard';

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
  cards: Cards[],
}

function StatisticsCardList({ cards }: Props): JSX.Element {
  return (
    <>
      {cards.map((card) => (
        <StatisticsCard card={card} key={card.word} />
      ))}
    </>
  );
}

export default StatisticsCardList;
