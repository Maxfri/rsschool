import React, { useState } from 'react';
import Cards from '../../components/cards/cards';
import FlashcardList from '../../components/flashCardList/flashCardList';
import cardsData from '../../components/cards/CardsData';
import CardList from '../../components/cardList/cardList';

export default function PageHome(): JSX.Element {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [cards, setCards] = useState(cardsData);
  return (
    <section className="main-section">
      <h2>Home</h2>
      <CardList cards={cards} />
      {/* <FlashcardList flashcards={flashcards} /> */}
    </section>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    word: 'cry',
    translation: 'плакать',
    image: '../src/assets/img/cry.jpg',
    audioSrc: 'audio/cry.mp3',
  },
  {
    id: 2,
    word: 'dance',
    translation: 'танцевать',
    image: '../src/assets/img/dance.jpg',
    audioSrc: 'audio/dance.mp3',
  },
  {
    id: 3,
    word: 'dive',
    translation: 'нырять',
    image: '../src/assets/img/dive.jpg',
    audioSrc: 'audio/dive.mp3',
  },
  {
    id: 4,
    word: 'draw',
    translation: 'рисовать',
    image: '../src/assets/img/draw.jpg',
    audioSrc: 'audio/draw.mp3',
  },
  {
    id: 5,
    word: 'fish',
    translation: 'ловить рыбу',
    image: '../src/assets/img/fish.jpg',
    audioSrc: 'audio/fish.mp3',
  },
  {
    id: 6,
    word: 'fly',
    translation: 'летать',
    image: '../src/assets/img/fly.jpg',
    audioSrc: 'audio/fly.mp3',
  },
  {
    id: 7,
    word: 'hug',
    translation: 'обнимать',
    image: '../src/assets/img/hug.jpg',
    audioSrc: 'audio/hug.mp3',
  },
  {
    id: 8,
    word: 'jump',
    translation: 'прыгать',
    image: '../src/assets/img/jump.jpg',
    audioSrc: 'audio/jump.mp3',
  },
];
