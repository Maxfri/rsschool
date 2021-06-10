import { App } from './app/app';
import { Router } from './app/router';

import './style.scss';

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  new App(appElement).render();
  window.addEventListener('popstate', Router);
};
