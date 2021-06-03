export function validator(): boolean {
  let status = true;

  const firstName = document.querySelector('#firstName') as HTMLInputElement;
  const secondName = document.querySelector('#secondName') as HTMLInputElement;
  const email = document.querySelector('#email') as HTMLInputElement;

  firstName.classList.remove('incorrect');
  secondName.classList.remove('incorrect');
  email.classList.remove('incorrect');
  firstName.classList.remove('correct');
  secondName.classList.remove('correct');
  email.classList.remove('correct');

  const forEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

  if (firstName.value.length < 1 || firstName.value.length > 30 || !(/\D{1}/i).exec(firstName.value) || (/(^A-Za-zА-Яа-я){1}/i).exec(firstName.value)) {
    status = false;
    firstName.classList.add('incorrect');
  } else {
    firstName.classList.add('correct');
  }

  if (secondName.value.length < 1 || secondName.value.length > 30 || !(/\D{1}/i).exec(secondName.value) || (/(^A-Za-zА-Яа-я){1}/i).exec(secondName.value)) {
    status = false;
    secondName.classList.add('incorrect');
  } else {
    secondName.classList.add('correct');
  }

  if (email.value.length < 1 || email.value.length > 30 || !forEmail.exec(email.value)) {
    status = false;
    email.classList.add('incorrect');
  } else {
    email.classList.add('correct');
  }

  return status;
}
