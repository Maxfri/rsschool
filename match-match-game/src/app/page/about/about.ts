import { RootElement } from '../../app.api';
import './about.scss';

export class About {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.classList.add('about');
    this.page.innerHTML = `<h2 class="about-title">How to play?</h2>
    <div class="rules-list">
      <div class="rules">
        <div class="rule">
          <div class="number">
            <img src="./assets/1.png" alt="" srcset="">
          </div>
          <p class="rule-text">Register new player in game</p>
        </div>
        <div class="rule-image">
          <img src="./assets/image1.png" alt="" srcset="">
        </div>
      </div>
      <div class="rules">
        <div class="rule">
          <div class="number">
            <img src="./assets/2.png" alt="" srcset="">
          </div>
          <p class="rule-text">Configure your game settings</p>
        </div>
        <div class="rule-image">
          <img src="./assets/image2.png" alt="" srcset="">
        </div>
      </div>
      <div class="rules">
        <div class="rule">
          <div class="number">
            <img src="./assets/3.png" alt="" srcset="">
          </div>
          <p class="rule-text">Start you new game! Remember card positions and match it before times up.</p>
        </div>
        <div class="rule-image">
          <img src="./assets/image4.jpg" alt="" srcset="">
        </div>
      </div>
    </div>`;
    this.root?.appendChild(this.page);

    return this.page;
  }
}
