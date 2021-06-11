import { Component, RootElement } from '../app.api';

export class Page implements Component {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = 'Hello from page';
    this.root?.appendChild(this.page);

    return this.page;
  }
}
