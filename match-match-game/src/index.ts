import { Settings } from './app/page/settings/settings';
import { CounterServiceImplmentation } from './app/counter.service';
import './style.scss';
import { App } from './app/app';
import { Router } from './app/router';
import { Auth } from './app/components/auth/auth';

// const counterService = new CounterServiceImplmentation();

// const rootNode = document.querySelector('.root');

// new App(rootNode, counterService).render();

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  // new App(appElement, counterService).render();
  // let valueCard = new Settings(appElement).selectCard();
  // new App(appElement).start(valueCard);
  new App(appElement).render();
  window.addEventListener('popstate', Router);
};
