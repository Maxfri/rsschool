import { BaseComponent } from '../base-component';

export class Auth extends BaseComponent {
  constructor() {
    super('div', ['auth']);
    this.element.innerHTML = `<div id="my_modal" class="modal">
    <div class="modal_content">
      <span class="close_modal_window">×</span>
      <form id="register-form">
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
              pattern="/^([A-Za-z0-9_-.])+@([A-Za-z0-9_-.])+.([A-Za-z]{2,4})$/" required />
          </div>
          <div>
            <label for="image-file">
              File image:
            </label>
            <input type="file" id="image-file" />
          </div>
        </div>
  
        <div class="button-pane">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Reset</button>
          <button type="button" class="btn btn-primary save">Add User</button>
        </div>
      </form>
    </div>
  </div>`;
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
