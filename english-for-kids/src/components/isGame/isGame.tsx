import React, { useState } from 'react';
import { History } from 'history';
import LosePage from '../losePage/losePage';
import WinPage from '../winPage/winPage';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

function IsGame({ cards, history }: any) {
  const location: string = history.location.pathname;
  const gameResult = document.querySelector('.game-result');
  const gameScore = document.querySelector('.game-score');
  const countAnswers = {
    right: 0,
    wrong: 0,
  };
  const repeatBtn: HTMLElement = document.querySelector('.repeat-btn');
  const repeatBtnHandler = (): void => {
    playAudio();
  };
  repeatBtn?.addEventListener('click', repeatBtnHandler);

  const audio = [];
  cards.map((card) => audio.push({
    audio: new Audio(card.audioSrc),
    word: card.word,
  }));
  shuffle(audio);

  const playAudio = () => setTimeout(() => { audio[0]?.audio.play(); }, 500);
  playAudio();

  const list = document.querySelector('.card-list');

  list.addEventListener('click', (element) => {
    const elem: any = element.target;
    if (elem.dataset.word) {
      getCheckCard(elem.dataset.word, audio[0]?.word, elem);
      playAudio();
    }
  });

  function getCheckCard(card, answer, cardItem) {
    if (card === answer) {
      audio.shift();

      rightAnswer(cardItem);
    } else {
      wrongAnswer();
    }
  }

  function rightAnswer(cardItem: HTMLElement) {
    const correctAudio: HTMLAudioElement = new Audio('../src/assets/audio/correct.mp3');
    correctAudio.play();
    const starSucces = document.createElement('div');
    starSucces.classList.add('star-succes');
    gameScore.appendChild(starSucces);
    cardItem.classList.add('right-check');
    countAnswers.right++;
    if (audio.length === 0) {
      endGame();
    }
  }

  function wrongAnswer() {
    const errorAudio: HTMLAudioElement = new Audio('../src/assets/audio/error.mp3');
    errorAudio.play();
    const starError = document.createElement('div');
    starError.classList.add('star-error');
    gameScore.appendChild(starError);
    countAnswers.wrong++;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function endGame() {
    list.classList.add('invisibility');
    if (countAnswers.wrong > 0) {
      const loseAudio: HTMLAudioElement = new Audio('../src/assets/audio/failure.mp3');
      loseAudio.play();
      const lose = document.createElement('div');
      lose.innerHTML = `<div>
          <div>Errors: ${countAnswers.wrong}</div>
          <img src='../src/assets/img/failure.jpg' />
        </div>`;
      // const lose = LosePage({wrongAnswers: countAnswers.wrong});
      gameResult.appendChild(lose);
    } else {
      const winAudio: HTMLAudioElement = new Audio('../src/assets/audio/success.mp3');
      winAudio.play();
      const win = document.createElement('div');

      win.innerHTML = `<div>
          <img src='../src/assets/img/success.jpg' />
        </div>`;
      // const lose = LosePage({wrongAnswers: countAnswers.wrong});
      gameResult.appendChild(win);
      // {WinPage()};
    }
    setTimeout(() => {
      if (history.location.pathname === location) {
        history.push('/');
      }
    }, 2500);
  }
}

export default IsGame;
