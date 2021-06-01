import { BaseComponent } from '../base-component';

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);
    this.element.innerHTML = `<div class="footer__wrapper">
    RS School 2021 Q1
    </div>`;
  }
}
