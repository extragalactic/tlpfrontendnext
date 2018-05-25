import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
header {
    width: 100%;
    padding: 60px 0;
    background: #fff;
    border-bottom: 1px solid #e1e1e1;
    /* animation magic */
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    z-index: 9999;
    top: 0;
    position: fixed;  
}
.shrink{
    padding: 20px 0;
  }
header h1 {
    font-size: 30px
    text-indent: 40px
    font-weight:  bold
  }`;

export default () => {
  return (
    <StyledHeader>
      <header>
        <h1>Lets shrink ;)</h1>
      </header>
    </StyledHeader>
  );
};
