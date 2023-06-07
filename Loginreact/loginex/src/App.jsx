import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulando uma requisição assíncrona de autenticação
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        setIsLoggedIn(true);
      } else {
        alert('Nome de usuário ou senha inválidos');
      }
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Bem-vindo, {username}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome de usuário:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
