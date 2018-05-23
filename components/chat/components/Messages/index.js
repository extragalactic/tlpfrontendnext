import React, { Component } from "react";
import TextMessage from "./TextMessage";
import EmojiMessage from "./EmojiMessage";
import chatIconUrl from "../../../../static/chat-icon.svg";

class Message extends Component {
  _renderMessageOfType(type) {
    switch (type) {
      case "text":
        return <TextMessage {...this.props.message} />;
      case "emoji":
        return <EmojiMessage {...this.props.message} />;
    }
  }

  render() {
    let contentClassList = [
      "sc-message--content",
      this.props.message.author === "me" ? "sent" : "received"
    ];
    return (
      <div className="sc-message">
        <style jsx>{`
          .sc-message {
            width: 300px;
            margin: auto;
            padding-bottom: 10px;
            display: flex;
            z-index: 3;
          }

          .sc-message--content {
            width: 100%;
            display: flex;
          }

          .sc-message--content.sent {
            justify-content: flex-end;
          }

          .sc-message--content.sent .sc-message--avatar {
            display: none;
          }

          .sc-message--avatar {
            background-image: url(https://s3.ca-central-1.amazonaws.com/3lpm/website/images/PigBot-icon.png);
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            min-width: 40px;
            min-height: 40px;
            border-radius: 50%;
            align-self: center;
            margin-right: 15px;
          }

          .sc-message--text {
            padding: 17px 20px;
            border-radius: 6px;
            font-weight: 300;
            font-size: 14px;
            line-height: 1.4;
            -webkit-font-smoothing: subpixel-antialiased;
          }

          .sc-message--content.sent .sc-message--text {
            color: white;
            background-color: #1da1f2;
            max-width: calc(100% - 120px);
            word-wrap: break-word;
          }

          .sc-message--content.received .sc-message--text {
            color: #263238;
            background-color: #f4f7f9;
            margin-right: 40px;
          }

          .sc-message--emoji {
            font-size: 40px;
          }

          @media (max-width: 450px) {
            .sc-message {
              width: 80%;
            }
          }
        `}</style>
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar" />
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>
    );
  }
}

export default Message;
/*
    style={
              {
                // backgroundImage: `url('${chatIconUrl}')`
              }
            }
*/
