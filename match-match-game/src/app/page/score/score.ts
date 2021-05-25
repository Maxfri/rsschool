import { Component, RootElement } from '../../app.api';
import { BaseComponent } from '../../components/base-component';

export class Score {
  // private readonly page: HTMLElement;

  // constructor(private readonly root: RootElement) {
  //   // counterService.increment();
  //   this.page = document.createElement('div');
  // }

  // render(): HTMLElement {
  //   this.page.innerHTML = 'Hello from Score page';
  //   this.root?.appendChild(this.page);

  //   return this.page;
  // }
  render() {
    return `<section>
    <h1>Score</h1>
    <p>This is just a test </p>
    </section>`;
  }
  // constructor() {
  //   super('div', ['card-container']);
  //   console.log('SCORE');
  //   this.element.innerHTML = `
  //     <div class="card">
  //     SCORE
  //     </div>`;
  // }
}
