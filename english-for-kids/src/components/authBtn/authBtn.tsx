import React, { useState } from 'react';
import './authBtn.css';

function AuthBtn() {
  const [auth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(!auth);
  };
  console.log(auth);
  return (
    <>
      {
        auth
          ? (
            <input
              type="button"
              value="Login"
              className="login"
              onClick={handleAuth}
            />
          )
          : <input type="button" value="Logout" className="logout" onClick={handleAuth} />
      }
    </>
  );
}

export default AuthBtn;
