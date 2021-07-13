import React, { useState } from 'react';
import cardsData from '../../components/cards/CardsData';
import StatisticsList from '../../components/statisticsList/statisticsList';

function StatisticsPage():JSX.Element {
  const [categories] = useState(cardsData[0]);
  const [cards, setCards] = useState(cardsData);

  return (
    <section className="main-section">
      <h2>Statistics</h2>
      <StatisticsList categories={categories} cards={cards} />
    </section>
  );
}

export default StatisticsPage;
