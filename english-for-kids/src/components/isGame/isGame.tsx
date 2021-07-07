import React from 'react';

function isGame(cards) {
  const countAnswers = {
    right: 0,
    wrong: 0
  };
  const repeatBtn: HTMLElement = document.querySelector(`.repeat-btn`);
  const repeatBtnHandler = (): void => {
    console.log('repeat? please');
    playAudio();
  };
  repeatBtn?.addEventListener('click', repeatBtnHandler);

  const audio = [];
  cards.map((card) => audio.push({
    audio: new Audio(card.audioSrc),
    word: card.word
  }));
  shuffle(audio);

  console.log(audio);

  const playAudio = () => setTimeout(() => { audio[0]?.audio.play(); }, 500);
  playAudio();

  const list = document.querySelector('.card-list');

  list.addEventListener('click', (element) => {
    const elem: any = element.target;
    console.log(elem.dataset.word);
    if (elem.dataset.word) {
      getCheckCard(elem.dataset.word, audio[0]?.word)
      playAudio();
    }
  });

  function getCheckCard(card, answer) {
    if (card === answer) {
      audio.shift();
      rightAnswer();
    } else {
      wrongAnswer();
    }
  }

  function rightAnswer() {
    console.log('right');
    console.log(audio);
    countAnswers.right++;
    if (audio.length === 0) {
      endGame();
    }
  }

  function wrongAnswer() {
    console.log('wrong');
    console.log(audio);
    countAnswers.wrong++;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function endGame() {
    console.log('Wrong answers:', countAnswers.wrong);
    if (countAnswers.wrong > 0) {
      document.querySelector('.card-list').innerHTML = `
      <div>
        <div>Errors: ${countAnswers.wrong}</div>
        <img src='../src/assets/img/failure.jpg'}></img>
      </div>
      `;
      const loseAudio: HTMLAudioElement = new Audio('../src/assets/audio/failure.mp3');
      loseAudio.play();
    } else {
      document.querySelector('.card-list').innerHTML = `<div> <img src='../src/assets/img/success.jpg'}></img> </div>`;
      const winAudio: HTMLAudioElement = new Audio('../src/assets/audio/success.mp3');
      winAudio.play();
    }
  }
}

export default isGame;
