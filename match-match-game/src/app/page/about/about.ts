import { Component, RootElement } from '../../app.api';
import { BaseComponent } from '../../components/base-component';

export class About {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    // counterService.increment();
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = 'Hello from About page';
    this.root?.appendChild(this.page);

    return this.page;
  }
}
