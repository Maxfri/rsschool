import { Component } from './app.api';
import { Auth } from './components/auth/auth';
import { Score } from './page/score/score';
import { About } from './page/about/about';
import { Settings } from './page/settings/settings';
import { HomePage } from './page/home';

export type Route = { path: string, component: Component };

const main = document.querySelector('main');
const game = new HomePage(main);
const about = new About(main);
const score = new Score(main);
const settings = new Settings(main);
const auth = new Auth(main);

const routes = [
  { path: '/game', component: game },
  { path: '/about', component: about },
  { path: '/score', component: score },
  { path: '/settings', component: settings },
  { path: '/auth', component: auth },
];

const parseLocation = (): string => window.location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path: string, listRoutes: any[]): any => listRoutes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const Router = (): void => {
  const path = parseLocation();
  const component: Route = findComponentByPath(path, routes) || {};
  (<HTMLDivElement>document.querySelector('main')).innerHTML = '';
  (<HTMLDivElement>document.querySelector('main')).append(component.component.render());
};
