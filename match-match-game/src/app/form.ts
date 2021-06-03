export class Form extends Control {
  constructor(parentNode, onValidate) {
    super(parentNode);
    this.validate = onValidate;
    this.inputs = [];
    this.isValid = false;
  }

  getObject() {
    const result = {};
    this.inputs.forEach((elem) => result[elem.name] = elem.field.node.value);
    return result;
  }

  addInput(name) {
    const newInput = new Input(this.node, name);
    newInput.onInput = () => {
      this.setErrors(this.validate(this.getObject()));
    };
    this.inputs.push(newInput);
  }

  setErrors(obj) {
    Object.keys(obj).forEach((key) => {
      const inp = this.inputs.find((input) => input.name === key);
      if (inp) {
        inp.setError(obj[key]);
      }
    });
    const lastValid = this.isValid;
    this.isValid = Object.keys(obj).every((key) => !obj[key]);
    if (!this.isValid) {
      this.node.classList.remove('valid');
    } else {
      this.node.classList.add('valid');
    }
    if (lastValid !== this.isValid) {
      this.onChangeValidState && this.onChangeValidState(this.isValid);
    }
  }
}
