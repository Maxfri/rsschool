import React from 'react';

function GameCards({ card }: any) {
  return (
    <article
      key={card.id}
      className={`card`}
      data-word={card.word}
    >
      <div className="front" data-word={card.word}>
        <img className="img" src={card.image} data-word={card.word} alt="Card" />
      </div>
    </article>
  );
}

export default GameCards;
