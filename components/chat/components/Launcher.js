import PropTypes from "prop-types";
import React, { Component } from "react";
import ChatWindow from "./ChatWindow";
//import launcherIcon from '../../../static/chat-icon.svg';

const launcherIcon = () => (
  <svg>
  <circle cx={50} cy={50} r={10} fill="red" />
</svg>
)


class Launcher extends Component {
  constructor() {
    super();
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    const isOpen = this.props.hasOwnProperty("isOpen")
      ? this.props.isOpen
      : this.state.isOpen;
    const classList = ["sc-launcher", isOpen ? "opened" : ""];
    return (
      <div>
        <style jsx>{`
      .sc-launcher {
  width: 60px;
  height: 60px;
  background-color: #1DA1F2;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  right: 25px;
  bottom: 25px;
  border-radius: 50%;
  box-shadow: none;
  transition: box-shadow 0.2s ease-in-out;
}

.sc-launcher:before {
  content: '';
  position: relative;
  display: block;
  width: 60px;
  height: 60px;  
  border-radius: 50%;
  transition: box-shadow 0.2s ease-in-out;
}

.sc-launcher .sc-open-icon,
.sc-launcher .sc-closed-icon {
  width: 60px;
  height: 60px;
  position: fixed;
  right: 25px;
  bottom: 25px;
  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
}

.sc-launcher .sc-closed-icon {
  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
  width: 60px;
  height: 60px;
}

.sc-launcher .sc-open-icon {
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
}

.sc-launcher.opened .sc-open-icon {
  transform: rotate(-90deg);
  opacity: 1;
}

.sc-launcher.opened .sc-closed-icon {
  transform: rotate(-90deg);
  opacity: 0;
}

.sc-launcher.opened:before {
  box-shadow: 0px 0px 400px 250px rgba(148, 149, 150, 0.2);
}

.sc-launcher:hover {
  box-shadow: 0 0px 27px 1.5px rgba(0,0,0,0.2);
}

.sc-new-messsages-count {
  position: absolute;
  top: -3px;
  left: 41px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
	width: 22px;
  height: 22px;
  background: #ff4646;
  color: white;
  text-align: center;
  margin: auto;
  font-size: 12px;
  font-weight: 500;
}
    `}</style>
        <div />
        <div
          className={classList.join(" ")}
          onClick={this.handleClick.bind(this)}
        >
          <MessageCount count={this.props.newMessagesCount} isOpen={isOpen} />
          <img className={"sc-open-icon"} src={'https://s3.ca-central-1.amazonaws.com/3lpm/website/images/close-icon.png'} />
          <img className={"sc-closed-icon"} src={'https://s3.ca-central-1.amazonaws.com/tlpm/web/chat-icon.png'} />
        </div>
        <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

const MessageCount = props => {
  if (props.count === 0 || props.isOpen === true) {
    return null;
  }
  return (
    <div className={"sc-new-messsages-count"}>
      {props.count}
    </div>
  );
};

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object)
};

Launcher.defaultProps = {
  newMessagesCount: 0
};

export default Launcher;
