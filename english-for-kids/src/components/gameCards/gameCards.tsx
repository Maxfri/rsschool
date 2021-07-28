import React, { useState } from 'react';

interface Props {
  card: any,
  audio: any[],
  setAudio: any,
  playAudio: any,
  setGameState: any,
  countAnswers: any,
  setCountAnswers: any,
  stars: any,
  setStars: any
}
function GameCards({
  card, audio, setAudio, playAudio, setGameState, countAnswers, setCountAnswers, stars, setStars,
}: Props): JSX.Element {
  const [rightCard, setRightCard] = useState('game-card');

  const endGame = () => {
    if (audio.length === 1 && countAnswers.wrong > 0) {
      const loseAudio: HTMLAudioElement = new Audio('../src/assets/audio/failure.mp3');
      loseAudio.play();
      setGameState('lose');
    } else {
      const winAudio: HTMLAudioElement = new Audio('../src/assets/audio/success.mp3');
      winAudio.play();
      setGameState('win');
    }
  };

  const rightAnswer = () => {
    setCountAnswers({ right: countAnswers.right + 1, wrong: countAnswers.wrong });
    const correctAudio: HTMLAudioElement = new Audio('../src/assets/audio/correct.mp3');
    correctAudio.play();
    setStars([...stars, 'right']);
    const filteredItems = audio.filter((item) => item !== audio[0]);
    setAudio(filteredItems);
    playAudio(filteredItems[0]);
    if (audio.length === 1) {
      endGame();
    }
  };

  const wrongAnswer = () => {
    setCountAnswers({ right: countAnswers.right, wrong: countAnswers.wrong + 1 });
    const errorAudio: HTMLAudioElement = new Audio('../src/assets/audio/error.mp3');
    errorAudio.play();
    setStars([...stars, 'wrong']);
    playAudio(audio[0]);
  };

  const getCheckCard = () => {
    if (audio[0].word === card.word) {
      rightAnswer();
      setRightCard('right-check');
    } else {
      wrongAnswer();
    }
  };
  const handlerCheckCard = () => {
    getCheckCard();
  };

  return (
    <article
      key={card.id}
      className={rightCard}
      onClick={handlerCheckCard}
      onKeyDown={handlerCheckCard}
      role="presentation"
    >
      <img
        className="game-card-img"
        src={card.image}
        alt="Card"
      />
    </article>
  );
}

export default GameCards;
