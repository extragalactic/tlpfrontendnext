import React from 'react';
import styled from 'styled-components';
import { Launcher } from './chat/index';
import TopCarousel from './TopCarousel';
import ServicesThumbContainer from './ServicesThumbContainer';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Contact from './Contact';
import TextDivider from './TextDivider';
import GetQuote from './GetQuote';
import PhotoGallery from './PhotoGallery';
import returnLexResponse from './util/LexBot';

const StyledMainPage = styled.section`
  position: relative;
  z-index: 0;
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      messageList: [
        {
          author: 'them',
          data: {
            text: 'Welcome to Three Little Pigs Masonry. How can I help you?, You can say things like, I need my home refaced or I need my chimney repaired.',
          },
          type: 'text',
        },
      ],
      newMessagesCount: 0,
      isOpen: false,
    };
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
    this._onMessageWasSent = this._onMessageWasSent.bind(this);
    this._sendMessage = this._sendMessage.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentWillMount() {
    if (this.props.anchor !== undefined) {
     document.location = `${document.location.protocol}//${document.location.host}/#${this.props.anchor}`;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isOpen: true,
      });
    }, 30000);
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
  
  render() {
    return (
      <div>
        <StyledMainPage>
          {this.state.modalIsOpen && <GetQuote closeModal={this.closeChat} />}
          <TopCarousel openChat={this.openChat} />
          <TextDivider quoteID={0} />
          <div id="services">
            <ServicesThumbContainer />
          </div>
          <div id="about-us">
            <AboutUs />
          </div>
          <TextDivider quoteID={1} />
          <div id="photos">
            <PhotoGallery />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="service-area">
            <Contact openChat={this.openChat} />
          </div>   
        </StyledMainPage>
        <Launcher
          style={{
            position: 'absolute',
          }}
          agentProfile={{
            teamName: 'Automated Estimator Pig',
            imageUrl: 'https://s3.ca-central-1.amazonaws.com/3lpm/website/images/PigBot_small.png',
          }}
          onMessageWasSent={this._onMessageWasSent}
          messageList={this.state.messageList}
          newMessagesCount={this.state.newMessagesCount}
          handleClick={this._handleClick}
          isOpen={this.state.isOpen}
        />   
      </div>
    );
  }
}

export default MainPage;
