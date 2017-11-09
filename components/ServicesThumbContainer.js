import React from 'react';
import styled from 'styled-components';
import ServiceThumbnail from './ServiceThumbnail';
import ServiceData from './ServiceData';
import ServicesTabsNav from './ServicesTabsNav';


const StyledServicesGrid = styled.section`
  padding-top: 5px;
`;
const StyledNavContainer = styled.section`
  margin-top: -25px;
  padding: 0px 10px;
`;

const allServices = ServiceData.map((service) => {
  return (
    <div key={service.pageName}>
      <ServiceThumbnail service={service} />
    </div>
  );
});


class ServicesThumbContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  render() {
    return (
      <StyledServicesGrid>
        <h2>Our Services</h2>
        <StyledNavContainer>
          <ServicesTabsNav pageContent={allServices} />
        </StyledNavContainer>
      </StyledServicesGrid>
    );
  }
}

export default ServicesThumbContainer;
