import React from 'react';
import StatisticsCard from '../statisticsCard/statisticsCard';

function StatisticsCardList({cards}) {
  return (
    <>
      {cards.map((card) => (
        <StatisticsCard card={card} key={card.word} />
      ))}
    </>
  )
}

export default StatisticsCardList;
