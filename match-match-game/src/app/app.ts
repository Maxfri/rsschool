import { CounterService } from './counter.service';
import { Page } from './page/page';
import { Component, RootElement } from "./app.api";

export class App implements Component {
  private readonly application: HTMLDivElement;

  constructor(private readonly root: RootElement, private readonly counterService: CounterService) {
    this.application = document.createElement('div');
    this.counterService.subscribeOnCounter((counter: number) => console.log(counter));
  }

  render(): HTMLElement {
    this.application.innerHTML = 'Hello from app';
    this.root?.appendChild(this.application);
    this.application.appendChild(new Page(this.application, this.counterService).render());

    return this.application;
  }
}