import { BaseComponent } from '../base-component';

import './timer.scss';

const ONE_MINUTE = 60;
const ZERO_SECONDS = 0;
const SECOND = 1000;

export class Timer extends BaseComponent {
  time: NodeJS.Timeout;

  minutes;

  seconds;

  timeStart;

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

      if (this.seconds === ONE_MINUTE) {
        this.minutes++;
        this.seconds = ZERO_SECONDS;
      }

      this.element.innerHTML = `
      <div class="timer">
          <h2 id="timer"> 0${this.minutes}:${this.seconds}</h2>
          </div>`;
    }, SECOND);
  }

  stopTimer(): void {
    clearInterval(this.time);
  }
}
