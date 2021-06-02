import { BaseComponent } from '../base-component';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `<div class="header__wrapper">
      <div class="header__logo">
        <a href="#/about" class="header__logo-link">
          <div class="header__logo-title">Match <span class="header__logo-span">match</span></div>
        </a>
      </div>
      <nav class="nav">
        <a href="#/about" class="nav__link">About Game</a>
        <a href="#/score" class="nav__link">Best Score</a>
        <a href="#/settings" class="nav__link">Game Settings</a>
      </nav>
      <div class="header__register">
        <a href="#/auth" id="modal-btn" class="btn header__new-player" type="button">
          register new player
        </a>
      </div>
    </div>`;
  }
}
