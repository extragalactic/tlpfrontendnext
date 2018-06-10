import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import MediaQuery from 'react-responsive';

/* eslint-disable */

const StyledTestimonials = styled.section`
  width: 100%;
  padding-top: 5px;
`;

class TestimonialsHomeStars extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <StyledTestimonials>
        <MediaQuery minWidth={1} maxWidth={509}>
          <iframe
            height="280"
            frameborder="0"
            width="330"
            src="https://homestars.com/widgets/reviews/three-little-pigs-masonry-inc"
            scrolling="no"
          >
            <br />
            <p>Your browser does not support iframes.</p>
            <br />
          </iframe>
          <br />
        </MediaQuery>
        <MediaQuery minWidth={510}>
          <iframe
            height="490"
            frameborder="0"
            width="490"
            src="https://homestars.com/widgets/reviews/three-little-pigs-masonry-inc/large"
            scrolling="no"
          >
            <br />
            <p>Your browser does not support iframes.</p>
            <br />
          </iframe>
          <br />
        </MediaQuery>
      </StyledTestimonials>
    );
  }
}

export default TestimonialsHomeStars;
