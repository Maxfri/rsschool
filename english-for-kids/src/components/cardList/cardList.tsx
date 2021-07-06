import React, { useState, useEffect } from 'react';
import Cards from '../cards/cards';

function CardList({ cards }: any) {
  const [, setGame] = useState(false);
  useEffect(() => {
    const modeSwitcher: HTMLInputElement = document.querySelector('#toggleSwitch');
    const GameChangeHandler = () => setGame(modeSwitcher.checked);
    modeSwitcher.addEventListener('change', GameChangeHandler);
    return () => {
      modeSwitcher.removeEventListener('change', GameChangeHandler);
    };
  });

  return (
    <main className="grid">
      {cards.map((card) => <Cards card={card} key={card.id} />)}
    </main>
  );
}

export default CardList;
