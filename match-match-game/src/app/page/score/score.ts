import { Component, RootElement } from '../../app.api';
import { BaseComponent } from '../../components/base-component';

export class Score {
  private readonly page: HTMLElement;

  constructor(private readonly root: RootElement) {
    this.page = document.createElement('div');
  }

  render(): HTMLElement {
    this.page.innerHTML = `<div class="best-players">
    <table>
      <tr>
        <td>PHOTO</td>
        <td>Name, Email</td>
        <td>Score</td>
      </tr>
    </table>
  </div>`;
    this.root?.appendChild(this.page);

    return this.page;
  }
}
