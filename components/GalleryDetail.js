import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import AriaModal from 'react-aria-modal';
import SlideShow from 'react-slick';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/cancel';
import Ionicon from 'react-ionicons';


const styles = {
  dialogRoot: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: 0,
  },
  dialogContent: {
    display: 'flex',
    position: 'relative',
    width: '98vw',
    maxWidth: '600px',
  },
  dialogBody: {
    padding: '5px',
    overflow: 'scroll',
  },
};

const StyledGalleryDetail = styled.div`
  margin: 5px 5px;

  img {
    width: 100%;
    border: 1px solid #000;
  }
`;
const StyledGetQuote = styled.div`
  position: 'absolute';
  zIndex: 9999;
`;
const SlickSlide = styled.img`
  width: 97%;
`;
const StyledSlideshow = styled(SlideShow)`
  cursor: pointer;
  margin: 20px 10px;
`;

const modalHeader = {
  position: 'absolute',
  top: '2%',
  right: '3%',
};

const gallerySettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  autoplay: false,
  lazyLoad: true,
  swipe: true,
  swipeToSlide: true,
};


const getSlides = (photos) => {
  return photos.map((photo, i) => {
    const imgSrc = `${photo}`;
    return <div key={i}><SlickSlide src={imgSrc} alt="" /></div>;
  });
};

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#841F27' }}
      onClick={onClick}
    />
    // <ArrowIcon color={'#841F27'} style={{ width: 15, height: 15, float: 'left' }} />
  );
};
Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const GalleryDetail = (props) => {
  return (
    <StyledGetQuote>
      <AriaModal
        titleText="Photos"
        verticalyCenter
        onExit={props.closeModal}
        underlayStyle={{ paddingTop: '0em', top: '0px', left: '0px' }}
      >
        <div>
          <div>
            <StyledGalleryDetail
              /* onClick={() => { props.closeModal(); }} */
            >
              <img
                src={props.selectedPhoto}
                alt=""
              />
            </StyledGalleryDetail>
          </div>

          <div style={modalHeader}>
            <button onClick={() => { props.closeModal(); }} style={{ cursor: 'pointer', width: '55px', height: '55px' }} >
              <Ionicon icon="ion-close-circled" fontSize="35px" color="#c00" />
            </button>
          </div>
        </div>
      </AriaModal>
    </StyledGetQuote>
  );
};
/*
            <RaisedButton
              label="return"
              secondary
              onTouchTap={props.closeModal}
            />
*/

/*
          <StyledSlideshow {...gallerySettings}>
            {getSlides(props.photos)}
          </StyledSlideshow>
*/

/*
        <div>
          <StyledGalleryDetail
            onClick={() => { props.closeModal(); }}
          >
            <img
              src={props.selectedPhoto}
              alt=""
            />
          </StyledGalleryDetail>
        </div>
          
*/

GalleryDetail.propTypes = {
  selectedPhoto: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default GalleryDetail;
