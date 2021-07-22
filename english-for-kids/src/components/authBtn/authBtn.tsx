import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './authBtn.css';

function AuthBtn({ token, setToken }) {
  const handleAuthLogOut = () => {
    setToken('');
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
