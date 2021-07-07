import React, { useState, useEffect} from 'react';

function TrainCards({ card }: any) {
  const [flip, setFlip] = useState(false);
  const { audioSrc } = card;
  const { id } = card;
  const imageSrc: string = card.image;
  const audio = new Audio(audioSrc);

  useEffect(() => {
    const articles: NodeListOf<Element> = document.querySelectorAll('.card');
    const backFlip = () => {
      if (flip) {
        setFlip(!flip)
      }
    }
    articles.forEach((article) => {
      article.addEventListener('mouseleave', backFlip);
      return () => {
        article.removeEventListener('mouseleave', backFlip);
      };
    })
  });

  const play = () => {
    audio.play();
  };

  return (
    <article
      key={id}
      className={`card${flip ? ' flip' : ''}`}
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
