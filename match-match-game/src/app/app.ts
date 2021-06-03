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
    const header = new Header();
    const footer = new Footer();
    (<any>document.querySelector('body')).prepend(header.element);
    (<any>document.querySelector('body')).append(footer.element);
    const auth = new Auth(<any>document.querySelector('header'));
    auth.render();
    return this.application;
  }

  async start(categ: any) {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[categ];
    const images = cat.images.map((name: string) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
