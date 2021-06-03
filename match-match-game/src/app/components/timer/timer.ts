import './timer.scss';
import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  time: any;

  minutes;

  seconds;

  timeStart;

  // timerCounter: HTMLElement;

  constructor(minutes = 0, seconds = 0, timeStart = false) {
    super('div', ['timer__wrapper']);
    this.minutes = minutes;
    this.seconds = seconds;
    this.timeStart = timeStart;
    this.element.innerHTML = `
          <div class="timer">
          <h2 id="timer"> 00:00:00</h2>
          </div>`;
    this.stopTimer();
    this.timer();
  }

  timer(): void {
    this.time = setInterval(() => {
      this.seconds++;

      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = 0;
      }

      this.element.innerHTML = `
      <div class="timer">
          <h2 id="timer"> ${this.minutes}:${this.seconds}</h2>
          </div>`;
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.time);
  }
}
