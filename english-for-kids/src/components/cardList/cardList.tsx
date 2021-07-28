import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import GameBtn from '../gameBtn/gameBtn';
import GameCards from '../gameCards/gameCards';
import TrainCards from '../trainCards/trainCards';
import cardsData from '../cards/CardsData';
import LosePage from '../losePage/losePage';
import WinPage from '../winPage/winPage';
import Stars from '../stars/stars';
import '../cards/cards.css';

interface Props {
  match: any,
  mode: string,
  setMode?: React.Dispatch<React.SetStateAction<string>>,
}
// interface Card {
//   word: string,
//   translation: string,
//   image: string,
//   audioSrc: string,
// }
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

function CardList({ match, mode, setMode }: any): JSX.Element {
  // console.log(match);
  const [isGame, setIsGame] = useState(false);
  const [audio, setAudio] = useState([]);
  const [gameState, setGameState] = useState('play');
  const [countAnswers, setCountAnswers] = useState({ right: 0, wrong: 0 });
  const [stars, setStars] = useState([]);
  const { id } = match.params;
  const cards = cardsData[id];
  const playAudio = (music) => setTimeout(() => {
    if (music) {
      music.audio.play();
    }
  }, 500);

  useEffect(() => {
    cards.map((card): void => {
      setAudio((audio) => [...audio, {
        audio: new Audio(card.audioSrc),
        word: card.word,
      }]);
    });
    // const shuffleAudio = [...audio];
    // console.log(audio);
    // shuffle(shuffleAudio);
    // console.log(shuffleAudio);
    // setAudio(shuffleAudio);
  }, []);

  if (mode === 'game') {
    if (gameState === 'win') {
      return (<WinPage />);
    } if (gameState === 'lose') {
      return (<LosePage countAnswers={countAnswers} />);
    }

    return (
      <>
        <Stars stars={stars} />
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
              stars={stars}
              setStars={setStars}
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
