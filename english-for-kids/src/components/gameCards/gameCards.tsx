import React, { useEffect } from 'react';

interface Props {
  card: any,
  audio: any[],
  setAudio: any,
  playAudio: any,
  setGameState: any
}
function GameCards({
  card, audio, setAudio, playAudio, setGameState,
}: Props): JSX.Element {
  useEffect(() => {
    if (audio.length === 0) {
      setGameState('win');
    }
  });
  const handlerCheckCard = () => {
    if (audio[0].word === card.word) {
      const filteredItems = audio.filter((item) => item !== audio[0]);
      setAudio(filteredItems);
      playAudio(filteredItems[0]);
    } else {
      playAudio(audio[0]);
    }
  };

  // else {
  //   setGameState('lose');
  // }

  return (
    <article
      key={card.id}
      className="game-card"
      // data-word={card.word}
      onClick={handlerCheckCard}
      onKeyDown={handlerCheckCard}
      role="presentation"
    >
      <img className="game-card-img" src={card.image} data-word={card.word} alt="Card" onClick={handlerCheckCard} />
    </article>
  );
}

export default GameCards;
