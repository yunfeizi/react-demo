import React, { useState } from 'react';
import styled from 'styled-components';
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
    <SearchContainer className="flyme-container">
      <Header className="header">
        <HeaderLeft>
          <LogoContainer>
            <Logo src={logoSvg} alt="FlyMe Logo" />
          </LogoContainer>
          <NavLinks>
            <NavLink active>Book</NavLink>
            <NavLink>Manage</NavLink>
          </NavLinks>
        </HeaderLeft>
        <LoginButton>Log in</LoginButton>
      </Header>

      <MainContent>
        <SearchCard>
          <CardHeader>
            <CardTitle>Book flights</CardTitle>
            <CardSubtitle>Find the best fares for your next trip</CardSubtitle>
          </CardHeader>

          <SearchForm className="search-form">
            <FormRow>
              <FormGroup>
                <FormLabel>Trip type</FormLabel>
                <SelectField className="select-field">
                  <SelectText>{tripType}</SelectText>
                  <DropdownIcon src={dropdownIconSvg} alt="Dropdown" />
                </SelectField>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel>From</FormLabel>
                <InputField 
                  className="input-field"
                  placeholder="From" 
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>To</FormLabel>
                <InputField 
                  className="input-field"
                  placeholder="To" 
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel>Depart</FormLabel>
                <InputField 
                  className="input-field"
                  placeholder="Depart" 
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Return</FormLabel>
                <InputField 
                  className="input-field"
                  placeholder="Return" 
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel>Passengers</FormLabel>
                <SelectField className="select-field">
                  <SelectText>{passengers}</SelectText>
                  <DropdownIcon src={passengerIconSvg} alt="Passengers" />
                </SelectField>
              </FormGroup>
            </FormRow>

            <FormRow>
              <SearchButton className="search-button">Search flights</SearchButton>
            </FormRow>
          </SearchForm>
        </SearchCard>
      </MainContent>
    </SearchContainer>
  );
};

// 样式定义
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFFFFF;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  border-bottom: 1px solid #E5E8EB;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 14px;
  height: 14px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const NavLink = styled.a<{ active?: boolean }>`
  color: #121417;
  font-size: 14px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  cursor: pointer;
  text-decoration: none;
`;

const LoginButton = styled.button`
  background-color: #FFFFFF;
  color: #121417;
  border: 1px solid #E5E8EB;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #F9FAFB;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SearchCard = styled.div`
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 800px;
  overflow: hidden;
`;

const CardHeader = styled.div`
  background-color: #F9FAFB;
  padding: 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #121417;
  margin: 0 0 8px 0;
`;

const CardSubtitle = styled.p`
  font-size: 14px;
  color: #121417;
  margin: 0;
`;

const SearchForm = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #121417;
`;

const InputField = styled.input`
  padding: 12px 16px;
  border: 1px solid #E5E8EB;
  border-radius: 8px;
  font-size: 14px;
  color: #637887;
  width: 100%;
  box-sizing: border-box;
  
  &::placeholder {
    color: #637887;
  }
  
  &:focus {
    outline: none;
    border-color: #0066FF;
  }
`;

const SelectField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #E5E8EB;
  border-radius: 8px;
  cursor: pointer;
`;

const SelectText = styled.span`
  font-size: 14px;
  color: #637887;
`;

const DropdownIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchButton = styled.button`
  background-color: #0066FF;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    background-color: #0052CC;
  }
`;

export default FlyMeSearch;
