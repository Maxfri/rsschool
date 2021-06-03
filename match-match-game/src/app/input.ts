import { Control } from './controll';

export class Input extends Control {
  constructor(parentNode, name, onValidate) {
    super(parentNode);
    this.name = name;
    this.caption = new Control(this.node, 'div');
    this.field = new Control(this.node, 'input');
    this.error = new Control(this.node, 'div');
    this.field.node.addEventListener('input', () => {
      if (this.validate) {
        this.setError(this.validate(this.getValue()));
      }
      if (this.onInput) {
        this.onInput();
      }
    });
    this.validate = onValidate;
  }

  getValue() {
    return this.field.node.value;
  }

  setError(err) {
    if (err === null) {
      this.error.node.textContent = 'ok';
      this.field.node.classList.remove('invalid');
    } else {
      this.error.node.textContent = err;
      this.field.node.classList.add('invalid');
    }
  }
}
