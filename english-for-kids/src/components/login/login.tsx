import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';

async function loginUser(credentials) {
  return fetch('https://english-for-kids-serve.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json());
}

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h2>Please Log In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(event): any => setUserName(event.target.value as any)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(event): any => setPassword(event.target.value as any)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
