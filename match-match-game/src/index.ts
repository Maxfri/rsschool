import { CounterServiceImplmentation } from './app/counter.service';
// import './style.scss';
// console.log('test');
import { App } from './app/app';
import { Router } from './app/router';

const counterService = new CounterServiceImplmentation();

const rootNode = document.querySelector('.root');

new App(rootNode, counterService).render();

const router = new Router({
  mode: 'hash',
  root: '/',
});

router
  .add(/about/, () => {
    alert('welcome in about page');
  })
  .add(/products\/(.*)\/specification\/(.*)/, (id: number, specification: string) => {
    alert(`products: ${id} specification: ${specification}`);
  })
  .add('', () => {
    // general controller
    // console.log('welcome in catch all controller');
  });
