import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

function LosePage({ countAnswers }): JSX.Element {
  const history: History = useHistory();

  setTimeout(() => {
    history.push('/');
  }, 2500);
  return (
    <div>
      <p>
        Errors:
        {countAnswers.wrong}
      </p>
      <img src="../src/assets/img/failure.jpg" alt="You lose" />
    </div>
  );
}

export default LosePage;
