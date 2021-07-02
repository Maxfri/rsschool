import React, { useState } from 'react';
import './cards.css';

function Cards({ card }): JSX.Element {
  const [flip, setFlip] = useState(false);
  const audio = new Audio(card.audioSrc);

  const play = () => {
    audio.play();
  };

  return (
    <article
      key={card.id}
      className={`card${flip ? ' flip' : ''}`}
    >
      <div className="front" onClick={play}>
        <img className="img" src={card.image} alt="Card" />
        <div className="card-body">
          <p className="card-text">
            {card.word}
          </p>
          <img className="card-flip" src="../src/assets/img/cached_black.png" alt="Card flip" onClick={() => setFlip(!flip)} />
        </div>
      </div>

      <div className="back">
        <img className="img" src={card.image} alt="Card" />
        <div className="card-body">
          <p className="card-text">
            {card.translation}
          </p>
          <img className="card-flip" src="../src/assets/img/cached_black.png" alt="Card flip" onClick={() => setFlip(!flip)} />
        </div>
      </div>
    </article>
  );
}

export default Cards;
