import React, { useState } from 'react';
import logoSvg from '../assets/figma/flyme_logo.svg';
import './FlyMeSearch.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log('Register attempt with:', { 
      email, 
      password, 
      firstName, 
      lastName, 
      country, 
      phone 
    });
    // 实际项目中这里会调用注册API
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
          <h1 className="welcome-title">Create your account</h1>
          
          <div className="form-group">
            <label className="form-label">Email address</label>
            <input 
              className="login-input"
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              className="login-input"
              type="password"
              placeholder="Create a password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">First name</label>
            <input 
              className="login-input"
              placeholder="Enter your first name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Last name</label>
            <input 
              className="login-input"
              placeholder="Enter your last name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Country/Region</label>
            <select 
              className="login-input"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="" disabled>Select your country/region</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="cn">China</option>
              <option value="jp">Japan</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Phone number</label>
            <input 
              className="login-input"
              placeholder="Enter your phone number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button 
            className="confirm-button"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </main>
    </div>
  );
};

export default Register;