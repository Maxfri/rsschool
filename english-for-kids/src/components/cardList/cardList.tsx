import React, { useState, useEffect } from 'react';
import GameBtn from '../gameBtn/gameBtn';
import GameCards from '../gameCards/gameCards';
import TrainCards from '../trainCards/trainCards';
import '../cards/cards.css';

function CardList({ cards }: any) {
  const [game, setGame] = useState(false);

  useEffect(() => {
    const modeSwitcher: HTMLInputElement = document.querySelector('#toggleSwitch');
    const GameChangeHandler = () => setGame(modeSwitcher.checked);
    modeSwitcher.addEventListener('change', GameChangeHandler);
    return () => {
      modeSwitcher.removeEventListener('change', GameChangeHandler);
    };
  });

  if (game) {
    return (
      <main className="grid card-list">
        {cards.map((card) => <GameCards card={card} key={card.id} game={game} />)}
        <GameBtn cards={cards} />
      </main>
    );
  }
  return (
    <main className="grid">
      {cards.map((card) => <TrainCards card={card} key={card.id} game={game} />)}
    </main>
  );
}

export default CardList;
