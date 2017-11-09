import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGalleryImage = styled.div`
  div {
    cursor: pointer;
  }
  img {
    width: 100%;
    border: 1px solid #444;    
  }
`;

const GalleryImage = (props) => {
  const launchFullsize = () => {
    props.openModal(props.photo);
  };

  return (
    <StyledGalleryImage>
      <div onClick={() => { launchFullsize(); }}>
        <img
          src={props.photo}
          alt=""
        />
      </div>
    </StyledGalleryImage>
  );
};

GalleryImage.propTypes = {
  photo: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default GalleryImage;
