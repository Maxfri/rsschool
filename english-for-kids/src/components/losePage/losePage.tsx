import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

interface Answers {
  wrong: number,
  right: number
}
interface Props {
  countAnswers: Answers,
  setMode: React.Dispatch<React.SetStateAction<string>>,
}
function LosePage({ countAnswers, setMode }: Props): JSX.Element {
  const history: History = useHistory();
  setMode('train');
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
