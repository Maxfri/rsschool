import { RootElement } from '../../app.api';
import './settings.scss';

export class Settings {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.classList.add('settings');
    this.page.innerHTML = `<h2 class="settings-title">Game Settings</h2>
    <div class="game-settings">
    <div class="game-cards">
      <h3 class="game-title">Game cards</h3>
      <select class="game-select" name="cards" id="cards">
        <option value="0" selected>Animals</option>
        <option value="1">Other</option>
      </select>
    </div>
    <div class="game-difficulty">
      <h3 class="game-title">Difficulty</h3>
      <select class="game-select" name="difficulty" id="difficulty">
        <option value="value1" selected>4 x 4</option>
        <option value="value2">6 x 6</option>
      </select>
    </div>
  </div>`;
    this.root?.appendChild(this.page);
    return this.page;
  }
}
