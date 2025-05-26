import React, { useState } from 'react';
import styled from 'styled-components';
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoSvg} alt="FlyMe Logo" style={{ width: '16px', height: '16px' }} />
          </div>
          <div style={{ display: 'flex', gap: '36px' }}>
            <a style={{ color: '#121417', fontSize: '14px', fontWeight: 500, cursor: 'pointer', textDecoration: 'none' }}>Book</a>
            <a style={{ color: '#121417', fontSize: '14px', fontWeight: 'normal', cursor: 'pointer', textDecoration: 'none' }}>Manage</a>
          </div>
        </div>
        <button style={{ 
          backgroundColor: '#F2F2F5', 
          color: '#121417', 
          border: 'none', 
          borderRadius: '20px', 
          padding: '0 16px', 
          height: '40px', 
          fontSize: '14px', 
          fontWeight: 700, 
          cursor: 'pointer' 
        }}>
          Log in
        </button>
      </header>

      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '20px 160px', 
        flex: 1 
      }} className="main-content">
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          width: '100%', 
          maxWidth: '480px', 
          padding: '20px 0' 
        }}>
          <div className="login-form">
            <h1 className="welcome-title">Welcome back</h1>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              width: '100%', 
              marginBottom: '16px', 
              padding: '0 16px' 
            }}>
              <label style={{ 
                fontSize: '16px', 
                fontWeight: 500, 
                color: '#121417', 
                marginBottom: '8px' 
              }}>
                Username or email
              </label>
              <input 
                className="login-input"
                placeholder="Enter your username or email" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              width: '100%', 
              marginBottom: '16px', 
              padding: '0 16px' 
            }}>
              <label style={{ 
                fontSize: '16px', 
                fontWeight: 500, 
                color: '#121417', 
                marginBottom: '8px' 
              }}>
                Password
              </label>
              <input 
                className="login-input"
                type="password"
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a className="forgot-link" style={{ margin: '4px 0 12px 16px' }}>
              Forgot username or password?
            </a>

            <button 
              className="login-button"
              onClick={handleLogin}
              style={{ margin: '12px 16px' }}
            >
              Log in
            </button>

            <p className="signup-text">
              Don't have an account? <span className="signup-link">Sign up</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};



export default LoginSearch;