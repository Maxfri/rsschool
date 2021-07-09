import React from 'react';

function GameCards({ card }: any) {
  return (
    <article
      key={card.id}
      className="game-card"
      data-word={card.word}
    >
        <img className="game-card-img" src={card.image} data-word={card.word} alt="Card" />
    </article>
  );
}

export default GameCards;
