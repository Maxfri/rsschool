import { BaseComponent } from './../base-component';

export class Winners extends BaseComponent {
  constructor(){
    super('div', ['winners'])
  }

  render() {
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
}