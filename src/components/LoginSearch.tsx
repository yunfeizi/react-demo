import React, { useState } from 'react';
import logoSvg from '../assets/figma/flyme_logo.svg';
import './FlyMeSearch.css';

const LoginSearch: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt with:', { username, password });
    // 实际项目中这里会调用登录API
  };

  return (
    <div className="flyme-container">
      <header className="header">
        <div className="header-left">
          <div className="logo-container">
            <img className="logo" src={logoSvg} alt="FlyMe Logo" />
          </div>
          <div className="nav-links">
            <a className="nav-link active">Book</a>
            <a className="nav-link">Manage</a>
          </div>
        </div>
        <button className="login-button">Log in</button>
      </header>

      <main className="main-content">
        <div className="login-form">
          <h1 className="welcome-title">Welcome back</h1>
          
          <div className="form-group">
            <label className="form-label">Username or email</label>
            <input 
              className="login-input"
              placeholder="Enter your username or email" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              className="login-input"
              type="password"
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a className="forgot-link">Forgot username or password?</a>

          <button 
            className="login-button"
            onClick={handleLogin}
          >
            Log in
          </button>

          <p className="signup-text">
            Don't have an account? <span className="signup-link">Sign up</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginSearch;