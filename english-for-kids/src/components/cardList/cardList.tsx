import React from 'react';
import Cards from '../cards/cards';

function CardList({ cards }: any) {
  return (
    <main className="grid">
      {cards.map((card) => <Cards card={card} key={card.id} />)}
    </main>
  );
}

export default CardList;
