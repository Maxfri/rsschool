import { BaseComponent } from '../base-component';

export class Button extends BaseComponent {
  constructor(context: string) {
    super('button', ['btn']);
    this.element.innerHTML = context;
  }
}
