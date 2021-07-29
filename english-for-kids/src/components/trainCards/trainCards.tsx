import React, { useState } from 'react';
import { Card } from '../../interface/interface';

interface Props {
  card: Card
}
function TrainCards({ card }: Props): JSX.Element {
  const [flip, setFlip] = useState(false);
  const { audioSrc } = card;
  const imageSrc: string = card.image;
  const audio = new Audio(audioSrc);

  const backFlip = () => {
    if (flip) {
      setFlip(!flip);
    }
  };

  const play = () => {
    audio.play();
  };

  return (
    <article
      key={card.word}
      className={`card${flip ? ' flip' : ''}`}
      onMouseLeave={backFlip}
    >
      <div className="front" onClick={play} onKeyDown={play} role="presentation">
        <img className="img" src={imageSrc} alt="Card" />
        <div className="card-body">
          <p className="card-text">
            {card.word}
          </p>
          <img
            className="card-flip"
            src="../src/assets/img/cached_black.png"
            alt="Card flip"
            onClick={() => setFlip(!flip)}
            onKeyDown={() => setFlip(!flip)}
            role="presentation"
          />
        </div>
      </div>

      <div className="back">
        <img className="img" src={imageSrc} alt="Card" />
        <div className="card-body">
          <p className="card-text">
            {card.translation}
          </p>
        </div>
      </div>
    </article>
  );
}

export default TrainCards;
