import React from 'react';
import logoSvg from '../assets/figma/logo.svg';
import './FlyMeSearch.css';

const ReviewSearch: React.FC = () => {
  // 模拟已选择的航班数据
  const selectedOutboundFlight = {
    id: 1,
    airline: 'Skybound',
    departure: '10:00 AM',
    arrival: '1:00 PM',
    duration: '3h',
    stops: 'Non-stop',
    price: '$500',
    from: 'London',
    to: 'New York',
    date: 'June 15, 2023'
  };

  const selectedReturnFlight = {
    id: 2,
    airline: 'Skybound',
    departure: '2:00 PM',
    arrival: '5:00 PM',
    duration: '3h',
    stops: 'Non-stop',
    price: '$450',
    from: 'New York',
    to: 'London',
    date: 'June 22, 2023'
  };

  // 计算总价
  const totalPrice = '$950';

  // 确认按钮点击处理
  const handleConfirm = () => {
    alert('Booking confirmed!');
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
          <span style={{ color: '#637887' }}>London to New York</span>
          <span style={{ color: '#637887', margin: '0 8px' }}>/</span>
          <span style={{ color: '#121417', fontWeight: '500' }}>Review</span>
        </div>

        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '32px', color: '#121417' }}>Review your trip</h1>

        <div className="review-container" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '800px',
          width: '100%'
        }}>
          {/* 去程航班信息 */}
          <div className="flight-card">
            <div className="flight-card-header">
              <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#121417', margin: 0 }}>Outbound Flight</h2>
              <p style={{ fontSize: '14px', color: '#637887', margin: '4px 0 0 0' }}>
                {selectedOutboundFlight.from} to {selectedOutboundFlight.to} - {selectedOutboundFlight.date}
              </p>
            </div>
            <div className="flight-card-body">
              <div className="flight-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#F0F2F5', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}></div>
                  <div>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: '#121417', margin: 0 }}>{selectedOutboundFlight.airline}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '16px', fontWeight: '500', color: '#121417', margin: 0 }}>{selectedOutboundFlight.price}</p>
                </div>
              </div>
              <div className="flight-route">
                <div>
                  <p style={{ fontSize: '18px', fontWeight: '600', color: '#121417', margin: 0 }}>{selectedOutboundFlight.departure}</p>
                  <p style={{ fontSize: '14px', color: '#637887', margin: '4px 0 0 0' }}>{selectedOutboundFlight.from}</p>
                </div>
                <div style={{ textAlign: 'center', flex: '1', padding: '0 24px' }}>
                  <p style={{ fontSize: '14px', color: '#637887', margin: '0 0 4px 0' }}>{selectedOutboundFlight.duration}</p>
                  <div className="flight-route-line">
                    <div className="flight-route-dot" style={{ left: '0' }}></div>
                    <div className="flight-route-dot" style={{ right: '0' }}></div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#637887', margin: '4px 0 0 0' }}>{selectedOutboundFlight.stops}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '18px', fontWeight: '600', color: '#121417', margin: 0 }}>{selectedOutboundFlight.arrival}</p>
                  <p style={{ fontSize: '14px', color: '#637887', margin: '4px 0 0 0' }}>{selectedOutboundFlight.to}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 回程航班信息 */}
          <div className="flight-card">
            <div className="flight-card-header">
              <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#121417', margin: 0 }}>Return Flight</h2>
              <p style={{ fontSize: '14px', color: '#637887', margin: '4px 0 0 0' }}>
                {selectedReturnFlight.from} to {selectedReturnFlight.to} - {selectedReturnFlight.date}
              </p>
            </div>
            <div className="flight-card-body">
              <div className="flight-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: '#F0F2F5', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}></div>
                  <div>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: '#121417', margin: 0 }}>{selectedReturnFlight.airline}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '16px', fontWeight: '500', color: '#121417', margin: 0 }}>{selectedReturnFlight.price}</p>
                </div>
              </div>
              <div className="flight-route">
                <div>
                  <p style={{ fontSize: '18px', fontWeight: '600', color: '#121417', margin: 0 }}>{selectedReturnFlight.departure}</p>
                  <p style={{ fontSize: '14px', color: '#637887', margin: '4px 0 0 0' }}>{selectedReturnFlight.from}</p>
                </div>
                <div style={{ textAlign: 'center', flex: '1', padding: '0 24px' }}>
                  <p style={{ fontSize: '14px', color: '#637887', margin: '0 0 4px 0' }}>{selectedReturnFlight.duration}</p>
                  <div className="flight-route-line">
                    <div className="flight-route-dot" style={{ left: '0' }}></div>
                    <div className="flight-route-dot" style={{ right: '0' }}></div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#637887', margin: '4px 0 0 0' }}>{selectedReturnFlight.stops}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '18px', fontWeight: '600', color: '#121417', margin: 0 }}>{selectedReturnFlight.arrival}</p>
                  <p style={{ fontSize: '14px', color: '#637887', margin: '4px 0 0 0' }}>{selectedReturnFlight.to}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 价格摘要 */}
          <div className="price-summary">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#121417', margin: 0 }}>Price Summary</h2>
              <p style={{ fontSize: '18px', fontWeight: '600', color: '#121417', margin: 0 }}>{totalPrice}</p>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '16px',
              fontSize: '14px',
              color: '#637887'
            }}>
              <p style={{ margin: 0 }}>Outbound Flight</p>
              <p style={{ margin: 0 }}>{selectedOutboundFlight.price}</p>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '8px',
              fontSize: '14px',
              color: '#637887'
            }}>
              <p style={{ margin: 0 }}>Return Flight</p>
              <p style={{ margin: 0 }}>{selectedReturnFlight.price}</p>
            </div>
          </div>

          {/* 确认按钮 */}
          <button 
            className="confirm-button"
            onClick={handleConfirm}
          >
            Confirm Booking
          </button>
        </div>
      </main>
    </div>
  );
};

export default ReviewSearch;