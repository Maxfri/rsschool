import React from 'react';
import { Audio } from '../../interface/interface';
import { FIRST_ELEMENT } from '../../const/const';
import './gameBtn.css';

interface Props {
  startGame: boolean,
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>,
  audio: Audio[],
  playAudio: Function
}
function GameBtn({
  startGame,
  setStartGame,
  audio,
  playAudio,
}: Props): JSX.Element {
  const startNewGame = () => {
    setStartGame(true);

    playAudio(audio[FIRST_ELEMENT]);
  };

  const repeatWord = () => {
    playAudio(audio[FIRST_ELEMENT]);
  };

  if (startGame) {
    return (
      <>
        <button type="button" className="repeat-btn" onClick={repeatWord}>Repeat</button>
      </>
    );
  }
  return (
    <>
      <button type="button" className="start-btn" onClick={startNewGame}>Start game</button>
    </>
  );
}

export default GameBtn;
