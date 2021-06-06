import { BaseComponent } from './../base-component';

export class Garage extends BaseComponent {
  constructor() {
    super('div', ['garage']);
  }

  render() {
    this.element.innerHTML = `<h1>Garage</h1>
    <h2>Page</h2>
    <ul class="garage">
    <li></li>
    </ul>`;
    return this.element;
  }
}