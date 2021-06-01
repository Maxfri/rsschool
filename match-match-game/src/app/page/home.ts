import { App } from '../app';
import { Game } from '../components/game/game';
import { Settings } from './settings/settings';
import { Timer } from '../components/timer/timer';
import { Component, RootElement } from '../app.api';
import { CardsField } from '../components/cards-field/cards-field';

export class HomePage {
  private readonly page: HTMLElement;

  private cardsField: CardsField;

  private game: Game;

  constructor(private readonly root: RootElement) {
    // new App(root).start(valueCard);
    // this.cardsField = new CardsField();
    // this.game = new Game();
    // this.root?.appendChild(new Timer().element);
    // this.root?.appendChild(this.game.element);
    this.page = document.createElement('div');
    new App(this.page).start(0);
  }

  render(): HTMLElement {
    // const valueCard = new Settings(this.page).selectCard();
    // if (valueCard) {
    //   // console.log(valueCard);
    // }

    this.root?.append(this.page);

    return this.page;
  }
}
