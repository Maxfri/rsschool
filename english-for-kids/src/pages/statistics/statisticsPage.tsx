import React, { useState } from 'react';
import cardsCategoryData from '../../components/cards/cardsCategoryData';
import cardsData from '../../components/cards/CardsData';
import StatisticsList from '../../components/statisticsList/statisticsList';

function StatisticsPage():JSX.Element {
  const [categories] = useState(cardsCategoryData);
  const [cards] = useState(cardsData);

  return (
    <section className="main-section">
      <h2>Statistics</h2>
      <StatisticsList categories={categories} cards={cards} />
    </section>
  );
}

export default StatisticsPage;
