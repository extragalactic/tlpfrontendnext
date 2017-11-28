import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import StackGrid from 'react-stack-grid';
import MediaQuery from 'react-responsive';
import fetch from 'isomorphic-fetch';
import GalleryImage from './GalleryImage';
import GalleryDetail from './GalleryDetail';


const StyledGallery = styled.section`
  width: 100%;
  padding-top: 5px;
`;

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      numberToShow: 4,
      modalIsOpen: false,
      selectedPhoto: '',
      active: 0,
    };
    this.numberTotal = 0;
    this.numPhotosModifier = 0;
    this.numPhotosByScreenSize = { XS: 0, S: 3, M: 6, L: 10 }; // num default based on screen size
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getDefaultNum = this.getDefaultNum.bind(this);
  }

  componentDidMount() {
    fetch('https://tlpm.ca/webimages')
      .then((response) => {
        return response.json();
      })
      .then((photos) => {
        this.setState({
          photos: photos[0].url,
        });

        this.numberTotal = photos[0].url.length;
      });
  }

  getPhotos(baseNum) {
    // the default # of items to show is dependent on the MediaQuery size
    return this.state.photos.map((photo, i) => {
      let val = <GalleryImage key={i} photo={photo} openModal={this.openModal} />;
      if (i >= this.state.numberToShow + baseNum) {
        val = null;
      }
      return val;
    });
  }

  getDefaultNum(screenSize) {
    // get default num phots based on screen size
    // (the default number of pics is still not fully working when resizing the browser... is likely not noticeable though)
    this.numPhotosModifier = this.numPhotosByScreenSize[screenSize];
    return this.numPhotosModifier + 5;
  }

  openModal(photo) {
    this.setState({
      modalIsOpen: true,
      selectedPhoto: photo,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    var masonryOptions = {
      transitionDuration: 0,
    }

    return (
      this.state.photos.length > 0 &&
      <StyledGallery>
        {this.state.modalIsOpen && (
          <GalleryDetail
            selectedPhoto={this.state.selectedPhoto}
            photos={this.state.photos}
            closeModal={this.closeModal}
          />
        )}
        <h2>Photo Gallery</h2>
        <MediaQuery minWidth={1} maxWidth={449}>
          <StackGrid columnWidth={100} enableSSR monitorImagesLoaded>
            {this.getPhotos(this.getDefaultNum('XS'))}
          </StackGrid>
        </MediaQuery>
        <MediaQuery minWidth={450} maxWidth={699}>
          <StackGrid columnWidth={150} enableSSR monitorImagesLoaded>
            {this.getPhotos(this.getDefaultNum('S'))}
          </StackGrid>
        </MediaQuery>
        <MediaQuery minWidth={700} maxWidth={999}>
          <StackGrid columnWidth={200} enableSSR monitorImagesLoaded>
            {this.getPhotos(this.getDefaultNum('M'))}
        </StackGrid>
        </MediaQuery>
        <MediaQuery minWidth={1000}>
          <StackGrid columnWidth={250} enableSSR monitorImagesLoaded>
            {this.getPhotos(this.getDefaultNum('L'))}
          </StackGrid>
        </MediaQuery>
        {this.state.numberToShow < this.numberTotal && (
          <div>
            <h3>. . .</h3>
            <FlatButton
              labelStyle={{ fontSize: '1.0em', padding: '5px 10px' }}
              label="See more photos"
              primary
              onClick={() => {
                this.setState({ numberToShow: this.state.numberToShow + 5 });
              }}
            />
          </div>
        )}
      </StyledGallery>
    );
  }
}

export default PhotoGallery;
