import { Component, RootElement } from '../../app.api';

export class Settings {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    // counterService.increment();
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = 'Hello from Settings page';
    this.root?.appendChild(this.page);

    return this.page;
  }
  // render() {
  //   return `<section>
  //   <h1>Settings</h1>
  //   <p>This is just a test </p>
  //   </section>`;
  // }
}
