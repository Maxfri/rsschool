import { BaseComponent } from '../base-component';

export class Header extends BaseComponent {
  constructor() {
    super('div', ['menu']);
    document.body.appendChild(this.render());
  }

  render(): HTMLElement {
    this.element.innerHTML = `<div class="menu">
        <button class="button garage-menu-button" id ="garage-menu">To garage</button>
        <button class="button winners-menu-button" id ="winners-menu">To winners</button>
      </div>`;

    return this.element;
  }
}
