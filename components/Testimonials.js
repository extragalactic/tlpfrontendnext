import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import MediaQuery from 'react-responsive';
import TestimonialCard from './TestimonialCard';
import TestimonialData from './TestimonialData';


//const google = window.google;

const StyledTestimonials = styled.section`
  width: 100%;
  padding-top: 5px;
`;

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberToShow: 3,
      testimonials: [],
    };
    this.oldTestimonials = TestimonialData;
    this.numberTotal = TestimonialData.length;
  }

  componentWillMount() {
    // get testimonials from Google reviews API
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({
      placeId: 'ChIJ74NmW2vTKogRAVn6jOwdYUI',
    }, (place, status) => {
      // map the Google testimonials into an array
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const testimonials = place.reviews.filter((review) => {
          return review.text.length > 30; // filter out one-liner comments
        }).map((review) => {
          return {
            title: '',
            text: review.text,
            name: review.author_name,
            stars: review.rating,
            location: '',
          };
        });
        // append old (static) testimonials to the returned array
        this.oldTestimonials.forEach((review) => {
          testimonials.push(review);
        });
        this.numberTotal = testimonials.length;
        this.setState({
          testimonials,
        });
      }
    });
  }

  getTestimonials(baseNum) {
    // the default # of items to show is dependent on the MediaQuery size
    return (
      this.state.testimonials.map((review, i) => {
        let val = <TestimonialCard review={review} key={i} />;
        if (i >= this.state.numberToShow + baseNum) {
          val = null;
        }
        return val;
      })
    );
  }

  render() {
    return (
      <StyledTestimonials>
        <h2>Testimonials</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 450: 2, 700: 3, 1000: 4 }}>
          <MediaQuery minWidth={1} maxWidth={449}>
            <Masonry gutter={'5px'}>
              {this.getTestimonials(0)}
            </Masonry>
          </MediaQuery>
          <MediaQuery minWidth={450} maxWidth={699}>
            <Masonry gutter={'5px'}>
              {this.getTestimonials(2)}
            </Masonry>
          </MediaQuery>
          <MediaQuery minWidth={700} maxWidth={999}>
            <Masonry gutter={'5px'}>
              {this.getTestimonials(4)}
            </Masonry>
          </MediaQuery>
          <MediaQuery minWidth={1000}>
            <Masonry gutter={'5px'}>
              {this.getTestimonials(8)}
            </Masonry>
          </MediaQuery>
        </ResponsiveMasonry>
        {this.state.numberToShow < this.numberTotal &&
          <div>
            <h3>. . .</h3>
            <div><FlatButton labelStyle={{ fontSize: '1.0em', padding: '5px 10px' }} label="Read more testimonials" primary onClick={() => { this.setState({ numberToShow: this.state.numberToShow + 5 }); }} /></div>
            <div><FlatButton labelStyle={{ fontSize: '1.0em', padding: '5px 10px' }} label="Write a testimonial" primary onClick={() => { window.open('https://search.google.com/local/writereview?placeid=ChIJ74NmW2vTKogRAVn6jOwdYUI', '_blank'); }} /></div>
          </div>
        }
      </StyledTestimonials>
    );
  }
}

export default Testimonials;
