import { CounterServiceImplmentation } from './app/counter.service';
import './style.scss';
import { App } from './app/app';
import { Router } from './app/router';

// const counterService = new CounterServiceImplmentation();

// const rootNode = document.querySelector('.root');

// new App(rootNode, counterService).render();

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  // new App(appElement, counterService).render();
  new App(appElement).start();
  // window.addEventListener('popstate', () => console.log('change'));
  // let router = Router;
  // console.log(router());
  window.addEventListener('popstate', Router);
  // window.addEventListener('hashchange', Router);
  // window.addEventListener('load', Router);
};
