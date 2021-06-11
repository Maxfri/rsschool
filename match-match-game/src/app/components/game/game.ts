import { Timer } from '../timer/timer';
import { CardsField } from '../cards-field/cards-field';
import { Card } from '../card/card';
import { BaseComponent } from '../base-component';
import { delay } from '../../shared/delay';
import './game.scss';

const FLIP_DELAY = 500;
const SHOW_TIME = 5;
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

  constructor() {
    super();
    this.cardsField = new CardsField();
    setTimeout(() => {
      this.timer = new Timer();
      this.element.prepend(this.timer.element);
    }, SHOW_TIME * SECOND);
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]): void {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - RANDOM);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  stopGame(): void {
    this.cardsField.clear();
  }

  move(): number {
    return this.count++;
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
    }
    if (this.activeCard.image !== card.image) {
      await delay(FLIP_DELAY);
      this.activeCard.element.classList.add(STYLE_WRONG_CARD);
      card.element.classList.add(STYLE_WRONG_CARD);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }

    this.activeCard.element.classList.remove(STYLE_WRONG_CARD);
    card.element.classList.remove(STYLE_WRONG_CARD);
    this.activeCard = undefined;
    this.isAnimation = false;

    this.move();
  }
}
