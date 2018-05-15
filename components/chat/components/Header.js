import React, { Component } from 'react';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

class Header extends Component {
  render() {
    return (
      <div className="sc-header">
        <style jsx>
          {`
            .sc-header {
              background: #7c0f15;
              min-height: 75px;
              border-top-left-radius: 9px;
              border-top-right-radius: 9px;
              color: white;
              padding: 10px;
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
              box-sizing: border-box;
              display: flex;
              z-index: 9999;
              position: relative;
            }

            .sc-header--img {
              border-radius: 50%;
              align-self: center;
              padding: 10px;
            }

            .sc-header--team-name {
              align-self: center;
              padding: 10px;
              flex: 1;
              user-select: none;
              cursor: default;
              border-radius: 5px;
              margin-left: -10px;
            }

            .sc-header--team-name:hover {
            }

            .sc-header--close-button {
              width: 40px;
              align-self: center;
              height: 40px;
              margin-right: 10px;
              padding-top: 7px;
              box-sizing: border-box;
              cursor: pointer;
              border-radius: 5px;
              border: 2px solid #1da1f2;
              background: #1da1f2;
            }

            .sc-header--close-button:hover {
              border: 2px solid #fff;
            }

            .sc-header--close-button img {
              width: 100%;
              height: 100%;
              padding: 13px;
              box-sizing: border-box;
            }

            @media (max-width: 450px) {
              .sc-header {
                border-radius: 0px;
                z-index: 3;
              }
            }
          `}
        </style>
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name"> {this.props.teamName} </div>
        <div className="sc-header--close-button" onClick={this.props.onClose}>
          <CloseIcon className="img" style={{ color: '#fff' }} />
        </div>
      </div>
    );
  }
}

export default Header;
