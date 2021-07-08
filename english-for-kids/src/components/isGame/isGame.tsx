import React from 'react';
import LosePage from '../losePage/losePage';
import WinPage from '../winPage/winPage';

function isGame(cards) {
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
    console.log(cardItem.parentElement);
    cardItem.classList.add('right-check');
    countAnswers.right++;
    if (audio.length === 0) {
      endGame();
    }
  }

  function wrongAnswer() {
    countAnswers.wrong++;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function endGame() {
    if (countAnswers.wrong > 0) {
      <LosePage wrongAnswers={countAnswers.wrong} />
      const loseAudio: HTMLAudioElement = new Audio('../src/assets/audio/failure.mp3');
      loseAudio.play();
    } else {
      <WinPage />
      const winAudio: HTMLAudioElement = new Audio('../src/assets/audio/success.mp3');
      winAudio.play();
    }
  }
}

export default isGame;
