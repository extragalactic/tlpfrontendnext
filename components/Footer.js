import React from 'react';
import styled from 'styled-components';

import SocialMediaIcons from './SocialMediaIcons';
import SiteMap from './SiteMap';

const StyledFooter = styled.section`
  font-size: 0.8em;
  color: #888;
  padding-bottom: 20px;

  p {
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: #c65757;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SiteMap />
      <br />
      <SocialMediaIcons />
      <p>14845 Yonge Street, Unit 6, 322 Aurora, ON. L4G 6H8<br />1-833-600-0505</p>
      <p></p>
      <p>Copyright &#169; 2018 Three Little Pigs Masonry</p>
    </StyledFooter>
  );
};

export default Footer;
