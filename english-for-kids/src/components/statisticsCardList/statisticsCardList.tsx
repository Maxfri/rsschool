import React from 'react';
import StatisticsCard from '../statisticsCard/statisticsCard';

interface Props {
  cards: any;
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
