import { Auth } from './components/auth/auth';
import { Score } from './page/score/score';
import { About } from './page/about/about';
import { Settings } from './page/settings/settings';
import { HomePage } from './page/home';

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

const findComponentByPath = (path: any, findRoutes: any[]): any => routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const Router = (): void => {
  const path = parseLocation();
  // console.log(path);
  const component: any = findComponentByPath(path, routes) || {};
  // console.log(component);
  // console.log(component.component.render());
  (<any>document.querySelector('main')).innerHTML = '';
  (<any>document.querySelector('main')).append(component.component.render());
};
