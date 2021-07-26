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
  // setMode: any,
  setMode: React.Dispatch<React.SetStateAction<string>>,
}
// interface Card {
//   word: string,
//   translation: string,
//   image: string,
//   audioSrc: string,
// }
function CardList({ match, mode, setMode }: any): JSX.Element {
  const [isGame, setIsGame] = useState(false);
  const [audio, setAudio] = useState([]);
  const [gameState, setGameState] = useState('play');
  const [countAnswers, setCountAnswers] = useState({ right: 0, wrong: 0 });
  const { id } = match.params;
  const cards = cardsData[id];
  const playAudio = (music) => setTimeout(() => {
    if (music) {
      music.audio.play();
    }
  }, 500);

  useEffect(() => {
    // IsGame({ cards, history });
    // const shuffle = (array) => {
    //   array.sort(() => Math.random() - 0.5);
    // };
    cards.map((card): void => {
      setAudio((audio) => [...audio, {
        audio: new Audio(card.audioSrc),
        word: card.word,
      }]);
    });
    // setAudio(shuffle(audio));
  }, []);

  if (mode === 'game') {
    if (gameState === 'win') {
      return (<WinPage />);
    } if (gameState === 'lose') {
      return (<LosePage countAnswers={countAnswers} />);
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
              countAnswers={countAnswers}
              setCountAnswers={setCountAnswers}
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
