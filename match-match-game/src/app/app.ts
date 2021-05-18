import { ImageCategoryModel } from './models/image-category-model';
import { Game } from './components/game/game';
import { CardsField } from './components/cards-field/cards-field';
// import { CounterService } from './counter.service';
import { Page } from './page/page';
import { Component, RootElement } from './app.api';

export class App implements Component {
  private readonly application: HTMLDivElement;

  // private readonly cardsField: CardsField;
  private readonly game: Game;

  constructor(private readonly root: RootElement) {
    // this.cardsField = new CardsField();
    this.game = new Game();
    this.root?.appendChild(this.game.element);
    this.application = document.createElement('div');
    // this.counterService.subscribeOnCounter((counter: number) => console.log(counter));
  }

  render(): HTMLElement {
    // this.application.innerHTML = 'Hello from app';
    // this.root?.appendChild(this.cardsField.element);
    // this.root?.appendChild(this.application);
    // this.application.appendChild(new Page(this.application, this.counterService).render());

    return this.application;
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name: string) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
