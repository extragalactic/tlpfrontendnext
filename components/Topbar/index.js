import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import PhoneIcon from 'material-ui/svg-icons/communication/call';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DynamicHeader from '../DynamicHeader';
import TopBarButtons from './TopBarButtons';
import {
  StyledLogo,
  StyledLargeHeader,
  StyledLargeHeaderButtons,
  StyledSmallHeader,
  StyledSmallHeaderPhone,
  StyledSmallHeaderButtons,
  StyledSmallHeaderEstimate,
} from './style';

class TopBar extends React.Component {
  goToAnchor(anchor) {
    const hashAnchor = anchor === '' ? '' : `/#${anchor}`;
    document.location = `${document.location.protocol}//${
      document.location.host
    }${hashAnchor}`;
    window.scrollBy(0,25);
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
        this.goToAnchor(redirect);
      }
    }
  }

  render() {
    const { handleClick } = this.props;
    // Note: "Large" refers to the normal menu, "Small" is the thin & WIDE menu for big screens, "Tiny" is the actual smallest one for small screens
    return (
      <DynamicHeader hasEffect effectDuration={600} useHeadersDifference>
        <StyledLargeHeader>
          <div style={{ width: '40%' }}>
            <StyledLogo>
              <img
                src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/3LPM-title-dark.png"
                alt="Three Little Pigs Masonry"
              />
            </StyledLogo>
          </div>
          <StyledLargeHeaderButtons>
            <TopBarButtons onClick={this.goToAnchor} />
          </StyledLargeHeaderButtons>
        </StyledLargeHeader>

        <StyledSmallHeader>
          <StyledSmallHeaderPhone>
            <PhoneIcon style={{ color: '#EBEBEB', marginRight: '5px' }} />
            <h6>
              <a href="tel:+18336000505">Call Now @ 1-833-600-0505</a>
            </h6>
          </StyledSmallHeaderPhone>

          <StyledSmallHeaderButtons>
            <TopBarButtons
              onClick={this.goToAnchor}
              containerStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </StyledSmallHeaderButtons>

          <StyledSmallHeaderEstimate>
            <RaisedButton
              disableTouchRipple
              onClick={handleClick}
              label="Get an estimate!"
              primary
              buttonStyle={{
                fontFamily: 'sans-serif',
                paddingLeft: '5px',
                paddingRight: '5px',
              }}
              style={{
                fontFamily: 'sans-serif',
              }}
            />
          </StyledSmallHeaderEstimate>
        </StyledSmallHeader>

      </DynamicHeader>
    );
  }
}

const MainMenu = (props) => {
  return (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      iconStyle={{ fill: 'rgba(100, 100, 100, 0.87)' }}
    >
      <MenuItem
        primaryText="Services"
        onClick={() => {
          TopBar.goToAnchor('services');
        }}
      />
      <MenuItem
        primaryText="About Us"
        onClick={() => {
          TopBar.goToAnchor('about-us');
        }}
      />
      <MenuItem
        primaryText="Photo Gallery"
        onClick={() => {
          TopBar.goToAnchor('photos');
        }}
      />
      <MenuItem
        primaryText="Testimonials"
        onClick={() => {
          TopBar.goToAnchor('testimonials');
        }}
      />
      <MenuItem
        primaryText="Service Area"
        onClick={() => {
          TopBar.goToAnchor('service-area');
        }}
      />
    </IconMenu>
  );
};

MainMenu.muiName = 'IconMenu';

export default TopBar;

/*

      <StyledTopBar>
        <AppBar
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
                  // src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/3LPM-title-dark.png"
                  src="http://localhost:8080/static/images/3LPM-title-dark.png"
                  alt="Three Little Pigs Masonry"
                />
              </a>
            </div>
          }
          showMenuIconButton={false}
          style={{
            position: 'static',
          }}
        >
          <FlatButton
            label="Services"
            onClick={() => {
              TopBar.goToAnchor('services');
            }}
          />
          <FlatButton
            label="About Us"
            onClick={() => {
              TopBar.goToAnchor('about-us');
            }}
          />
          <FlatButton
            label="Photo Gallery"
            onClick={() => {
              TopBar.goToAnchor('photos');
            }}
          />
          <FlatButton
            label="Testimonials"
            onClick={() => {
              TopBar.goToAnchor('testimonials');
            }}
          />
          <FlatButton
            label="Service Area"
            onClick={() => {
              TopBar.goToAnchor('service-area');
            }}
          />
        </AppBar>
      </StyledTopBar>

*/
