import { Game } from '../components/game/game';
import { Timer } from '../components/timer/timer';
import { Component, RootElement } from '../app.api';

export class HomePage {
  private readonly page: HTMLElement;

  // private readonly game: Game;

  constructor(private readonly root: RootElement) {
    // this.game = new Game();
    // this.root?.appendChild(new Timer().element);
    // this.root?.appendChild(this.game.element);
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = 'Hello from Home page';
    this.root?.append(this.page);

    return this.page;
  }
}
