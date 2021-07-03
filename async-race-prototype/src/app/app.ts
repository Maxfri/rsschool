import { Header } from './components/header/header';
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';
import { Component } from './component';

const ELEMENT_VISIBLE = 'visible';
const ELEMENT_HIDEN = 'hidden';

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

    header.element.classList.add('header-wrapper');

    garage.listen(form);
    createRandomButton.addEventListener('click', async () => {
      await garage.createRandomCars();
    });

    garageButton.addEventListener('click', () => {
      garage.element.style.visibility = ELEMENT_VISIBLE;
      winners.element.style.visibility = ELEMENT_HIDEN;
    });
    winnersButton.addEventListener('click', () => {
      garage.element.style.visibility = ELEMENT_HIDEN;
      winners.element.style.visibility = ELEMENT_VISIBLE;
    });

    return this.application;
  }
}
