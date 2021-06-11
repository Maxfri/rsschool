import { Auth } from './components/auth/auth';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Component, RootElement } from './app.api';

export class App implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement) {
    this.application = document.createElement('div');
  }

  render(): HTMLElement {
    const body = <HTMLElement>document.querySelector('body');
    const header = new Header();
    const footer = new Footer();
    body.prepend(header.element);
    body.append(footer.element);
    const auth = new Auth(<HTMLElement>document.querySelector('header'));
    auth.render();
    return this.application;
  }
}
