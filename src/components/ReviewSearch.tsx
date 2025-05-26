import React from 'react';
import './FlyMeSearch.css';

const ReviewSearch: React.FC = () => {
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

  return (
    <div className="flyme-container">
      <header className="header">
        <div className="header-left">
          <div className="logo-container">
            <img className="logo" src="/path/to/logo.svg" alt="FlyMe Logo" />
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
          <span className="current">Review</span>
        </div>

        <h1 className="page-title">Review your flight selection</h1>

        <div className="flight-card">
          {flights.map((flight) => (
            <div key={flight.id} className="flight-info">
              <div className="airline-info">
                <div className="airline-logo"></div>
                <span>{flight.airline}</span>
              </div>
              <div className="flight-details">
                <span>{flight.departure} - {flight.arrival}</span>
                <span>{flight.duration}</span>
                <span>{flight.stops}</span>
                <span>{flight.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="price-summary">
          <span>Total Price:</span>
          <span>$1500</span>
        </div>

        <button className="confirm-button">Confirm Booking</button>
      </main>
    </div>
  );
};

export default ReviewSearch;