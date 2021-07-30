import React, { useState } from 'react';
import { Audio, Card, Answer } from '../../interface/interface';
import { FIRST_ELEMENT, INCRIMENT } from '../../const/const';

interface Props {
  card: Card,
  audio: Audio[],
  setAudio: React.Dispatch<React.SetStateAction<Audio[]>>,
  playAudio: Function,
  setGameState: React.Dispatch<React.SetStateAction<string>>,
  countAnswers: Answer,
  setCountAnswers: React.Dispatch<React.SetStateAction<Answer>>,
  stars: string[],
  setStars: React.Dispatch<React.SetStateAction<string[]>>,
  startGame: boolean
}

const URL_AUDIO_FAIL = '../src/assets/audio/failure.mp3';
const URL_AUDIO_WIN = '../src/assets/audio/success.mp3';
const URL_AUDIO_ERROR = '../src/assets/audio/error.mp3';
const URL_AUDIO_CORRECT = '../src/assets/audio/correct.mp3';
const RIGHT_STAR = 'right';
const WRONG_STAR = 'wrong';

function GameCards({
  card,
  audio,
  setAudio,
  playAudio,
  setGameState,
  countAnswers,
  setCountAnswers,
  stars,
  setStars,
  startGame,
}: Props): JSX.Element {
  const [rightCard, setRightCard] = useState('game-card');
  const endGame = () => {
    if (audio.length === 1 && countAnswers.wrong > 0) {
      const loseAudio: HTMLAudioElement = new Audio(URL_AUDIO_FAIL);
      loseAudio.play();
      setGameState('lose');
    } else {
      const winAudio: HTMLAudioElement = new Audio(URL_AUDIO_WIN);
      winAudio.play();
      setGameState('win');
    }
  };

  const rightAnswer = () => {
    setCountAnswers({ right: countAnswers.right + INCRIMENT, wrong: countAnswers.wrong });
    const correctAudio: HTMLAudioElement = new Audio(URL_AUDIO_CORRECT);
    correctAudio.play();
    setStars([...stars, RIGHT_STAR]);
    const filteredItems = audio.filter((item) => item !== audio[FIRST_ELEMENT]);
    setAudio(filteredItems);
    playAudio(filteredItems[FIRST_ELEMENT]);
    if (audio.length === 1) {
      endGame();
    }
  };

  const wrongAnswer = () => {
    setCountAnswers({ right: countAnswers.right, wrong: countAnswers.wrong + INCRIMENT });
    const errorAudio: HTMLAudioElement = new Audio(URL_AUDIO_ERROR);
    errorAudio.play();
    setStars([...stars, WRONG_STAR]);
    playAudio(audio[FIRST_ELEMENT]);
  };

  const getCheckCard = () => {
    if (audio[FIRST_ELEMENT].word === card.word) {
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
      key={card.word}
      className={rightCard}
      onClick={startGame ? handlerCheckCard : undefined}
      onKeyDown={startGame ? handlerCheckCard : undefined}
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
