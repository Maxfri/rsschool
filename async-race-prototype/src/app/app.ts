import { renderPage, listen } from './components/garage/garage';
import { Winners } from './components/winners/winners';
import { Button } from './components/button/button';
import { Component } from './component';

export class App implements Component {
  private readonly application: HTMLDivElement;

  constructor() {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    // const btnGarage = new Button('garage');
    // const btnWinners = new Button('winners');
    const winners = new Winners();
    // this.application.appendChild(btnGarage.element);
    // this.application.appendChild(btnWinners.element);
    // this.application.appendChild(garage.renderCreateCar());
    // this.application.appendChild(garage.render());
    
    this.application.appendChild(winners.render());
    // renderPage();
    
    // const form = <HTMLFormElement>document.querySelector('#create');
    // listen(form);
    // form.addEventListener('submit', (data) => {
    //   console.log(data)
    // });
    return this.application;
  }
}
