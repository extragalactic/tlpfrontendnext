import React from 'react';
import styled from 'styled-components';
import AboutUsFull from './AboutUsFull';
import MediaQuery from 'react-responsive';

const StyledAboutUs = styled.section`
  background-color: #fff;
  min-height: 200px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 1em;
    text-align: left;
    text-justify: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const StyledTextwithLogo = styled.section`
  display: flex;
  flex-direction: row;
`;
const StyledText = styled.section`
  display: flex;
  flex-direction: column;
`;

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h2>Our Commitment</h2>
      <StyledTextwithLogo>
        <MediaQuery minWidth={800}>
          <img src="/images/logo-small.jpg" alt="Three Little Pigs Logo" />
        </MediaQuery>
        <StyledText>
          <p>
            Family owned and operated, we have been proudly serving homeowners since 2004. Our masonry history begins
            with working across Canada and the United States in commercial masonry building schools, churches plus
            commercial and industrial projects.
          </p>
          <p>
            In 2004, our estimator and partner launched Three Little Pigs Masonry, a full service masonry company for
            the homeowner. His many years of experience allow him to help homeowners with many permanent solutions to
            their problems where other competitors have failed to succeed.
          </p>
        </StyledText>
      </StyledTextwithLogo>

      <AboutUsFull />
    </StyledAboutUs>
  );
};

export default AboutUs;
