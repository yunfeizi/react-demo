import React from 'react';
import styled from 'styled-components';
import LoginSearch from '../components/LoginSearch';

const LoginPage: React.FC = () => {
  return (
    <PageContainer>
      <LoginSearch />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFF;
`;

export default LoginPage;