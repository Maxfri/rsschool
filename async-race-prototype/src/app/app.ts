import { Header } from './components/header/header';
import { Garage } from './components/garage/garage';
import { Winners } from './components/winners/winners';
import { Button } from './components/button/button';
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

    garageButton.addEventListener('click', () => {
      garage.element.style.visibility = 'visible';
      winners.element.style.visibility = 'hidden';
    });
    winnersButton.addEventListener('click', () => {
      garage.element.style.visibility = 'hidden';
      winners.element.style.visibility = 'visible';
    });
    // this.application.appendChild(garage.renderCreateCar());
    // this.application.appendChild(garage.render());
    // this.application.appendChild(header.render());
    // this.application.appendChild(winners.render());

    return this.application;
  }
}
