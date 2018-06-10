import React from 'react';
import styled from 'styled-components';
import { Launcher } from './chat/index';
import TopCarousel from './TopCarousel';
import ServicesThumbContainer from './ServicesThumbContainer';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import TestimonialsHomeStars from './TestimonialsHomeStars';
import Contact from './Contact';
import TextDivider from './TextDivider';
import PhotoGallery from './PhotoGallery';
import returnLexResponse from './util/LexBot';

const StyledMainPage = styled.section`
  position: relative;
  z-index: 0;

  .anchorDiv {
    position: relative;
    top: -55px;
  }
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
            text:
              'Welcome to Three Little Pigs Masonry. How can I help you?, You can say things like, I need my home refaced or I need my chimney repaired.',
          },
          type: 'text',
        },
      ],
      newMessagesCount: 0,
      isOpen: false,
    };
    this._onMessageWasSent = this._onMessageWasSent.bind(this);
    this._sendMessage = this._sendMessage.bind(this);
  }

  componentWillMount() {
    if (this.props.anchor !== undefined) {
      document.location = `${document.location.protocol}//${
        document.location.host
      }/#${this.props.anchor}`;
    }
  }

  componentDidMount() {
    // event listener for scroll event to change app bar dimension
    setTimeout(() => {
      this.setState({
        isOpen: true,
      });
    }, 30000);
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
      }, 1000);
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen
        ? this.state.newMessagesCount
        : this.state.newMessagesCount + 1;
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

  render() {
    const { isOpen, handleClick } = this.props;
    return (
      <div>
        <StyledMainPage>
          <TopCarousel openChat={handleClick} />
          <TextDivider quoteID={0} />
          <div id="services" className="anchorDiv" />
          <div>
            <ServicesThumbContainer />
          </div>
          <div id="about-us" className="anchorDiv" />
          <div>
            <AboutUs />
          </div>
          <TextDivider quoteID={1} />
          <div id="photos" className="anchorDiv" />
          <div>
            <PhotoGallery />
          </div>
          <div id="testimonials" className="anchorDiv" />
          <div>
            <Testimonials />
          </div>
          <div>
            <TestimonialsHomeStars />
          </div>
          <div id="service-area" className="anchorDiv" />
          <div>
            <Contact openChat={handleClick} />
          </div>
        </StyledMainPage>
        <Launcher
          style={{
            position: 'absolute',
          }}
          agentProfile={{
            teamName: 'Automated Estimator Pig',
            imageUrl:
              'https://s3.ca-central-1.amazonaws.com/3lpm/website/images/PigBot_small.png',
          }}
          onMessageWasSent={this._onMessageWasSent}
          messageList={this.state.messageList}
          handleClick={handleClick}
          isOpen={isOpen}
        />
      </div>
    );
  }
}

export default MainPage;
