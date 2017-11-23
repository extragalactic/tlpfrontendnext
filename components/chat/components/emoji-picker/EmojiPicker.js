import React, { Component } from 'react';
import EmojiConvertor from 'emoji-js';
import emojiData from './emojiData';


class EmojiPicker extends Component {

  constructor() {
    super();
    this.emojiConvertor = new EmojiConvertor();
    this.emojiConvertor.init_env();
  }

  componentDidMount() {
    const elem = this.domNode;
    elem.style.opacity = 0;
    window.requestAnimationFrame(() => {
      elem.style.transition = 'opacity 350ms';
      elem.style.opacity = 1;
    });
    this.domNode.focus();
  }

  render() {
    return (
      <div
        tabIndex="0"
        onBlur={this.props.onBlur}
        className="sc-emoji-picker"
        ref={(e) => { this.domNode = e; }}
      >
      <style jsx>{`
      .sc-emoji-picker {
  position: absolute;
  bottom: 50px;
  right: 0px;
  width: 330px;
  max-height: 215px;
  box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.3);
  background: white;
  border-radius: 10px;
  outline: none;
}

.sc-emoji-picker:after {
  content: "";
  width: 14px;
  height: 14px;
  background: white;
  position: absolute;
  bottom: -6px;
  right: 30px;
  transform: rotate(45deg);
  border-radius: 2px;
}

.sc-emoji-picker--content {
  padding: 10px;
  overflow: auto;
  width: 100%;
  max-height: 195px;
  margin-top: 7px;
  box-sizing: border-box;
}

.sc-emoji-picker--category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.sc-emoji-picker--category-title {
  min-width: 100%;
  color: #b8c3ca;
  font-weight: 200;
  font-size: 13px;
  margin: 5px;
  letter-spacing: 1px;
}

.sc-emoji-picker--emoji {
  margin: 5px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  font-size: 28px;
  transition: transform 60ms ease-out,-webkit-transform 60ms ease-out;
}

.sc-emoji-picker--emoji:hover {
  transform: scale(1.4);
}
    `}</style>
        <div className="sc-emoji-picker--content">
          {emojiData.map((category) => {
            return (
              <div className="sc-emoji-picker--category" key={category.name}>
                <div className="sc-emoji-picker--category-title">{category.name}</div>
                {category.emojis.map((emoji) => {
                  return (
                    <span
                      key={emoji}
                      className="sc-emoji-picker--emoji"
                      onClick={() => {
                        this.props.onEmojiPicked(emoji);
                        this.domNode.blur();
                      }}
                    >
                      {emoji}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EmojiPicker;
