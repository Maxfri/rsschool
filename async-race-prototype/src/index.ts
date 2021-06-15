import { Garage } from './app/components/garage/garage';
import { App } from './app/app';

window.onload = async () => {
  const body = document.querySelector('body');
  const app = new App();
  body?.appendChild(app.render());

  // await renderPage();
  const form = <HTMLFormElement>document.querySelector('#create');
  // listen(form);

  // form.addEventListener('submit', (data) => {
  //   console.log(data)
  // });
};
