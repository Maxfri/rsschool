import { Car } from './../car/car';
import { createCar, getCars } from '../../../api/garage/garage.api';
import { BaseComponent } from '../base-component';

import './garage.scss';
import store from '../../state/store';

export type Cars = { id: number, name: string, color: string };

const CARS_MARKS = [
  'LADA',
  'UAZ',
  'AURUS',
  'AVTOVAZ',
  'GAZ',
  'Moskvich',
  'YO-car',
  'ZIL',
  'KAMAZ',
  'Dodge',
  'Chevrolet',
  'Cadillac',
  'Renault',
  'Mazda',
  'Hummer',
];

const CARS_MODELS = [
  'Largus',
  'Patriot',
  'Granta',
  'Senat S600',
  'XRAY',
  'Vesta',
  'Logan',
  '3310',
  'Niva',
  'Pajero',
  'Outlander',
  'Rapid',
  'Octavia',
  'Nexia',
  'Tahoe',
];

export class Garage extends BaseComponent {
  constructor() {
    super('div', ['garage']);
    document.body.appendChild(this.render());

    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

    next?.addEventListener('click', () => {
      store.carPage++;
      this.renderGarage(store.carPage);
    });
    prev?.addEventListener('click', () => {
      store.carPage--;
      this.renderGarage(store.carPage);
    });
  }

  render() {
    this.element.innerHTML = `<div id="garage-view">
        <div>
          <form class="form" id="create">
            <input class="input" id="create-name" name="name" value="" type="text">
            <input class="color" id="create-color" name="color" type="color" value="#ffffff">
            <button class="button" type="submit">Create</button>
          </form>
          <form class="form" id="update">
            <input class="input" id="update-name" name="name" value="" type="text">
            <input class="color" id="update-color" name="color" type="color" value="#ffffff">
            <button class="button" type="submit">Update</button>
          </form>
        </div>
        <div class="race">
          <button class="start" disabled="true">Start</button>
          <button class="stop">Stop</button>
          <button class="random">Create 100 random cars</button>
        </div>
        <div id="garage">
         
        </div>
        <button id="prev">Prev page</button>
        <button id="next">Next page</button>
      </div>`;
    this.renderGarage(store.carPage);
    return this.element;
  }

  async renderGarage(pageNumber: number) {
    const cars = (await getCars(pageNumber)).items;
    const carsCount = (await getCars(pageNumber)).count;
    const garagePage = <HTMLDivElement>document.querySelector('#garage');
    const garage = document.createElement('div');

    garage.innerHTML = `<h1>Garage (${carsCount})</h1>
        <h2>Page (${store.carPage})</h2>
        <ul class="garage-list">
        ${cars.map((car: Cars) => `<li>${this.renderCar(car)}</li>`).join('')}
        </ul>`;

    garagePage.innerHTML = '';
    garagePage.appendChild(garage);
  }

  renderCar = (car: Cars) => {
    const carItem = new Car(car.id, car.name, car.color);
    return carItem.render().outerHTML;
  };

  listen = (formElem: HTMLFormElement) => {
    formElem.onsubmit = async (e) => {
      e.preventDefault();
      const carName = (<HTMLInputElement>document.querySelector('#create-name')).value;
      const carColor = (<HTMLInputElement>document.querySelector('#create-color')).value;
      const car = { carName, carColor };
      await createCar(car);
      await this.renderGarage(store.carPage);
    };
  };

  async createRandomCars() {
    for (let i = 0; i < 100; i++) {
      const carName = `${CARS_MARKS[Math.floor(Math.random() * CARS_MARKS.length)]} ${CARS_MODELS[Math.floor(Math.random() * CARS_MODELS.length)]}`;
      const letters = '0123456789abcdef';
      let carColor = '#';
      for (let j = 0; j < 6; j++) {
        carColor += letters[Math.floor(Math.random() * 16)];
      }
      const car = { carName, carColor };
      createCar(car);
    }
    this.renderGarage(store.carPage);
  }
}
