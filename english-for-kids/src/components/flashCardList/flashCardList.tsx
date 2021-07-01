import React from 'react';
import FlashCard from '../flashCard/flashCard';

function FlashCardList({ flashcards }: any) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => <FlashCard flashcard={flashcard} key={flashcard.id} />)}

    </div>
  );
}

export default FlashCardList;
