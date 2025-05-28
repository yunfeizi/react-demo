import React, { useState } from 'react';
import logoSvg from '../assets/figma/flyme_logo.svg';
import './FlyMeSearch.css';

const BookingList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  // 模拟预订数据
  const upcomingBookings = [
    {
      id: 'ABC1234',
      route: 'New York to London',
      date: 'July 15, 2024',
      status: 'Departure'
    }
  ];

  const pastBookings = [
    {
      id: 'XYZ9876',
      route: 'London to Paris',
      date: 'June 10, 2024',
      status: 'Completed'
    }
  ];

  return (
    <div className="flyme-container">
      <header className="header">
        <div className="header-left">
          <div className="logo-container">
            <img className="logo" src={logoSvg} alt="FlyMe Logo" />
          </div>
          <div className="nav-links">
            <a className="nav-link">Book</a>
            <a className="nav-link active">Manage</a>
          </div>
        </div>
        <div className="user-avatar">
          {/* 用户头像，可以使用实际的头像图片 */}
          <div className="avatar-placeholder"></div>
        </div>
      </header>

      <main className="booking-content">
        <div className="booking-container">
          <h1 className="booking-title">My Bookings</h1>
          
          <div className="booking-tabs">
            <div 
              className={`booking-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <h2 className="tab-title">Upcoming</h2>
            </div>
            <div 
              className={`booking-tab ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <h2 className="tab-title">Past</h2>
            </div>
          </div>

          <div className="booking-list">
            {activeTab === 'upcoming' ? (
              upcomingBookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-details">
                    <div className="booking-reference">
                      Booking Reference: {booking.id}
                    </div>
                    <div className="booking-route">
                      {booking.route}
                    </div>
                    <div className="booking-date">
                      {booking.status}: {booking.date}
                    </div>
                  </div>
                  <div className="booking-image upcoming"></div>
                </div>
              ))
            ) : (
              pastBookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-details">
                    <div className="booking-reference">
                      Booking Reference: {booking.id}
                    </div>
                    <div className="booking-route">
                      {booking.route}
                    </div>
                    <div className="booking-date">
                      {booking.status}: {booking.date}
                    </div>
                  </div>
                  <div className="booking-image past"></div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingList;