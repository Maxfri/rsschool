import { BaseComponent } from '../base-component';

export class Winners extends BaseComponent {
  constructor() {
    super('div', ['winners']);
    this.getWinners();
  }

  render(): HTMLElement {
    this.element.innerHTML = `<h1>Winners</h1>
    <h2>Page</h2>
    <table>
      <thead>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th>Wins</th>
        <th>Best time</th>
      </thead>
      <tbody>
      </tbody>
    </table>`;
    return this.element;
  }

  async getWinners() {
    let response = await fetch('http://127.0.0.1:3000/winners');
    let result = await response.json();
    console.log(result);
  }
}
