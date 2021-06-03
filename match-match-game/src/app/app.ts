import { Auth } from './components/auth/auth';
import { Settings } from './page/settings/settings';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
// import { Button } from './button';
import { Timer } from './components/timer/timer';
import { ImageCategoryModel } from './models/image-category-model';
import { Game } from './components/game/game';
import { CardsField } from './components/cards-field/cards-field';
import { DataBase } from './indexedDB';
// import { CounterService } from './counter.service';
import { Page } from './page/page';
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

    // new Settings(this.application).selectCard();
    // const gameCard = document.getElementById('game-cards');
    // console.log(gameCard);
    // document.getElementById('months').addEventListener('change', function() {
    //   const n = this.value;
    // })
    // readAllButton.onClick = () => {
    //   this.iDB.readAll('maxfri');
    // };

    // const filterButton = new Button(document.body, 'filtered list');
    // filterButton.onClick = () => {
    //   this.iDB.readFiltere();
    // };
    // openDb();
    // console.log(new Timer().element);
    // this.counterService.subscribeOnCounter((counter: number) => console.log(counter));
  }

  render(): HTMLElement {
    const header = new Header();
    const footer = new Footer();
    (<any>document.querySelector('body')).prepend(header.element);
    (<any>document.querySelector('body')).append(footer.element);
    const auth = new Auth(<any>document.querySelector('header'));
    auth.render();
    // auth.modal();
    // this.application.innerHTML = 'Hello from app';
    // this.root?.appendChild(this.cardsField.element);
    // this.root?.appendChild(this.application);
    // this.application.appendChild(new Page(this.application, this.counterService).render());
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
