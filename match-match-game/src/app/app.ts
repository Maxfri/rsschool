import { Auth } from './components/auth/auth';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { ImageCategoryModel } from './models/image-category-model';
import { Game } from './components/game/game';
import { CardsField } from './components/cards-field/cards-field';
import { Component, RootElement } from './app.api';

export class App implements Component {
  private readonly application: HTMLDivElement;

  private readonly cardsField: CardsField;

  private readonly game: Game;

  public gameCards = '0';

  constructor(private readonly root: RootElement) {
    this.cardsField = new CardsField();
    this.game = new Game();
    this.root?.appendChild(this.game.element);
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    const body = <HTMLElement>document.querySelector('body');
    const header = new Header();
    const footer = new Footer();
    body.prepend(header.element);
    body.append(footer.element);
    const auth = new Auth(<HTMLElement>document.querySelector('header'));
    auth.render();
    return this.application;
  }

  async start(difficultyGame: string) {
    const res = await fetch('./images.json');
    const categories = await res.json();
    const category = categories[difficultyGame];
    const images = category.images.map((name: string) => `${category.category}/${name}`);
    this.game.newGame(images);
  }
}
