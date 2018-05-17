import styled from 'styled-components';

export const StyledLogo = styled.div`
  img {
    z-index: 9999;
    float: left;
    padding: 3px;
    margin-left: 0px;
    height: 165px;
    @media (max-width: 1400px) {
      height: 85px;
    }
    @media (max-width: 750px) {
      height: 75px;
    }
  }
`;

export const StyledLargeHeader = styled.div`
  flex-direction: row;
  display: flex;
  background-color: #eee;
  width: 100%;
  position: relative;
  top: 0;
  z-index: 1039;
  textalign: center;
`;

export const StyledLargeHeaderButtons = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    display: none;
  }
`;

export const StyledSmallHeader = styled.div`
  h6 {
    font-family: sans-serif;
  }
  display: flex;
  height: 50px;
  background-color: #ccc;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1039;
  text-align: center;
`;

export const StyledSmallHeaderPhone = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
    flex-wrap: wrap;
  }
  width: 32%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSmallHeaderButtons = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }

  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSmallHeaderEstimate = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
  width: 32%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
