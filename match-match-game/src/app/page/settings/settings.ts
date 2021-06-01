import { Component, RootElement } from '../../app.api';

export class Settings {
  private page: HTMLElement;

  constructor(private readonly root: RootElement) {
    // console.log(this);
  }

  render(): HTMLElement {
    this.page = document.createElement('div');
    this.page.innerHTML = `<div class="game-settings">
    <div class="game-cards">
      Game cards
      <select name="cards" id="game-cards">
        <option value="0" selected>Животные</option>
        <option value="1">Значение 2</option>
      </select>
    </div>
    <div class="game-difficulty">
      Difficulty
      <select name="difficulty" id="">
        <option value="value1" selected>4 x 4</option>
        <option value="value2">6 x 6</option>
      </select>
    </div>
  </div>`;
    this.root?.appendChild(this.page);
    // this.selectCard();
    return this.page;
  }

  // selectCard(): number {
  //   let n = '';
  //   const gameCard = document.getElementById('game-cards');
  //   if (gameCard) {
  //     gameCard.addEventListener('change', function () {
  //       n = (<HTMLSelectElement> this).value;
  //       console.log(n);
  //     });
  //   }
  //   if (n === '0') {
  //     return 0;
  //   }
  //   return 1;
  // }
}
