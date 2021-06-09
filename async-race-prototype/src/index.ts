import { App } from './app/app';
import { Garage } from './app/components/garage/garage';

window.onload = () => {
  const body = document.querySelector('body');

  const app = new App();
  body?.appendChild(app.render());
  const formElem = <HTMLFormElement>document.querySelector('#create');
    console.log(formElem);
    new Garage().listen(formElem);
};
