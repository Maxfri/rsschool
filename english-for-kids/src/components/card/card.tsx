import React from 'react';
import cards from './CardsData';
import './card.css';

function Cards(): JSX.Element {
  return (
    <main className="grid">
      {cards.map((item, index) => (
        <article key={index} className="card">
          <img className="img" src={item.image} alt="Card" />
          <div className="card-body">
            <p className="card-text">
              {item.word}
            </p>
            <img className="card-flip" src="../src/assets/img/cached_black.png" alt="Card flip" />
          </div>
        </article>
      ))}
    </main>
  );
}

export default Cards;
