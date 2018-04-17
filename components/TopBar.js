import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const StyledTopBar = styled.div`
  justify-content: left;
  margin-left: -25px;
  background-color: #fff;

  img {
    float: left;
    padding: 3px;
    margin-left: 0px;
    height: 175px;
    @media (max-width: 1000px) {
      height: 165px;
    }
    @media (max-width: 750px) {
      height: 130px;
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


class TopBar extends React.Component {
  static goToAnchor(anchor) {
    const hashAnchor = anchor === '' ? '' : `/#${anchor}`;
    console.log('anchor: ' + hashAnchor);
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
          title={
            <div>
              <a
                onClick={() => {
                  TopBar.goToAnchor('');
                }}
                role="button"
                aria-hidden
                style={{ backgroundColor: "#eee" }}
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
          iconElementRight={<MainMenu />}
          style={{
            position: 'static',
            top: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        />
      </StyledTopBar>
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
