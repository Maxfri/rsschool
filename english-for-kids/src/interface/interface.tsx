export interface Audio {
  audio: HTMLAudioElement,
  word: string
}

export interface Category {
  id: number,
  title: string,
  image: string,
}

export interface Card {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  clicks: string;
  rightClick: string;
  wrongClick: string;
  percent: string;
}

export interface Answer {
  wrong: number,
  right: number
}
