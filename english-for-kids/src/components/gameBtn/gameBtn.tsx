import React from 'react';
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
  isGame,
  setIsGame,
  audio,
  playAudio,
}: Props): JSX.Element {
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
