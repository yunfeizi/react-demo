import React, { useState } from 'react';
import logoSvg from '../assets/figma/flyme_logo.svg';
import './FlyMeSearch.css';

const BookingDetail: React.FC = () => {
  // 模拟预订详情数据
  const bookingData = {
    reference: 'FLYME-1234',
    status: '已确认',
    route: '北京 (PEK) → 上海 (SHA)',
    date: '2023年10月15日',
    departureTime: '08:45',
    arrivalTime: '11:15',
    flightNumber: 'FM1234',
    aircraft: '波音 737-800',
    terminal: 'T2',
    gate: 'G12',
    seat: '12A',
    class: '经济舱',
    passengers: [
      {
        name: '张三',
        type: '成人',
        passport: 'E12345678',
        nationality: '中国',
        dob: '1985-05-15',
        seat: '12A',
        meal: '普通餐',
        baggage: '23kg'
      },
      {
        name: '李四',
        type: '成人',
        passport: 'E87654321',
        nationality: '中国',
        dob: '1990-08-20',
        seat: '12B',
        meal: '素食餐',
        baggage: '23kg'
      }
    ]
  };

  // 切换显示空状态的标志
  const [showEmptyState, setShowEmptyState] = useState(false);

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
          <div className="avatar-placeholder">JD</div>
        </div>
      </header>

      <main className="booking-content">
        <div className="booking-container">
          <h1 className="booking-title">预订详情</h1>
          
          {!showEmptyState ? (
            <div className="booking-detail-content">
              <div className="booking-detail-card">
                <div className="booking-detail-header">
                  <div className="booking-reference-large">
                    预订编号: {bookingData.reference}
                  </div>
                  <div className="booking-status upcoming">{bookingData.status}</div>
                </div>
                
                <div className="booking-detail-body">
                  <div className="booking-detail-section">
                    <h3 className="section-title">航班信息</h3>
                    <div className="flight-info-container">
                      <div className="flight-route">
                        <div className="flight-route-dot"></div>
                        <div className="flight-route-line"></div>
                        <div className="flight-route-dot"></div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">出发</div>
                        <div className="flight-info-value">{bookingData.departureTime}</div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">航线</div>
                        <div className="flight-info-value">{bookingData.route}</div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">到达</div>
                        <div className="flight-info-value">{bookingData.arrivalTime}</div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">日期</div>
                        <div className="flight-info-value">{bookingData.date}</div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">航班号</div>
                        <div className="flight-info-value">{bookingData.flightNumber}</div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">机型</div>
                        <div className="flight-info-value">{bookingData.aircraft}</div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">航站楼</div>
                        <div className="flight-info-value">{bookingData.terminal}</div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">登机口</div>
                        <div className="flight-info-value">{bookingData.gate}</div>
                      </div>
                      
                      <div className="flight-info-row">
                        <div className="flight-info-label">舱位</div>
                        <div className="flight-info-value">{bookingData.class}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="booking-detail-section">
                    <h3 className="section-title">乘客信息</h3>
                    <div className="passenger-info-container">
                      {bookingData.passengers.map((passenger, index) => (
                        <div className="passenger-card" key={index}>
                          <div className="passenger-name">{passenger.name} <span>({passenger.type})</span></div>
                          
                          <div className="passenger-details">
                            <div className="passenger-info-row">
                              <div className="passenger-info-label">护照号</div>
                              <div className="passenger-info-value">{passenger.passport}</div>
                            </div>
                            
                            <div className="passenger-info-row">
                              <div className="passenger-info-label">国籍</div>
                              <div className="passenger-info-value">{passenger.nationality}</div>
                            </div>
                            
                            <div className="passenger-info-row">
                              <div className="passenger-info-label">出生日期</div>
                              <div className="passenger-info-value">{passenger.dob}</div>
                            </div>
                            
                            <div className="passenger-info-row">
                              <div className="passenger-info-label">座位</div>
                              <div className="passenger-info-value">{passenger.seat}</div>
                            </div>
                            
                            <div className="passenger-info-row">
                              <div className="passenger-info-label">餐食</div>
                              <div className="passenger-info-value">{passenger.meal}</div>
                            </div>
                            
                            <div className="passenger-info-row">
                              <div className="passenger-info-label">行李</div>
                              <div className="passenger-info-value">{passenger.baggage}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="booking-actions">
                    <button className="action-button danger">取消预订</button>
                    <button className="action-button secondary">修改预订</button>
                    <button className="action-button primary">办理登机</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-bookings-message">
              <div className="empty-state-image"></div>
              <h3 className="empty-state-title">没有找到预订信息</h3>
              <p className="empty-state-description">
                您没有任何预订记录。立即开始规划您的下一次旅行。
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BookingDetail;