import React from 'react';
import styled from 'styled-components';
import ServiceData from './ServiceData';
import ServicesTabsNav from './ServicesTabsNav';

const StyledServicesGrid = styled.section`
  padding-top: 5px;
`;
const StyledNavContainer = styled.section`
  margin-top: -25px;
  padding: 0px 10px;
  overflow-x: hidden;
`;

class ServicesThumbContainer extends React.Component {
  render() {
    return (
      <StyledServicesGrid>
        <h2>Our Services</h2>
        <StyledNavContainer>
          <ServicesTabsNav bIsMainPage />
        </StyledNavContainer>
      </StyledServicesGrid>
    );
  }
}

export default ServicesThumbContainer;
