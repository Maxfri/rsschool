import { Header } from './components/header/header';
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';
import { Component } from './component';

export class App implements Component {
  private readonly application: HTMLDivElement;

  constructor() {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    const header = new Header();
    const winners = new Winners();
    const garage = new Garage();
    const garageButton = <HTMLButtonElement>document.querySelector('#garage-menu');
    const winnersButton = <HTMLButtonElement>document.querySelector('#winners-menu');
    const createRandomButton = <HTMLButtonElement>document.querySelector('.random');

    const form = <HTMLFormElement>document.querySelector('#create');
    // const edit = <HTMLFormElement>document.querySelector('#edit');

    garage.listen(form);
    // garage.listen(edit);
    createRandomButton.addEventListener('click', async () => {
      await garage.createRandomCars();
    });

    garageButton.addEventListener('click', () => {
      garage.element.style.visibility = 'visible';
      winners.element.style.visibility = 'hidden';
    });
    winnersButton.addEventListener('click', () => {
      const update = new Winners();
      garage.element.style.visibility = 'hidden';
      winners.element.style.visibility = 'visible';
    });

    return this.application;
  }
}
