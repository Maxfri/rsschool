import { CounterServiceImplmentation } from './app/counter.service';
// import './style.scss';
// console.log('test');
import { App } from './app/app';

const counterService = new CounterServiceImplmentation();

const rootNode = document.querySelector('.root');

new App(rootNode, counterService).render();