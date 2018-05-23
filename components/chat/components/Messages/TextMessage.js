import React, { Component } from "react";
import chatIconUrl from "../../../../static/chat-icon.svg";

const TextMessage = props => {
  return (
    <div className="sc-message--text">
      {props.data.text}
      <style jsx>{`
        .sc-message--text {
          padding: 17px 20px;
          border-radius: 6px;
          font-weight: 300;
          font-size: 14px;
          line-height: 1.4;
          -webkit-font-smoothing: subpixel-antialiased;
        }
      `}</style>
    </div>
  );
};

export default TextMessage;
