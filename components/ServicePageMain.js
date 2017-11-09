import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ServiceData from './ServiceData';
import ServicePage from './ServicePage';
import ServicesTabsNav from './ServicesTabsNav';
import { Launcher } from './chat/index';
import returnLexResponse from './util/LexBot';
import ScrollToTopOnMount from './util/ScrollToTopOnMount';


const StyledServicePage = styled.section`
  padding: 5px;
  padding-bottom: 0px;
  margin-top: 0px;
  position: relative;
  z-index: 0;

  h1 {
    text-align: left;
  }
  p {
    font-size: 1em;
    text-align: left;
  }
`;
const StyledNavContainer = styled.div`
  margin-top: -30px;
`;

class ServicePageMain extends React.Component {
  constructor(props) {
    super(props);

    if (props.redirect === '') {  
      if (props.pageName !== undefined) { // (this may no longer get used...)
        this.serviceType = props.pageName;
      } else {
        // goto service type page (default to the 'refacing' page)
        this.serviceType = props.match.params.type !== undefined ? props.match.params.type : 'refacing';
      }
    } else {
      // url mapping from old site
      this.serviceType = props.redirect;
    }

    // find the page's tab index (associated with the array order in ServiceData) based on the page name/type indicated in the URL
    let selectedTab = ServiceData.indexOf(
      ServiceData.find((obj) => {
        return obj.pageName === this.serviceType;
      }),
    );
    // if page name/type is not found, default to the first one
    if (selectedTab === -1) {
      selectedTab = 0;
    }

    this.state = {
      modalIsOpen: false,
      selectedTab,
      messageList: [
        {
          author: 'them',
          data: {
            text: 'Welcome to Three Little Pigs Masonry. How can I help you?',
          },
          type: 'text',
        },
      ],
      newMessagesCount: 0,
      isOpen: false,
    };
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.allServices = this.allServices.bind(this);
    this._onMessageWasSent = this._onMessageWasSent.bind(this);
    this._sendMessage = this._sendMessage.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  openChat() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  closeChat() {
    this.setState({
      modalIsOpen: false,
    });
  }
  _onMessageWasSent(message) {
    returnLexResponse(message.data.text).then((res) => {
      const response = {
        author: 'them',
        data: {
          text: res,
        },
        type: 'text',
      };

      this.setState({
        messageList: [...this.state.messageList, message],
      });
      setTimeout(() => {
        this.setState({
          messageList: [...this.state.messageList, response],
        });
      }, 2000);
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount,
        messageList: [
          ...this.state.messageList,
          {
            author: 'them',
            type: 'text',
            data: { text },
          },
        ],
      });
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0,
    });
  }

  allServices() {
    return ServiceData.map((service) => {
      return (
        <div key={service.pageName} style={{ overflowY: 'auto' }}>
          <ServicePage serviceType={service.pageName} openChat={this.openChat} />
        </div>
      );
    });
  }

  handleChange(value) {
    this.setState({
      selectedTab: value,
    });
  }

  render() {
    return (
      <StyledServicePage>
        <ScrollToTopOnMount /> { /* the only purpose of this component is to reset the page position to the top */ }
        <StyledNavContainer>
          <ServicesTabsNav pageContent={this.allServices()} startIndex={this.state.selectedTab} variableHeight />
        </StyledNavContainer>
        <Launcher
          style={{
            position: 'absolute',
          }}
          agentProfile={{
            teamName: 'Automated Estimator Pig',
            imageUrl: '/images/PigBot_small.png',
          }}
          onMessageWasSent={this._onMessageWasSent}
          messageList={this.state.messageList}
          newMessagesCount={this.state.newMessagesCount}
          handleClick={this._handleClick}
          isOpen={this.state.isOpen}
        />
      </StyledServicePage>
    );
  }
}

ServicePageMain.propTypes = {
  match: PropTypes.object,
  redirect: PropTypes.string,
  pageName: PropTypes.string,
};
ServicePageMain.defaultProps = {
  match: null,
  redirect: '',
};

export default ServicePageMain;
