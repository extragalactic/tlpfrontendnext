import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import history from './history';

const StyledTopBar = styled.div`
  justify-content: left;
  margin-left: -20px;
  background-color: #841f27;
  background: linear-gradient(#841f27, #b9202c);

  img {
    float: left;
    padding: 3px;
    margin-left: -5px;
    height: 175px;
    @media (max-width: 1000px) {
      height: 165px;
    }
    @media (max-width: 750px) {
      height: 130px;
    }    
    @media (max-width: 650px) {
      height: 90px;
    }
    @media (max-width: 450px) {
      height: 80px;
    }    
    @media (max-width: 370px) {
      height: 50px;
    }    
  }
`;


class TopBar extends React.Component {
  static goToAnchor(anchor) {
    const hashAnchor = anchor === '' ? '' : `/#${anchor}`;
    document.location = `${document.location.protocol}//${document.location.host}${hashAnchor}`;
    return false;
  }

  render() {
    return (
      <StyledTopBar>
        <AppBar
          title={
            <div>
              <a
                onClick={() => { TopBar.goToAnchor(''); }}
                role="button"
                aria-hidden
                style={{ backgroundColor: '#841F27' }}
              >
                <img src="/images/3LPM-title-light.png" alt="Three Little Pigs Masonry" />
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
      iconStyle={{ fill: 'rgba(255, 255, 255, 0.87)' }}
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
