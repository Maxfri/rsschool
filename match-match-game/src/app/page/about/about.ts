import { Component, RootElement } from '../../app.api';
import { BaseComponent } from '../../components/base-component';

export class About {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = `<div class="rules-list">
      <div class="rules">
        <div class="number">
          <img src="./assets/1.png" alt="" srcset="">
        </div>
        <div class="rule">
          Register new player in game
        </div>
        <div class="rule-image">
          <img src="./assets/image 4.jpg" alt="" srcset="">
        </div>
      </div>
      <div class="rules">
        <div class="number">
          <img src="./assets/2.png" alt="" srcset="">
        </div>
        <div class="rule">
          Configure your game settings
        </div>
        <div class="rule-image">
          <img src="./assets/image 4.jpg" alt="" srcset="">
        </div>
      </div>
      <div class="rules">
        <div class="number">
          <img src="./assets/3.png" alt="" srcset="">
        </div>
        <div class="rule">
          Start you new game! Remember card positions and match it before times up.
        </div>
        <div class="rule-image">
          <img src="./assets/image 4.jpg" alt="" srcset="">
        </div>
      </div>
    </div>`;
    this.root?.appendChild(this.page);

    return this.page;
  }
}
