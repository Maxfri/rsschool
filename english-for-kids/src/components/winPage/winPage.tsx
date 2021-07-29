import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { DELAY } from '../../const/const';

function WinPage(): JSX.Element {
  const history: History = useHistory();
  setTimeout(() => {
    history.push('/');
  }, DELAY);
  return (
    <div>
      <img src="../src/assets/img/success.jpg" alt="You win" />
    </div>
  );
}

export default WinPage;
