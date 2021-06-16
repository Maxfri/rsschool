import { App } from './app/app';

window.onload = async () => {
  const body = document.querySelector('body');
  const app = new App();
  body?.appendChild(app.render());
};
