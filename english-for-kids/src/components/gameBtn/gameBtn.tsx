import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import IsGame from '../isGame/isGame';
import './gameBtn.css';

interface Props {
  cards: any,
}

function GameBtn({ cards }: Props): JSX.Element {
  const history: History = useHistory();

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

  useEffect(() => {
    IsGame({ cards, history });
  });

  return (
    <>
      <button type="button" className="start-btn" onClick={IsGame}>Start game</button>
      <button type="button" className="repeat-btn">Repeat</button>
    </>
  );
}

export default GameBtn;
