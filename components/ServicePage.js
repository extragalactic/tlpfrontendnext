import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import RaisedButton from 'material-ui/RaisedButton';
import ServiceData from './ServiceData';
import history from './history';


const StyledServicePage = styled.section`
  padding: 5px;
  padding-bottom: 25px;
  margin-top: -40px;

  h1 {
    text-align: left;
    padding-left: 5px;
  }
  p {
    font-size: 1.0em;
    text-align: left;  
  }
`;
const StyledSlideshow = styled(SlideShow)`
  margin: -20px 30px 0px 30px;
`;
const SlickSlide = styled.img`
  width: 97%;
`;
const StyledMain = styled.div`
  padding: 50px 5px 15px 5px;
  margin-top: -15px;
  text-align: left;

  div {
    text-align: left;
    margin-top: -15px;
    margin-bottom: -10px;
  }
`;
const StyledParagraph = styled.div`
  padding-bottom: 5px;
`;
const StyledListItem = styled.div`
  padding-bottom: 25px;
`;

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: '#777', height: '60px', lineHeight: '80px' }}
      onClick={onClick}
    />
  );
};

class ServicePage extends React.Component {
  static gotoSection(section) {
    history.push(`/services/${section}`);
  }

  constructor(props) {
    super(props);

    this.serviceType = props.serviceType;
    this.serviceData = ServiceData.find((service) => { return service.pageName === this.serviceType; });

    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      fade: false,
      autoplay: false,
      lazyLoad: false,
      swipe: true,
      swipeToSlide: false,
      prevArrow: <Arrow />,
      nextArrow: <Arrow />,
      responsive: [
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 1000, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      ],
    };
  }

  getSlides() {
    return this.serviceData.photos.map((photoPair) => {
      return photoPair.map((photoSrc) => {
        const imgSrc = `/images/before-and-after-pics/${photoSrc}`;
        return <div><SlickSlide src={imgSrc} alt="" /></div>;
      });
    });
  }

  getContent() {
    return this.serviceData.content.map((section, i) => {
      if (section.list !== undefined) {
        // section type "list" displays paragraphs in a bulleted list
        return (
          <div key={`${section.title}${i}`}> {/* ...just a creative way to get a unique key, linter still doesn't like the "i" */}
            {
              section.title !== '' &&
                section.mainTitle === true ? <h4>{section.title}</h4> : <h5>{section.title}</h5>
            }
            <ul>
              {
                section.list.map((body) => {
                  return (
                    <StyledListItem key={body.substring(0, 30)}>
                      <li>{body}</li>
                    </StyledListItem>
                  );
                })
              }
            </ul>
          </div>
        );
      }
      // section type "text" displays content as regular paragraphs
      return (
        <div key={`${section.title}${i}`}>
          {
            section.title !== '' &&
              section.mainTitle === true ? <h4>{section.title}</h4> : <h5>{section.title}</h5>
          }
          {
            section.text.map((body) => {
              return (
                <StyledParagraph key={body.substring(0, 30)}>
                  <p>{body}</p>
                </StyledParagraph>
              );
            })
          }
        </div>
      );
    });
  }

  render() {
    return (
      <StyledServicePage>
        <h1>{this.serviceData.title}</h1>
        <StyledSlideshow {...this.settings}>
          {this.getSlides()}
        </StyledSlideshow>
        <StyledMain>
          <div>
            {this.getContent()}
          </div>
        </StyledMain>
        <RaisedButton label="Get Quote" secondary onClick={this.props.openChat} />
      </StyledServicePage>
    );
  }
}

ServicePage.propTypes = {
  serviceType: PropTypes.string.isRequired,
  openChat: PropTypes.func.isRequired,
};

export default ServicePage;
