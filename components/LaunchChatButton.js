import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import IconButton from 'material-ui/IconButton';


const StyledCornerButton = styled.div`
  position: fixed;
  bottom: 1%;
  right 3%;
  z-index: 999;
`;

const LaunchChatButton = (props) => {
  return (
    <StyledCornerButton>
      <IconButton
        iconStyle={{ width: 50, height: 50 }}
        style={{ padding: '3px' }}
        onClick={() => { props.openChat(); }}
      >
        <ChatIcon color={'#b00'} style={{ width: '100%', height: '100%' }} />
      </IconButton>
    </StyledCornerButton>
  );
};

LaunchChatButton.propTypes = {
  openChat: PropTypes.func.isRequired,
};

export default LaunchChatButton;
