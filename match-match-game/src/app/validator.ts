const INPUT_CORRECT = 'correct';
const INPUT_INCORRECT = 'incorrect';

export class Validator {
  private status = true;

  private input: HTMLInputElement;

  validateName(input: HTMLInputElement): boolean {
    const forName = (/[^~!@#$%*()_—+=|:;"'`<>,.?/^]$/);
    this.input = input;
    this.input.classList.remove(INPUT_INCORRECT);
    this.input.classList.remove(INPUT_CORRECT);
    if (this.input.value.length < 1
      || this.input.value.length > 30
      || !(/\D{1}/i).exec(this.input.value)
      || (/(^A-Za-zА-Яа-я){1}/i).exec(this.input.value)
      || !forName.exec(this.input.value)) {
      this.input.setCustomValidity('I expect name!');
      this.status = false;
      this.input.classList.add(INPUT_INCORRECT);
      return false;
    }
    this.input.setCustomValidity('');
    this.input.classList.add(INPUT_CORRECT);
    return true;
  }

  validateEmail(input: HTMLInputElement): boolean {
    const forEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
    this.input = input;
    this.input.classList.remove(INPUT_INCORRECT);
    this.input.classList.remove(INPUT_CORRECT);
    if (this.input.value.length < 1 || this.input.value.length > 30 || !forEmail.exec(this.input.value)) {
      this.input.setCustomValidity('I expect an e-mail, darling!');
      this.status = false;
      this.input.classList.add(INPUT_INCORRECT);
      return false;
    }
    this.input.setCustomValidity('');
    this.input.classList.add(INPUT_CORRECT);
    return true;
  }
}
