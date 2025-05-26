import React, { useState } from 'react';
import logoSvg from '../assets/figma/logo.svg';
import './FlyMeSearch.css';

const OutboundSearch: React.FC = () => {
  // 状态管理
  const [selectedFlight, setSelectedFlight] = useState<number | null>(null);

  // 模拟航班数据
  const flights = [
    {
      id: 1,
      airline: 'Skybound',
      departure: '10:00 AM',
      arrival: '1:00 PM',
      duration: '3h',
      stops: 'Non-stop',
      price: '$500'
    },
    {
      id: 2,
      airline: 'Skybound',
      departure: '2:00 PM',
      arrival: '5:00 PM',
      duration: '3h',
      stops: 'Non-stop',
      price: '$450'
    },
    {
      id: 3,
      airline: 'Skybound',
      departure: '6:00 PM',
      arrival: '9:00 PM',
      duration: '3h',
      stops: 'Non-stop',
      price: '$550'
    }
  ];

  const handleSelectFlight = (id: number) => {
    setSelectedFlight(id);
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
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Flights</span>
          <span>/</span>
          <span className="current">London to New York</span>
        </div>

        <h1 className="page-title">Select your outbound flight</h1>

        <table className="flight-list">
          <thead>
            <tr>
              <th>Airline</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Duration</th>
              <th>Stops</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id} className={selectedFlight === flight.id ? 'selected' : ''}>
                <td>
                  <div className="airline-info">
                    <div className="airline-logo"></div>
                    <span>{flight.airline}</span>
                  </div>
                </td>
                <td>{flight.departure}</td>
                <td>{flight.arrival}</td>
                <td>{flight.duration}</td>
                <td>{flight.stops}</td>
                <td>{flight.price}</td>
                <td>
                  <button 
                    className={`select-button ${selectedFlight === flight.id ? 'selected' : ''}`}
                    onClick={() => handleSelectFlight(flight.id)}
                  >
                    {selectedFlight === flight.id ? 'Selected' : 'Select'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default OutboundSearch;