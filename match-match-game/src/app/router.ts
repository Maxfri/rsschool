// type MODE = string | null;

// export class Router {
//   routes = [];

//   mode: MODE = null;

//   root = '/';

//   constructor(options: unknown) {
//     this.mode = window.history.pushState ? 'history' : 'hash';
//     if (options.mode) this.mode = options.mode;
//     if (options.root) this.root = options.root;
//     this.listen();
//   }

//   add(path: URL, callback: Function): Router {
//     this.routes.push({ path, callback });
//     return this;
//   }

//   remove(path: URL) {
//     for (let i = 0; i < this.routes.length; i += 1) {
//       if (this.routes[i].path === path) {
//         this.routes.slice(i, 1);
//         return this;
//       }
//     }
//     return this;
//   }

//   flush() {
//     this.routes = [];
//     return this;
//   }

//   clearSlashes(path: URL) {
//     path
//       .toString()
//       .replace(/\/$/, '')
//       .replace(/^\//, '');
//   }

//   getFragment() {
//     let fragment = '';
//     if (this.mode === 'history') {
//       fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
//       fragment = fragment.replace(/\?(.*)$/, '');
//       fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
//     } else {
//       const match = window.location.href.match(/#(.*)$/);
//       fragment = match ? match[1] : '';
//     }
//     return this.clearSlashes(fragment);
//   }

//   navigate(path = '') {
//     if (this.mode === 'history') {
//       window.history.pushState(null, null, this.root + this.clearSlashes(path));
//     } else {
//       window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
//     }
//     return this;
//   }

//   listen() {
//     clearInterval(this.interval);
//     this.interval = setInterval(this.interval, 50);
//   }

//   interval() {
//     if (this.current === this.getFragment()) return;
//     this.current = this.getFragment();

//     this.routes.some((route) => {
//       const match = this.current.match(route.path);
//       if (match) {
//         match.shift();
//         route.callback.apply({}, match);
//         return match;
//       }
//       return false;
//     });
//   }
// }

import { Score } from './page/score/score';
import { About } from './page/about/about';
import { Settings } from './page/settings/settings';
import { HomePage } from './page/home';

const body = document.querySelector('main');
const home = new HomePage();
const about = new About(body);
const score = new Score(body);
const settings = new Settings(body);

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/score', component: score },
  { path: '/settings', component: settings },
];

const parseLocation = (): string => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path: any, routes: any[]): any => routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const Router = (): void => {
  const path = parseLocation();
  console.log(path);
  const component: any = findComponentByPath(path, routes) || {};
  console.log(component);
  (<any>document.querySelector('main')).appendChild(component.component.render());
  // (<any>document.querySelector('body')).innerHTML = 'Ты лох';
  // (<any>document.querySelector('body')).append(
  //   component.component.element,
  // );
};
