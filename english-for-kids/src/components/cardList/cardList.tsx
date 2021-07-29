import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import GameBtn from '../gameBtn/gameBtn';
import GameCards from '../gameCards/gameCards';
import TrainCards from '../trainCards/trainCards';
import cardsData from '../cards/CardsData';
import LosePage from '../losePage/losePage';
import WinPage from '../winPage/winPage';
import Stars from '../stars/stars';
import '../cards/cards.css';

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {
  mode: string,
}
interface Audio {
  audio: HTMLAudioElement,
  word: string
}

const HALF_SECOND = 500;
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

function CardList({ match, mode }: Props): JSX.Element {
  const [startGame, setStartGame] = useState(false);
  const [audio, setAudio] = useState([]);
  const [gameState, setGameState] = useState('play');
  const [countAnswers, setCountAnswers] = useState({ right: 0, wrong: 0 });
  const [stars, setStars] = useState([]);
  const { id } = match.params;
  const cards = cardsData[Number(id) - 1];

  const playAudio = (music: Audio) => setTimeout(() => {
    if (music) {
      music.audio.play();
    }
  }, HALF_SECOND);

  useEffect(() => {
    cards.forEach((card): void => {
      setAudio((arrAudio) => shuffle([...arrAudio, {
        audio: new Audio(card.audioSrc),
        word: card.word,
      }]));
    });
  }, []);

  if (mode === 'game') {
    if (gameState === 'win') {
      return (<WinPage />);
    }
    if (gameState === 'lose') {
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
              startGame={startGame}
            />
          ))}
          <GameBtn
            startGame={startGame}
            setStartGame={setStartGame}
            audio={audio}
            playAudio={playAudio}
          />
        </main>
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
