import React from 'react';

function LosePage(wrongAnswers): JSX.Element {
  console.log('loser');
  return (
    <div>
      <div>Errors: ${wrongAnswers}</div>
      <img src='../src/assets/img/failure.jpg' />
    </div>
  );
}

export default LosePage;