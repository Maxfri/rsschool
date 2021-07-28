import React from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

interface Props {
  setMode: React.Dispatch<React.SetStateAction<string>>,
}
function WinPage({ setMode }: Props): JSX.Element {
  const history: History = useHistory();
  setMode('train');
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
