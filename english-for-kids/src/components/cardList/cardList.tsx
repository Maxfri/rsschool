import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import GameBtn from '../gameBtn/gameBtn';
import GameCards from '../gameCards/gameCards';
import TrainCards from '../trainCards/trainCards';
import cardsData from '../cards/CardsData';
import '../cards/cards.css';

function CardList({ match, mode, setMode }: any) {
  const { id } = match.params;
  const cards = cardsData[id];

  if (mode === 'game') {
    return (
      <>
        <div className="game-score rating" />
        <main className="grid card-list">
          {cards.map((card) => <GameCards card={card} key={card.word} />)}
          <GameBtn cards={cards} />
        </main>
        <div className="game-result" />
      </>
    );
  }

  return (
    <main className="grid">
      {cards.map((card) => <TrainCards card={card} key={card.word} />)}
    </main>
  );
}

export default withRouter(CardList);
