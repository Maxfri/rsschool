import { DataBase } from '../../indexedDB';
import { RootElement } from '../../app.api';
import { Validator } from '../../validator';

import './auth.scss';

export type CallbackFunction = (...args: string[]) => void;
export type User = {
  id: IDBValidKey, firstName: string, secondName: string, dataImageUrl: string, email: string, score: number
};

const dX = 20;
const dY = 20;

export const currrentUser: User = {
  id: 0, firstName: '', secondName: '', dataImageUrl: '', email: '', score: 0,
};
export const iDB: DataBase = new DataBase();
export class Auth {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.classList.add('modal');
    this.page.innerHTML = `<div class="auth">
      <h2 class="auth-header">Registr new player</h2>
      <div class="auth-form">
        <div class="auth-form__areas">
          <div class="auth-form__area">
            <div class="auth-form__title">First Name</div>
            <input id="firstName" class="auth-form__value form__name"
             type="text" minlength="1" maxlength="30" required >
            <label for="firstName" class="auth-form__message">The name can't contains only numbers or symbols </label>
          </div>
          <div class="auth-form__area">
            <div class="auth-form__title">Second Name</div>
            <input id="secondName" class="auth-form__value form__last-name" type="text"
             minlength="1" maxlength="30" required >
            <label for="secondName" class="auth-form__message">
            The last name can't contains only numbers or symbols
            </label>
          </div>
          <div class="auth-form__area">
            <div class="auth-form__title">E-mail</div>
            <input id="email" class="auth-form__value form__email" type="text" minlength="1" maxlength="30" required >
            <label for="email" class="auth-form__message">
              Uppercase and lowercase Latin letters A to Z and a to z
              digits 0 to 9
            </label>
          </div>
        </div>
        <div class="auth-form__wrapper">
          <div class="auth-form__ava">
            <div class="auth-form__img-wrapper">
              <canvas id="canvas">
              <img class="auth-form__img" src="./assets/unknown.png" alt="avatar">
              </canvas>
            </div>
          </div>
          <div class="auth-form__upload-file">
            <div class="auth-form__group">
              <input type="file" name="file" id="file" class="auth-form__img-btn input-file">
              <label for="file" class="auth-form__labelFile">
                <span class="auth-form__filename">Add avatar</span>
              </label>
            </div>
          </div>
          <div class="auth-form__buttons">
            <button class="auth-form__btn auth-form__btn_submit" type="submit" >
              Add user
            </button>
            <button class="auth-form__btn auth-form__btn_cancel" type="button">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>`;

    this.root?.appendChild(this.page);

    const modalBtn = <HTMLElement>document.getElementById('modal-btn');
    const modal = <HTMLElement>document.querySelector('.modal');

    if (modalBtn) {
      modalBtn.onclick = () => {
        modal.style.display = 'block';
      };
    }

    window.onclick = (event: MouseEvent) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };

    let dataImageUrl: string;

    function handleFiles(event: Event, callback: CallbackFunction): HTMLImageElement {
      const img = new Image();
      let dataURL: string;
      img.crossOrigin = 'Anonymous';
      const target = event.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');
        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
        ctx.drawImage(img, dX, dY);
        dataURL = canvas.toDataURL();
        callback(dataURL);
      };
      return img;
    }

    const input = <HTMLSelectElement>document.querySelector('#file');
    input.addEventListener('change', (event: Event) => {
      handleFiles(event, (dataUrl: string) => {
        dataImageUrl = dataUrl;
      });
    });
    const firstName = (<HTMLInputElement>document.querySelector('#firstName'));
    const secondName = (<HTMLInputElement>document.querySelector('#secondName'));
    const email = (<HTMLInputElement>document.querySelector('#email'));

    function saveData() {
      const data = {
        firstName: firstName?.value,
        secondName: secondName?.value,
        dataImageUrl,
        email: email?.value,
      };
      return data;
    }

    iDB.init('maxfri');
    const validator = new Validator();
    const addButton = <HTMLButtonElement>document.querySelector('.auth-form__btn_submit');
    const cancelButton = <HTMLButtonElement>document.querySelector('.auth-form__btn_cancel');
    addButton.disabled = true;
    const form = <HTMLButtonElement>document.querySelector('.auth-form');

    cancelButton.addEventListener('click', () => {
      modal.style.display = 'none';
      firstName.value = '';
      secondName.value = '';
      email.value = '';
      if (!addButton.disabled) {
        addButton.disabled = true;
      }
    });

    form.addEventListener('input', () => {
      if (validator.validateName(firstName) && validator.validateName(secondName) && validator.validateEmail(email)) {
        addButton.disabled = false;
      } else {
        addButton.disabled = true;
      }
    });

    if (addButton.disabled) {
      addButton.addEventListener('click', () => {
        modal.style.display = 'none';
        const data = saveData();
        if (data.dataImageUrl === undefined) {
          data.dataImageUrl = './assets/unknown.png';
        }
        currrentUser.firstName = data.firstName;
        currrentUser.secondName = data.secondName;
        currrentUser.score = 0;
        currrentUser.email = data.email;
        currrentUser.dataImageUrl = data.dataImageUrl;

        iDB.add(data.firstName, data.secondName, 0, data.dataImageUrl, data.email);
        const reg = <HTMLElement>document.querySelector('.header__register');
        const header = <HTMLElement>document.querySelector('.header__wrapper');
        const user = <HTMLElement>document.createElement('div');
        const gameButton = <HTMLElement>document.createElement('div');

        reg.innerHTML = '';
        user.innerHTML = `<div class="avatar">
          <img class="avatar-img" src="${data.dataImageUrl}" alt=""></div>
          <div>${data.firstName} ${data.secondName}</div>`;
        gameButton.innerHTML = '<a href="#/game">GAME</a>';

        reg.appendChild(user);
        header.appendChild(gameButton);
      });
    }

    return this.page;
  }
}
