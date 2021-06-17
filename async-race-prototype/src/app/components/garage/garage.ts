import { startEngine, drive, stopEngine } from '../../../api/engine/engine.api';
import { Car } from '../car/car';
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
  carsList: Cars[] = [];

  move = true;

  raceTime: Date;

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
          <button class="start-race">Start Race</button>
          <button class="stop-race">Stop</button>
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
    this.carsList = [];
    garage.innerHTML = `<h1>Garage (${carsCount})</h1>
        <h2>Page (${store.carPage})</h2>
        <ul class="garage-list">
        ${cars.map((car: Cars) => {
    this.carsList.push(car);
    return `<li>${this.renderCar(car)}</li>`;
  }).join('')}</ul>`;

    garagePage.innerHTML = '';
    garagePage.appendChild(garage);
    await this.listenStartCar();
  }

  async listenStartCar() {
    const startButton = document.querySelectorAll('.engine-start');
    const stopButton = document.querySelectorAll('.engine-stop');
    const raceButton = document.querySelector('.start-race');
    raceButton?.addEventListener('click', () => {
      this.raceCars();
    });
    startButton.forEach((start) => {
      start.addEventListener('click', async () => {
        const id = <number><unknown>start.attributes[1].value;
        await this.startCar(id);

        stopButton.forEach((stop) => {
          if (<number><unknown>stop.attributes[1].value === id) {
            stop.removeAttribute('disabled');
          }
          stop.addEventListener('click', async () => {
            await this.stopRace(id);
          });
        });
        start.setAttribute('disabled', 'true');
      });
    });
  }

  async startCar(id: number) {
    const start = await startEngine(id);
    const { velocity } = start;
    const { distance } = start;
    this.race(id, velocity, distance);
    const status = await drive(id);
    if (status.success === false) {
      // this.move = false;
    }
  }

  race(id: number, velocity: number, distance: number): void {
    const carItem = document.getElementById(`car-image-${id}`);
    const shift = velocity / 16;
    let speed = shift;
    const timer = setInterval(() => {
      if (carItem !== null) {
        if (Garage.getPosition(carItem).left >= document.documentElement.clientWidth - 200) {
          this.move = false;
          const finish = new CustomEvent('carFinish', {
            bubbles: true,
            detail: { winnerId: id, winnerTime: distance / velocity },
          });
          carItem.dispatchEvent(finish);
        } else {
          (<HTMLElement>carItem).style.transform = `translateX(${speed}px)`;
          speed += shift;
        }
      }
    }, 25);
  }

  async stopRace(id: number) {
    this.move = true;
    await stopEngine(id);
    const carItem = document.getElementById(`car-image-${id}`);
    if (carItem) {
      (<HTMLElement>carItem).style.transform = 'translateX(0)';
    }
  }

  async raceCars() {
    this.raceTime = new Date();

    if (this.carsList) {
      this.carsList.forEach((car) => {
        this.startCar(car.id);
      });
    }
  }

  static getPosition(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
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
