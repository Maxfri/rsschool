import { BaseComponent } from '../base-component';

export type Winner = { id: number, wins: number, time: number };

export class Winners extends BaseComponent {
  constructor() {
    super('div', ['winners']);
    this.createWinners(2, 3, 4);
    // this.getWinners();
    // this.deleteWinner(2);
  }

  render(): HTMLElement {
    this.getWinners().then((response) => {
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
        ${response.map((winner: any) => `<tr>${this.renderWinner(winner)}</tr>`).join('')}
        </tbody>
      </table>`;
    });
    return this.element;
  }

  renderWinner(winner: Winner) {
    return `<td>${winner.id}</td>
            <td></td>
            <td></td>
            <td>${winner.wins}</td>
            <td>${winner.time}</td>`;
  }

  async getWinners() {
    const response = await fetch('http://127.0.0.1:3000/winners');
    if (response.ok) {
      const json = await response.json();
      // console.log(json);
      return json;
    }
    alert(`Error HTTP: ${response.status}`);
  }

  async getWinner(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`);
    const result = await response.json();
    console.log(result);
  }

  async createWinners(id: number, wins: number, time: number) {
    let winner = {
        id,
        wins,
        time
    }
    const response = await fetch(`http://127.0.0.1:3000/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(winner)
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      // throw new Error(`Error: ${response.status}`)
      console.log(`Error HTTP: ${response.status}`);
    }
  }

  async deleteWinner(id: number) {
    let response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      console.log(`Error HTTP: ${response.status}`);
    }
  }
}
