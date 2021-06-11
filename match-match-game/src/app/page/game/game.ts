import { Game } from '../../components/game/game';
import { RootElement } from '../../app.api';

import { gameSettings } from '../settings/settings';

export class GamePage {
  private readonly page: HTMLElement;

  private game: Game;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.game = new Game();
    this.page.appendChild(this.game.element);
    this.start(gameSettings.difficulty, gameSettings.cardsIcon);
    this.root?.append(this.page);

    return this.page;
  }

  async start(difficultyGame: string, cardsIcon: string): Promise<void> {
    const res = await fetch('./images.json');
    const categories = await res.json();
    const category = categories[cardsIcon][difficultyGame];
    const images = category.images.map((name: string) => `${category.category}/${name}`);
    this.game.newGame(images);
  }
}
