import { BaseComponent } from '../base-component';

export class Garage extends BaseComponent {
  constructor() {
    super('div', ['garage']);
    // this.getCar(1);
    // this.createCar('Ziguli', '#f5e7c6');
    // this.deleteCar(5);
  }

  render(): HTMLElement {
    this.getCars().then(response => {
      this.element.innerHTML = `<h1>Garage</h1>
        <h2>Page</h2>
        <ul class="garage">
        ${response.map((car: any) => {
          return `<li>${car.name}</li>`;
        }).join('')}
        </ul>`;
    })

    return this.element;
  }

  async getCars() {
    let response = await fetch('http://127.0.0.1:3000/garage');

    if (response.ok) {
      let json = await response.json();
      // console.log(json);
      return json;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  async getCar(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`);

    if (response.ok) {
      let json = await response.json();
      console.log(json);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  async createCar(name: string, color: string) {
    let car = {
      name,
      color
    };

    let response = await fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(car)
    });

    let result = await response.json();
    console.log(result);
  }

  async deleteCar(id: number) {
    let response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'DELETE'
    });

    let result = await response.json();
    console.log(result);
  }
}
