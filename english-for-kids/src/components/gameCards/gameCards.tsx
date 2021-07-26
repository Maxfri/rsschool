import React, { useEffect } from 'react';

interface Props {
  card: any,
  audio: any[],
  setAudio: any,
  playAudio: any,
  setGameState: any,
  wrongClick: any,
  setWrongClick: any,
  rightClick: any,
  setRightClick: any
}
function GameCards({
  card, audio, setAudio, playAudio, setGameState, wrongClick,
  setWrongClick,
  rightClick,
  setRightClick
}: Props): JSX.Element {
  const handlerCheckCard = () => {
    if (audio.length === 0 && wrongClick === 0) {
      setGameState('win');
    } else if (audio.length === 0 && wrongClick !== 0) {
      setGameState('lose');
    }
    if (audio[0].word === card.word) {
      setRightClick(rightClick + 1);
      const filteredItems = audio.filter((item) => item !== audio[0]);
      setAudio(filteredItems);
      playAudio(filteredItems[0]);
    } else {
      setWrongClick(wrongClick + 1);
      playAudio(audio[0]);
    }
  };

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
