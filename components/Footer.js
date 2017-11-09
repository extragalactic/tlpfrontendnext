import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.section`
  font-size: 0.8em;
  color: #888;
  padding-bottom: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright &#169; 2017 Three Little Pigs Masonry</p>
    </StyledFooter>
  );
};

export default Footer;
