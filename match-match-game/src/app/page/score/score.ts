import { Component, RootElement } from '../../app.api';
import { BaseComponent } from '../../components/base-component';
import './score.scss';

export class Score {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.classList.add('score');
    this.page.innerHTML = `<h2 class="score-title">Best players</h2>
    <div class="best-players">
    <div class="best-players-table">
      <div class="best-players-place">
        <div class="best-players-photo">
          <img class="best-players-img" src="./assets/unknown.png" alt="photo">
        </div>
        <div class="best-players-name">
          your ad could be here
        </div>
        <div class="best-players-score">
          Score: 0
        </div>
      </div>
    </div>
  </div>`;
    this.root?.appendChild(this.page);

    return this.page;
  }
}
