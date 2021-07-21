import React from 'react';

function LosePage(wrongAnswers): JSX.Element {
  return (
    <div>
      <div>
        Errors: $
        {wrongAnswers}
      </div>
      <img src="../src/assets/img/failure.jpg" alt="You lose" />
    </div>
  );
}

export default LosePage;
