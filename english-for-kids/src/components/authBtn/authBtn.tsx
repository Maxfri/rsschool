import React from 'react';
import { Link } from 'react-router-dom';
import './authBtn.css';

interface Props {
  token: undefined,
  setToken: React.Dispatch<() => undefined>
}
function AuthBtn({ token, setToken }: Props) {
  const handleAuthLogOut = () => {
    setToken(undefined);
  };
  return (
    <>
      {
        !token
          ? (
            <Link to="/login">
              <input
                type="button"
                value="Login"
                className="login"
              />
            </Link>
          )
          : (
            <Link to="/">
              <input type="button" value="Logout" className="logout" onClick={handleAuthLogOut} />
            </Link>
          )
      }
    </>
  );
}

export default AuthBtn;
