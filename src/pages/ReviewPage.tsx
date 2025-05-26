import React from 'react';
import styled from 'styled-components';
import ReviewSearch from '../components/ReviewSearch';

const ReviewPage: React.FC = () => {
  return (
    <PageContainer>
      <ReviewSearch />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #FFFFFF;
`;

export default ReviewPage;