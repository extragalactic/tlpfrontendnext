import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDivider = styled.section`
  padding: 5px 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #eee;
  border-top: 1px solid #444;

  h3 {
    color: #666;
    font-size: 1.4em;
    font-style: bold;
  }
  div {
    margin-top: -20px;
  }
  p {
    font-size: 1.2em;
    color: #999;
  }
`;

const quoteIDs = [
  { title: 'Our Mission', body: 'Providing high quality masonry restoration & renovation services for the GTA home and business owner.' },
  { title: 'Premium Warranty!', body: '"These guys have the best warranty. I am totally satisfied with their service."' },
];

const TextDivider = (props) => {
  return (
    <StyledDivider>
      <h3>{quoteIDs[props.quoteID].title}</h3>
      <div>
        <p>{quoteIDs[props.quoteID].body}</p>
      </div>
    </StyledDivider>
  );
};


TextDivider.propTypes = {
  quoteID: PropTypes.number.isRequired,
};

export default TextDivider;
