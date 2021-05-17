import { CounterService } from './../counter.service';
import { Component, RootElement } from "../app.api";

export class Page implements Component{
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement,
  private readonly counterService: CounterService) {
    counterService.increment();
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = 'Hello from page';
    this.root?.appendChild(this.page);

    return this.page;
  }
}