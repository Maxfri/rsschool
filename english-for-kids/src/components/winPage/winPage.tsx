import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

function WinPage(): JSX.Element {
  const history: History = useHistory();

  setTimeout(() => {
    history.push('/');
  }, 2500);
  return (
    <div>
      <img src="../src/assets/img/success.jpg" alt="You win" />
    </div>
  );
}

export default WinPage;
