import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import AboutUsFull from './AboutUsFull';

const StyledAboutUs = styled.section`
    background-color: #fff;
    min-height: 200px;
    padding-top: 0px;
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
    margin-top: -20px;
    flex-direction: row;
    img {
      height: 200px;
    }
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
          <img
            src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/logo-small.jpg"
            alt="Three Little Pigs Logo"
          />
        </MediaQuery>
        <StyledText>
          <p>
                        Family owned and operated, we have been proudly serving homeowners since 2004. Our masonry
                        history begins with working across Canada and the United States in commercial masonry building
                        schools, churches plus commercial and industrial projects.
          </p>
          <p>
                        In 2004, David Fritz founded Three Little Pigs Masonry, a full-service masonry company for the
                        home and business owner. David works closely with his experienced chief estimator, who comes
                        equipped with masonry experience from the UK and Europe. These two men have a combined 75 years
                        of experience in structural and architectural masonry. They work together to help home and
                        business owners with many permanent solutions to their problems where other competitors have
                        failed to succeed. Both are highly devoted to providing the very best in masonry restoration and
                        renovation to all their customers.
          </p>
        </StyledText>
      </StyledTextwithLogo>

      <AboutUsFull />
    </StyledAboutUs>
  );
};

export default AboutUs;
