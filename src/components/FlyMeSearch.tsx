import React, { useState } from 'react';
import logoSvg from '../assets/figma/logo.svg';
import dropdownIconSvg from '../assets/figma/dropdown_icon.svg';
import passengerIconSvg from '../assets/figma/passenger_icon.svg';
import './FlyMeSearch.css';

const FlyMeSearch: React.FC = () => {
  const [tripType, setTripType] = useState('Round trip');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1 Adult');

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
        <div className="search-card">
          <div className="card-header">
            <h2 className="card-title">Book flights</h2>
            <p className="card-subtitle">Find the best fares for your next trip</p>
          </div>

          <form className="search-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Trip type</label>
                <div className="select-field">
                  <span className="select-text">{tripType}</span>
                  <img className="dropdown-icon" src={dropdownIconSvg} alt="Dropdown" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">From</label>
                <input 
                  className="input-field"
                  placeholder="From" 
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">To</label>
                <input 
                  className="input-field"
                  placeholder="To" 
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Depart</label>
                <input 
                  className="input-field"
                  placeholder="Depart" 
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Return</label>
                <input 
                  className="input-field"
                  placeholder="Return" 
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Passengers</label>
                <div className="select-field">
                  <span className="select-text">{passengers}</span>
                  <img className="dropdown-icon" src={passengerIconSvg} alt="Passengers" />
                </div>
              </div>
            </div>

            <div className="form-row">
              <button className="search-button">Search flights</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default FlyMeSearch;
