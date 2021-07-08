import React from 'react';

function LosePage(wrongAnswers) {
  return (
    <div>
      <div>Errors: ${wrongAnswers}</div>
      <img src='../src/assets/img/failure.jpg' />
    </div>
  );
}

export default LosePage;