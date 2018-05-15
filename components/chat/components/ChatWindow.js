import React, { Component } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  }

  onMessageReceived(message) {
    this.setState({ messages: [...this.state.messages, message] });
  }

  render() {
    const messageList = this.props.messageList || [];
    const classList = [
      'sc-chat-window',
      this.props.isOpen ? 'opened' : 'closed',
    ];
    return (
      <div className={classList.join(' ')}>
        <style jsx>
          {`
            .sc-chat-window {
              z-index: 9999;
              width: 370px;
              height: calc(100% - 120px);
              max-height: 520px;
              position: fixed;
              right: 25px;
              bottom: 100px;
              box-sizing: border-box;
              box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.3);
              background: white;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              transition: 0.3s ease-in-out;
              border-radius: 10px;
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              overflow: visible;
            }

            .sc-chat-window.closed {
              opacity: 0;
              visibility: hidden;
              bottom: 90px;
            }

            .sc-message-list {
              height: 80%;
              overflow-y: auto;
              background-color: white;
              background-size: 100%;
              padding: 40px 0px;
            }

            .sc-message--me {
              text-align: right;
            }
            .sc-message--them {
              text-align: left;
            }

            @media (max-width: 450px) {
              .sc-chat-window {
                z-index: 9999;
                width: 100%;
                height: 100%;
                max-height: 100%;
                right: 0px;
                bottom: 0px;
                border-radius: 0px;
              }
              .sc-chat-window {
                transition: 0.1s ease-in-out;
              }
              .sc-chat-window.closed {
                bottom: 0px;
              }
            }
          `}
        </style>
        <Header
          teamName={this.props.agentProfile.teamName}
          imageUrl={this.props.agentProfile.imageUrl}
          onClose={this.props.onClose}
        />
        <MessageList
          messages={messageList}
          imageUrl={this.props.agentProfile.imageUrl}
        />
        <UserInput onSubmit={this.onUserInputSubmit.bind(this)} />
      </div>
    );
  }
}

export default ChatWindow;
