import React from 'react';
import styled from 'styled-components';
import './App.css';
import ServiceThumbnail from './ServiceThumbnail';
import ServiceData from './ServiceData';

const StyledServicesGrid = styled.section`
  padding-top: 0px;
`;
const StyledGridContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -20px;
`;

const allServices = ServiceData.map((service, i) => {
  return (
    <ServiceThumbnail service={service} key={i} />
  );
});

const ServicesGrid = () => {
  return (
    <StyledServicesGrid>
      <h2>Our Services</h2>
      <StyledGridContainer>
        {allServices}
      </StyledGridContainer>
    </StyledServicesGrid>
  );
};

export default ServicesGrid;
