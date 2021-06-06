import { Garage } from './app/components/garage/garage';
import { App } from "./app/app";

window.onload = () => {
  const body = document.querySelector('body');

  const app = new App();
  // const garage = new Garage();
  body?.appendChild(app.render());
}