/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import RaisedButton from 'material-ui/RaisedButton';
import PhoneIcon from 'material-ui/svg-icons/communication/call';
import MediaQuery from 'react-responsive';

const TopDiv = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  padding-bottom: 62%;
  @media (max-width: 1000px) {
    padding-bottom: 61%;
  }
  @media (max-width: 600px) {
    padding-bottom: 59%;
  }
`;
const SlickSlide = styled.img`
  height: 62.5vw;
  width: 100%;
`;
const StyledCarouselContent = styled.section`
  position: absolute;
  float: left;
  top: 50px;
  margin-left: 20px;
`;
const StyledTagline = styled.img`
  margin-top: -50px;
  margin-left: -15px;
  padding-bottom: 10px;
  width: 700px;
  margin-top: -90px;
  margin-left: -20px;

  @media (max-width: 1000px) {
    width: 550px;
    margin-top: -90px;
    margin-left: -20px;
  }
  @media (max-width: 650px) {
    width: 400px;
    margin-top: -70px;
  }
`;
const StyledQuoteRequest = styled.div`
  text-align: center;

  h4 {
    color: #fff;
    margin: 0px 0px 5px 0px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 0.5em;
  }
  p {
    color: #fff;
    text-shadow: 1px 1px #444;
  }
  > div {
    width: 245px;
  }
  @media (max-width: 650px) {
    margin-top: -20px;
    h4 {
      font-size: 1em;
    }
  }
`;
const StyledPhoneSection = styled.div`
  padding: 3px 3px 7px 10px;
  margin-top: 5px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 0.5em;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h6 {
    color: #fff;
    font-size: 1.8em !important;
    padding-top: 5px;
    padding-bottom: 25px;
    margin-top -14px;
  }  
`;

const TopCarousel = (props) => {
  const openChat = props.openChat;

  // Note: the Decorators array can be used to make custom controls for nuka-carousel. Here I'm just passing in an empty array to clear all the controls.
  // How To: https://stackoverflow.com/questions/36879280/react-js-nuka-carousel-custom-arrow-positioning
  const Decorators = [];

  return (
    <TopDiv>
      <Carousel
        autoplay
        autoplayInterval={2000}
        wrapAround
        decorators={Decorators}
      >
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/main_douglas_a.jpeg" alt="" /></div>
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/main_douglas_b.jpeg" alt="" /></div>
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/intro2.jpg" alt="" /></div>
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/intro4.jpg" alt="" /></div>
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/intro1.jpg" alt="" /></div>
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/intro3.jpg" alt="" /></div>
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/main_mark.jpeg" alt="" /></div>
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/main_sai.jpeg" alt="" /></div>
        <div><SlickSlide src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/intro/main_stone.jpeg" alt="" /></div>

      </Carousel>
      <StyledCarouselContent>
        <StyledQuoteRequest>
          <StyledPhoneSection>
            <div>
              <RaisedButton
                label="Click here for a quote!"
                secondary
                onClick={openChat}
                buttonStyle={{
                  fontFamily: 'sans-serif',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                }}
                style={{
                  marginTop: 10,
                  fontFamily: 'sans-serif',
                }}
              />
            </div>
            <div>
              <PhoneIcon color={'#fff'} style={{ width: 50, height: 50, float: 'left' }} />
              <p style={{ float: 'left' }}>or give us a call at:</p>
            </div>
            <div>
              <h6 style={{ float: 'left' }}>
                <a href="tel:+18336000505">1-833-600-0505</a>
              </h6>
            </div>
          </StyledPhoneSection>
        </StyledQuoteRequest>
      </StyledCarouselContent>
    </TopDiv>
  );
};

TopCarousel.propTypes = {
  openChat: PropTypes.func.isRequired,
};

export default TopCarousel;
