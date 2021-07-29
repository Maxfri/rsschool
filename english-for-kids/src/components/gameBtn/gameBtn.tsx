import React from 'react';
import './gameBtn.css';

interface Props {
  startGame: boolean,
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>,
  audio: Audio[],
  playAudio: Function
}
interface Audio {
  audio: HTMLAudioElement,
  word: string
}
function GameBtn({
  startGame,
  setStartGame,
  audio,
  playAudio,
}: Props): JSX.Element {
  const startNewGame = () => {
    setStartGame(true);

    playAudio(audio[0]);
  };

  const repeatWord = () => {
    playAudio(audio[0]);
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
