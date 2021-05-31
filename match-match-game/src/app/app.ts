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

  public iDB: DataBase;

  constructor(private readonly root: RootElement) {
    this.cardsField = new CardsField();
    this.game = new Game();
    this.root?.appendChild(new Timer().element);
    this.root?.appendChild(this.game.element);
    this.application = document.createElement('div');

    function saveData() {
      const firstName = (<HTMLInputElement>document.querySelector('#first-name'));
      const secondName = (<HTMLInputElement>document.querySelector('#second-name'));
      const email = (<HTMLInputElement>document.querySelector('#email'));
      const data = {
        firstName: firstName?.value,
        secondName: secondName?.value,
        email: email?.value,
      };
      // console.log(data);
      return data;
    }

    this.iDB = new DataBase();
    this.iDB.init('testDB');
    const listButton = document.querySelector('.list');
    // console.log(listButton);
    listButton?.addEventListener('click', () => {
      this.iDB.readAll('testCollection');
    });

    const writeButton = document.querySelector('.write');
    // console.log(listButton);
    writeButton?.addEventListener('click', () => {
      const data = saveData();
      this.iDB.write(data.firstName, data.secondName, data.email);
    });

    const saveButton = document.querySelector('.save');
    // console.log(listButton);
    saveButton?.addEventListener('click', () => {
      const data = saveData();
      this.iDB.write(data.firstName, data.secondName, data.email);
    });
    // readAllButton.onClick = () => {
    //   this.iDB.readAll('testCollection');
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
