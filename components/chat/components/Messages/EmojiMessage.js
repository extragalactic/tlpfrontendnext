import React, { Component } from "react";

const EmojiMessage = props => {
  return (
    <div className="sc-message--emoji">
      {props.data.emoji}
      <style jsx>{`
  .sc-message--emoji {
    font-size: 40px;
  }`}</style>

    </div>
  );
};

export default EmojiMessage;
