import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const StyledSocialIcons = styled.div`
  width: 100%;
  text-align: center;

  p {
    text-transform: uppercase;
    color: #777;
    font-size: 0.9em;
  }
  button {
    cursor: pointer;
    margin: 5px;
    height: 55px;
    width: 55px;
  }
`;

const SocialMediaIcons = (props) => {
  return (
    <StyledSocialIcons>
      <p>You can also check us out on social media!</p>
      <button
        onClick={() => {
          window.open(
            'https://www.facebook.com/Three-Little-Pigs-Masonry-301425343309473',
            '_blank',
          );
        }}
      >
        <i
          className="fa fa-facebook-square fa-3x"
          aria-hidden="true"
          style={{ color: '#3b5999' }}
        />
      </button>
      <button
        onClick={() => {
          window.open('https://twitter.com/3PigsMasonry', '_blank');
        }}
      >
        <i
          className="fa fa-twitter fa-3x"
          aria-hidden="true"
          style={{ color: '#55acee' }}
        />
      </button>
      <button
        onClick={() => {
          window.open(
            'https://www.instagram.com/threelittlepigsmasonry/',
            '_blank',
          );
        }}
      >
        <i
          className="fa fa-instagram fa-3x"
          aria-hidden="true"
          style={{ color: '#55acee' }}
        />
      </button>
    </StyledSocialIcons>
  );
};

export default SocialMediaIcons;
