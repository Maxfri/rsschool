import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import GameBtn from '../gameBtn/gameBtn';
import GameCards from '../gameCards/gameCards';
import TrainCards from '../trainCards/trainCards';
import cardsData from '../cards/CardsData';
import LosePage from '../losePage/losePage';
import WinPage from '../winPage/winPage';
import '../cards/cards.css';

interface Props {
  match: any,
  mode: string,
  setMode: any,
  // setMode: React.Dispatch<React.SetStateAction<string>>,
}
// interface Card {
//   word: string,
//   translation: string,
//   image: string,
//   audioSrc: string,
// }
function CardList({ match, mode, setMode }: Props): JSX.Element {
  const [isGame, setIsGame] = useState(false);
  const [audio, setAudio] = useState([]);
  const [gameState, setGameState] = useState('play');
  const { id } = match.params;
  const cards = cardsData[id];
  const playAudio = (music) => setTimeout(() => {
    music.audio.play();
  }, 500);
  useEffect(() => {
    // IsGame({ cards, history });
    cards.map((card): void => {
      setAudio(() => [...audio, {
        audio: new Audio(card.audioSrc),
        word: card.word,
      }]);
    });
  }, []);

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  if (mode === 'game') {
    if (gameState === 'win') {
      return (<WinPage />);
    } if (gameState === 'lose') {
      return (<LosePage />);
    }
    return (
      <>
        <div className="game-score rating" />
        <main className="grid card-list">
          {cards.map((card) => (
            <GameCards
              card={card}
              key={card.word}
              audio={audio}
              setAudio={setAudio}
              playAudio={playAudio}
              setGameState={setGameState}
            />
          ))}
          <GameBtn
            cards={cards}
            isGame={isGame}
            setIsGame={setIsGame}
            audio={audio}
            setAudio={setAudio}
            playAudio={playAudio}
          />
        </main>
        <div className="game-result" />
      </>
    );
  }

  return (
    <main className="grid">
      {cards.map((card) => <TrainCards card={card} key={card.word} />)}
    </main>
  );
}

export default withRouter(CardList);
