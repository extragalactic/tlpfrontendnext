import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import Iframe from 'react-iframe';
import AriaModal from 'react-aria-modal';
import MediaQuery from 'react-responsive';

// Note: npm uninstall these if not using...
// import Dialog from 'material-ui/Dialog';
// import FullscreenDialog from 'material-ui-fullscreen-dialog';
// import Modal from 'react-modal';


const StyledGetQuote = styled.div`
`;
const StyledCorner = styled.div`
  position: absolute;
  top: 2%;
  right: 3%;

  > div {
    width: 120px;
  }
  img {
    width: 100%;
  }
`;

const modalIframe = {
  position: 'absolute',
  top: '1%',
  left: '1%',
  bottom: '2%',
  width: '98%',
  height: '95%',
};


// Note: this needs to be switched to the production URL
const CHAT_URL = 'http://52.15.129.218';

const GetQuote = (props) => {
  return (
    <StyledGetQuote>
      <AriaModal
        titleText="Three Little Pigs Quote Tool"
        /* initialFocus="#user-input" */
        verticalyCenter
        onExit={props.closeModal}
        underlayStyle={{ paddingTop: '0em', top: '0px', left: '0px' }}
      >
        <div>
          <div>
            <Iframe
              styles={modalIframe}
              url={CHAT_URL}
              width="350"
              height="400"
              frameborder="0"
            />
          </div>
          <StyledCorner>
            <div>
              <RaisedButton
                label="return"
                secondary
                onTouchTap={props.closeModal}
                style={{ width: '100%' }}
              />
              <div>
                <MediaQuery minDeviceWidth={800} orientation="landscape">
                  <img src="/images/test-pig.jpg" alt="" />
                </MediaQuery>
                <MediaQuery orientation="portrait">
                  <img src="/images/test-pig.jpg" alt="" />
                </MediaQuery>
              </div>
            </div>
          </StyledCorner>
        </div>
      </AriaModal>
    </StyledGetQuote>
  );
};

GetQuote.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default GetQuote;
