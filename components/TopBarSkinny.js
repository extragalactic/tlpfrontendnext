import React, { Component } from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const StyledTopBar = styled.div`
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;

  justify-content: left;
  margin-left: -16px;
  background-color: #fff;
  img {
    float: left;
    padding: 3px;
    margin-left: 0px;
    height: 65px;
    @media (max-width: 1000px) {
      height: 50px;
    }
    @media (max-width: 750px) {
      height: 30px;
    }
    @media (max-width: 650px) {
      height: 85px;
    }
    @media (max-width: 450px) {
      height: 70px;
    }
    @media (max-width: 370px) {
      height: 45px;
    }
  }
`;
export default class TopBar extends Component {
  static goToAnchor(anchor) {
    const hashAnchor = anchor === '' ? '' : `/#${anchor}`;
    console.log(`anchor: ${hashAnchor}`);
    document.location = `${document.location.protocol}//${
      document.location.host
    }${hashAnchor}`;
    return false;
  }

  componentDidMount() {
    // using this component to handle old site redirects to index page anchors (prop passed in from index.js)
    if (this.props.redirect !== undefined && this.props.redirect !== '') {
      let redirect;
      switch (this.props.redirect) {
        case 'our-commitment':
        case 'our-history':
          redirect = 'about-us';
          break;
        case 'testimonials':
          redirect = 'testimonials';
          break;
        case 'contact-us':
          redirect = 'service-area';
          break;
        default:
          redirect = '';
      }
      // Note: the redirect is currently not fully working since the photo gallery does not compute its vertical size until later, which pushes down the page.
      if (redirect !== '') {
        TopBar.goToAnchor(redirect);
      }
    }
  }

  render() {
    return (
      <StyledTopBar>
        <AppBar
          zDepth={-1}
          title={
            <div>
              <a
                onClick={() => {
                  TopBar.goToAnchor('');
                }}
                role="button"
                aria-hidden
                style={{ backgroundColor: '#eee' }}
              >
                <img
                  src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/3LPM-title-dark.png"
                  // src="http://localhost:8080/static/images/3LPM-title-dark.png"
                  alt="Three Little Pigs Masonry"
                />
              </a>
            </div>
          }
          showMenuIconButton={false}
          style={{
            position: 'fixed',
          }}
        >
          <div>
            <FlatButton
              label="Services"
              containerElement="label"
              onClick={() => {
                TopBar.goToAnchor('services');
              }}
            />
            <FlatButton
              label="About Us"
              containerElement="label"
              onClick={() => {
                TopBar.goToAnchor('about-us');
              }}
            />
            <FlatButton
              label="Photo Gallery"
              containerElement="label"
              onClick={() => {
                TopBar.goToAnchor('photos');
              }}
            />
            <FlatButton
              label="Testimonials"
              containerElement="label"
              onClick={() => {
                TopBar.goToAnchor('testimonials');
              }}
            />
            <FlatButton
              label="Service Area"
              containerElement="label"
              onClick={() => {
                TopBar.goToAnchor('service-area');
              }}
            />
          </div>
        </AppBar>
      </StyledTopBar>
    );
  }
}
