import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { Answer } from '../../interface/interface';
import { DELAY } from '../../const/const';

interface Props {
  countAnswers: Answer
}
function LosePage({ countAnswers }: Props): JSX.Element {
  const history: History = useHistory();
  setTimeout(() => {
    history.push('/');
  }, DELAY);
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
