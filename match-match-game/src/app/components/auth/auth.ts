import { DataBase } from '../../indexedDB';
import { Component, RootElement } from '../../app.api';

export class Auth {
  private readonly page: HTMLElement;

  public iDB: DataBase;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = `<form id="register-form" action="#/">
        <div class="register-user-form">
          <div>
            <label for="first-name" class="required">
              First Name:
            </label>
            <input type="text" id="first-name" name="first-name" value="" minlength="1" maxlength="30" required />
          </div>
          <div>
            <label for="second-name" class="required">
              Second Name:
            </label>
            <input type="text" id="second-name" name="second-name" value="" minlength="1" maxlength="30" required />
          </div>
          <div>
            <label for="email">
              Email:
            </label>
            <input type="email" id="email" name="email" value="" minlength="1" maxlength="30"
               required />
          </div>
        </div>
  
        <div class="button-pane">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Reset</button>
          <button type="submit" class="btn btn-primary save">Add User</button>
        </div>
      </form>`;
    this.root?.appendChild(this.page);
    function saveData() {
      const firstName = (<HTMLInputElement>document.querySelector('#first-name'));
      const secondName = (<HTMLInputElement>document.querySelector('#second-name'));
      const email = (<HTMLInputElement>document.querySelector('#email'));
      const data = {
        firstName: firstName?.value,
        secondName: secondName?.value,
        email: email?.value,
      };
      // console.log(data);
      return data;
    }
    this.iDB = new DataBase();
    this.iDB.init('testDB');
    const listButton = document.querySelector('.list');
    // console.log(listButton);
    listButton?.addEventListener('click', () => {
      this.iDB.readAll('testCollection');
    });

    const writeButton = document.querySelector('.write');
    // console.log(listButton);
    writeButton?.addEventListener('click', () => {
      const data = saveData();
      this.iDB.write(data.firstName, data.secondName, data.email);
    });

    const saveButton = document.querySelector('.save');
    console.log(saveButton);
    saveButton?.addEventListener('click', () => {
      const data = saveData();
      console.log(data);
      this.iDB.write(data.firstName, data.secondName, data.email);
      const reg = document.querySelector('.header__register');
      console.log(reg);
      this.page.innerHTML = `<div>${data.firstName} ${data.secondName}</div>`;
      reg?.replaceWith(this.page);
    });
    return this.page;
  }

  // modal() {
  //   const modal = document.getElementById('my_modal');
  //   const btn = document.getElementById('btn_modal_window');
  //   const span = (<HTMLElement>document.querySelector('.close_modal_window'));
  //   if (btn) {
  //     btn.onclick = function () {
  //       if (modal) {
  //         modal.style.display = 'block';
  //       }
  //     };
  //   }
  //   span.onclick = function () {
  //     if (modal) {
  //       modal.style.display = 'none';
  //     }
  //   };
  //   window.onclick = function (event: Event) {
  //     if (event.target === modal && modal) {
  //       modal.style.display = 'none';
  //     }
  //   };
  // }
}
