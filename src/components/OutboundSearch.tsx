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
      <header className="header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 40px',
        borderBottom: '1px solid #E5E8EB'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoSvg} alt="FlyMe Logo" style={{ width: '14px', height: '14px' }} />
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a style={{ color: '#121417', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none' }}>Book</a>
            <a style={{ color: '#121417', fontSize: '14px', fontWeight: 'normal', cursor: 'pointer', textDecoration: 'none' }}>Manage</a>
          </div>
        </div>
        <button style={{
          backgroundColor: '#FFFFFF',
          color: '#121417',
          border: '1px solid #E5E8EB',
          borderRadius: '8px',
          padding: '8px 16px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}>Log in</button>
      </header>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
        flex: '1'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', fontSize: '14px' }}>
          <span style={{ color: '#637887' }}>Home</span>
          <span style={{ color: '#637887', margin: '0 8px' }}>/</span>
          <span style={{ color: '#637887' }}>Flights</span>
          <span style={{ color: '#637887', margin: '0 8px' }}>/</span>
          <span style={{ color: '#121417', fontWeight: '500' }}>London to New York</span>
        </div>

        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '32px', color: '#121417' }}>Select your outbound flight</h1>

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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      width: '24px', 
                      height: '24px', 
                      backgroundColor: '#F0F2F5', 
                      borderRadius: '50%', 
                      marginRight: '8px' 
                    }}></div>
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

// 使用CSS类名代替styled-components

export default OutboundSearch;