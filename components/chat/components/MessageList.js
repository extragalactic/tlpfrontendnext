import React, { Component } from 'react';
import Message from './Messages'

class MessageList extends Component {

  componentDidUpdate(prevProps, prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render () {
    return (
      <div className="sc-message-list" ref={el => this.scrollList = el}>
      <style jsx>{`
      .sc-message-list {
        height: 80%;
        overflow-y: auto;
        background-color: white;
        background-size: 100%;
        padding: 40px 0px;
      }
    `}</style>
        {this.props.messages.map((message, i) => {
          return <Message message={message} key={i} />
        })}
      </div>)
  }
}

export default MessageList