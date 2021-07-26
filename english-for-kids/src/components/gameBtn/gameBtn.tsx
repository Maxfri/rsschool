import React, { useEffect } from 'react';
import IsGame from '../isGame/isGame';
import './gameBtn.css';

interface Props {
  cards: any,
  isGame: boolean,
  setIsGame: any,
  audio: any[],
  setAudio: any,
  playAudio: any
}

function GameBtn({
  cards,
  isGame,
  setIsGame,
  audio,
  setAudio,
  playAudio,
}: Props): JSX.Element {
  // const hideElement = (element: HTMLElement) => {
  //   element.style.transition = '0.5s';
  //   element.style.opacity = '0';
  //   setTimeout(() => { element.style.display = 'none'; }, 500);
  // };

  // const showElement = (element: HTMLElement) => {
  //   element.style.display = 'block';
  //   element.style.transition = '0.5s';
  //   setTimeout(() => { element.style.opacity = '1'; }, 500);
  // };

  const startGame = () => {
    setIsGame(true);

    playAudio(audio[0]);
  };

  const repeatWord = () => {
    playAudio(audio[0]);
  };

  if (isGame) {
    return (
      <>
        <button type="button" className="repeat-btn" onClick={repeatWord}>Repeat</button>
      </>
    );
  }
  return (
    <>
      <button type="button" className="start-btn" onClick={startGame}>Start game</button>
    </>
  );
}

export default GameBtn;
