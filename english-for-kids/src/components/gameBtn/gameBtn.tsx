import React, { useEffect } from 'react';
import IsGame from '../isGame/isGame';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import './gameBtn.css';

function GameBtn({ cards }) {
  const history: History = useHistory();
  const hideElement = (element: HTMLElement) => {
    element.style.transition = '0.5s';
    element.style.opacity = '0';
    setTimeout(() => { element.style.display = 'none'; }, 500);
  };

  const showElement = (element: HTMLElement) => {
    element.style.display = 'block';
    element.style.transition = '0.5s';
    setTimeout(() => { element.style.opacity = '1'; }, 500);
  };

  useEffect(() => {
    const startBtn: HTMLElement = document.querySelector('.start-btn');
    const repeatBtn: HTMLElement = document.querySelector('.repeat-btn');

    const startBtnHandler = (): void => {
      hideElement(startBtn);
      setTimeout(() => { showElement(repeatBtn); }, 500);
      {IsGame({cards: cards, history: history})};
    };

    // const repeatBtnHandler = (): void => {
    // };
    // repeatBtn?.addEventListener('click', repeatBtnHandler);

    startBtn?.addEventListener('click', startBtnHandler);

    return () => {
      startBtn?.removeEventListener('click', startBtnHandler);
      // repeatBtn?.removeEventListener('click', repeatBtnHandler);
    };
  });

  return (
    <>
      <button type="button" className="start-btn">Start game</button>
      <button type="button" className="repeat-btn">Repeat</button>
    </>
  );
}

export default GameBtn;
