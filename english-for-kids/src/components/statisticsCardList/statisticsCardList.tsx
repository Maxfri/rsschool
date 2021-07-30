import React from 'react';
import StatisticsCard from '../statisticsCard/statisticsCard';
import { Card } from '../../interface/interface';

interface Props {
  cards: Card[],
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
