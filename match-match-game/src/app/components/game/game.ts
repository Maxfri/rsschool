import { currentId } from '../../indexedDB';
import { iDB, currrentUser, User } from '../auth/auth';
import { Timer } from '../timer/timer';
import { CardsField } from '../cards-field/cards-field';
import { Card } from '../card/card';
import { BaseComponent } from '../base-component';
import { delay } from '../../shared/delay';

import './game.scss';

const FLIP_DELAY = 500;
const SHOW_TIME = 30;
const SECOND = 1000;
const RANDOM = 0.5;
const STYLE_WRONG_CARD = 'wrong';
const STYLE_RIGHT_CARD = 'right';

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  private timer: Timer;

  private count = 0;

  private startTime: number;

  private cards: Card[];

  private modal: HTMLElement;

  constructor() {
    super();
    this.modal = <HTMLElement>document.querySelector('.modal');
    this.cardsField = new CardsField();

    setTimeout(() => {
      this.timer = new Timer();
      const btnStop = <HTMLDivElement>document.createElement('div');
      btnStop.classList.add('btn_stop');
      btnStop.innerHTML = 'STOP GAME';
      this.element.prepend(btnStop);
      this.element.prepend(this.timer.element);
      btnStop.addEventListener('click', () => {
        this.endGame();
      });
      this.startTime = Game.getCurrentTime();
    }, SHOW_TIME * SECOND);
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]): void {
    this.cardsField.clear();
    this.cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - RANDOM);

    this.cards.forEach((card) => {
      card.element.addEventListener('click', () => {
        this.cardHandler(card);
        if (this.cards.every(Game.isFlipped)) {
          this.endGame();
        }
      });
    });
    this.cardsField.addCards(this.cards);
  }

  static saveResult(user: User): void {
    iDB.write(
      user.firstName,
      user.secondName,
      user.score,
      user.dataImageUrl,
      user.email,
      currentId.id,
    );
  }

  static isFlipped(card: Card): boolean {
    return !card.isFlipped;
  }

  endGame(): void {
    currrentUser.score = this.getScore(Game.getCurrentTime() - this.startTime);
    Game.saveResult(currrentUser);
    this.modal.innerHTML = `<div class = "result-score">
      <div class="result">
        You score: ${currrentUser.score}
      </div>
      <div>
        <a href="#/score" class="nav__link">OK</a>
      </div>
      </div>`;
    this.modal.style.display = 'block';
    this.stopGame();

    window.onclick = (event: MouseEvent) => {
      if (event.target === this.modal) {
        this.modal.style.display = 'none';
      }
    };
  }

  stopGame(): void {
    this.cardsField.clear();
    this.timer.stopTimer();
  }

  countMove(): number {
    return this.count;
  }

  moveRight(): number {
    return this.count++;
  }

  moveWrong(): number {
    return this.count--;
  }

  public getScore(times: number): number {
    const score = Math.round(this.count * 100 - times / 100);

    return score < 0 ? 0 : score;
  }

  static getCurrentTime(): number {
    return new Date().getTime();
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }
    if (this.activeCard.image === card.image) {
      this.activeCard.element.classList.add(STYLE_RIGHT_CARD);
      card.element.classList.add(STYLE_RIGHT_CARD);
      this.moveRight();
    }
    if (this.activeCard.image !== card.image) {
      await delay(FLIP_DELAY);
      this.activeCard.element.classList.add(STYLE_WRONG_CARD);
      card.element.classList.add(STYLE_WRONG_CARD);
      this.moveWrong();
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }

    this.activeCard.element.classList.remove(STYLE_WRONG_CARD);
    card.element.classList.remove(STYLE_WRONG_CARD);
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
