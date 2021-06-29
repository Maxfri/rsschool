import React from 'react';
import cards from './CardsData';
import './card.css';

function Card(): JSX.Element {
  return (
    <>
      {cards.map((item, index) => (
        <div className="card">
          <img className="img" src={item.image} alt="Card image" />
          <div className="card-body">
            <p className="card-text" />
            {item.word}
            <img className="card-flip" src="../src/assets/img/cached_black.png" alt="Card flip" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
