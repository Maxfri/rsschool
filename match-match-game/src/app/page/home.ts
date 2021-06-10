import { App } from '../app';
import { Game } from '../components/game/game';
import { RootElement } from '../app.api';
import { CardsField } from '../components/cards-field/cards-field';

import { difficulty } from './settings/settings';

export class HomePage {
  private readonly page: HTMLElement;

  private cardsField: CardsField;

  private game: Game;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    new App(this.page).start(difficulty);
    this.root?.append(this.page);

    return this.page;
  }
}
