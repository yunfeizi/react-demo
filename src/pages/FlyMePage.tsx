import React from 'react';
import styled from 'styled-components';
import FlyMeSearch from '../components/FlyMeSearch';

const FlyMePage: React.FC = () => {
  return (
    <PageContainer>
      <FlyMeSearch />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFF;
`;

export default FlyMePage;