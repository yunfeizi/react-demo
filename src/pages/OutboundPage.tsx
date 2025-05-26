import React from 'react';
import styled from 'styled-components';
import OutboundSearch from '../components/OutboundSearch';

const OutboundPage: React.FC = () => {
  return (
    <PageContainer>
      <OutboundSearch />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFF;
`;

export default OutboundPage;