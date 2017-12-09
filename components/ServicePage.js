import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import Carousel from 'nuka-carousel';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ServiceData from './ServiceData';


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
  height: 45vw;
  width: 98%;
`;
const StyledMain = styled.div`
  padding: 40px 5px 30px 5px;
  margin-top: 0px;
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

  constructor(props) {
    super(props);

    this.state = {
      currentSlideIndex: 0,
    };

    this.serviceType = props.serviceType;
    this.serviceData = ServiceData.find((service) => { return service.pageName === this.serviceType; });
    this.handleAfterSlide = this.handleAfterSlide.bind(this);
  }

  componentDidMount() {
    // need to recalculate the height of the page on resize (for Card components)
    window.addEventListener("resize", this.props.refresh);
  }

	handleAfterSlide(newSlideIndex) {
    console.log(newSlideIndex);
		this.setState({
			currentSlideIndex: newSlideIndex,
		});
  }
  
  getSlides() {
    let selectedService = ServiceData[this.props.selectedTab].pageName;
    // console.log(selectedService, this.serviceType);
    if (selectedService !== this.serviceType) {
      return <div></div>;
    }
    const numSlides = this.serviceData.photos.length;

    return this.serviceData.photos.map((photoSrc, key) => {
      if (key <= this.state.currentSlideIndex + 3 || key >= numSlides - 2) {
        const imgSrc = `https://s3.ca-central-1.amazonaws.com/3lpm/website/images/before-and-after-pics/${photoSrc}`;
        return <div key={key}><SlickSlide src={imgSrc} alt=""/></div>;
      }
      return <div key={key}></div>;
    });
  }

  getContent() {
    return this.serviceData.content.map((section, i) => {
      return (
        <Card
          key={`${section.title}`}
          initiallyExpanded={false}
          onExpandChange={() => { this.props.refresh(); }}
        >
          <CardHeader
            title={section.title}
            actAsExpander
            showExpandableButton
            titleStyle={{ fontSize: '1.2em', marginTop: '10px', padding: '3px 3px 10px 3px' }}
            style={{ backgroundColor: '#eee' }}
          />
          <CardText expandable >
            <div>
              {
                section.content.map((subsection, i) => {
                  /* render section as a list */
                  if (subsection.list !== undefined) {
                    return (
                      <div key={`${subsection.title}${i}`}>  
                        {
                          subsection.title !== '' &&
                            subsection.mainTitle === true ? <h4>{subsection.title}</h4> : <h5>{subsection.title}</h5>
                        }
                        <ul>
                          {
                            subsection.list.map((body) => {
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
                  // else render section as regular paragraphs
                  return (
                    <div key={`${subsection.title}${i}`}>  
                      {
                        subsection.title !== '' &&
                          subsection.mainTitle === true ? <h4>{subsection.title}</h4> : <h5>{subsection.title}</h5>
                      }
                      {
                        subsection.text.map((body) => {
                          return (
                            <StyledParagraph key={body.substring(0, 30)}>
                              <p>{body}</p>
                            </StyledParagraph>
                          );
                        })
                      }
                      {
                        // if it's the last text item in the array, leave a bottom spacer
                        (i + 1) >= section.content.length &&
                          <div style={{ paddingBottom: '30px' }} />
                      }
                    </div>
                  );
                })
              }
            </div>
          </CardText>
        </Card>
      );
    });
  }

  render() {
    // const Decorators = [];

    return (
      <StyledServicePage>
        <h1>{this.serviceData.title}</h1>
        <Carousel
          autoplay={false}
          wrapAround
          slidesToShow={2}
          slidesToScroll={2}
          cellSpacing={5}
          style={{marginTop: '-20px'}}
          afterSlide={ this.handleAfterSlide }
          // decorators={Decorators}
        >
          {this.getSlides()}
        </Carousel>
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
  refresh: PropTypes.func.isRequired,
  selectedTab: PropTypes.number.isRequired,
};

export default ServicePage;
