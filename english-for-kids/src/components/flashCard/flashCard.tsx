import React, { useState } from 'react';

function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {flashcard.word}
      </div>
      <div className="back">
        {flashcard.translation}
      </div>
    </div>
  );
}

export default FlashCard;
