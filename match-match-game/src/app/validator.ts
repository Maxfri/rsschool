export class Validator {
  private status = true;

  private input: HTMLInputElement;

  validateName(input: HTMLInputElement): boolean {
    this.input = input;
    this.input.classList.remove('incorrect');
    this.input.classList.remove('correct');
    if (this.input.value.length < 1
      || this.input.value.length > 30
      || !(/\D{1}/i).exec(this.input.value)
      || (/(^A-Za-zА-Яа-я){1}/i).exec(this.input.value)) {
      this.status = false;
      this.input.classList.add('incorrect');
      return false;
    }
    this.input.classList.add('correct');
    return true;
  }

  validateEmail(input: HTMLInputElement): boolean {
    const forEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
    this.input = input;
    this.input.classList.remove('incorrect');
    this.input.classList.remove('correct');
    if (this.input.value.length < 1 || this.input.value.length > 30 || !forEmail.exec(this.input.value)) {
      this.status = false;
      this.input.classList.add('incorrect');
      return false;
    }
    this.input.classList.add('correct');
    return true;
  }
}
