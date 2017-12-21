import React from 'react';

class AmpPageBody extends React.Component {
  render() {
    return (
      <div>
        <amp-fit-text
          width="750"
          height="186"
          layout="responsive"
          style={{backgroundColor: '#841F27', marginLeft: '0px', marginRight: '0px', padding: '5px'}}
        >
          <amp-img
            className="headerImg"
            src="./static/images/3LPM-title-light.png"
            width="750"
            height="186"
            layout="responsive"
            srcset="./static/images/3LPM-title-light.png 800w"
          >
          </amp-img>
        </amp-fit-text>

        <amp-carousel
          id="carousel-with-preview"
          style={{margin: '0px 0px 5px 0px'}}
          width="400"
          height="250"
          type="slides"
          controls
          loop
          delay="4000"
          layout="responsive"
        >
          <amp-img src="./static/images/intro/intro2.jpg"
            width="1280"
            height="800"
            layout="responsive">
          </amp-img>
          <amp-img src="./static/images/intro/intro1.jpg"
            width="1280"
            height="800"
            layout="responsive">
          </amp-img>
          <amp-img src="./static/images/intro/intro3.jpg"
            width="1280"
            height="800"
            layout="responsive">
          </amp-img>
          <amp-img src="./static/images/intro/intro4.jpg"
            width="1280"
            height="800"
            layout="responsive">
          </amp-img>
        </amp-carousel>
        <div className="carousel-preview centerBlock">
          <button on="tap:carousel-with-preview.goToSlide(index=0)" className="preview-button">
            <amp-img src="./static/images/intro/intro2-thumb.jpg"
              width="60"
              height="38"
              alt="Three Little Pigs">
            </amp-img>
          </button>
          <button on="tap:carousel-with-preview.goToSlide(index=1)" className="preview-button">
            <amp-img src="./static/images/intro/intro1-thumb.jpg"
              width="60"
              height="38"
              alt="Three Little Pigs">
            </amp-img>
          </button>
          <button on="tap:carousel-with-preview.goToSlide(index=2)" className="preview-button">
            <amp-img src="./static/images/intro/intro3-thumb.jpg"
              width="60"
              height="38"
              alt="Three Little Pigs">
            </amp-img>
          </button>
          <button on="tap:carousel-with-preview.goToSlide(index=3)" className="preview-button">
            <amp-img src="./static/images/intro/intro4-thumb.jpg"
              width="60"
              height="38"
              alt="Three Little Pigs">
            </amp-img>
          </button>
        </div>
        <amp-fit-text
          media="(max-width: 549px)" width="300" height="140" max-font-size="20" min-font-size="16" layout="responsive" >
          <div className="contentBlock">
            <h1>Premium Work, Amazing Warranty!</h1>
            <p>Our mission is to provide high quality masonry restoration & renovation services for the GTA home and business owner. Family owned and operated, we have been proudly serving homeowners since 2004.</p>
          </div>
        </amp-fit-text>
        <amp-fit-text media="(min-width: 550px)" width="300" height="75" max-font-size="20" min-font-size="15" layout="responsive" >
          <div className="contentBlock">
            <h1>Premium Work, Amazing Warranty!</h1>
            <p>Our mission is to provide high quality masonry restoration & renovation services for the GTA home and business owner. Family owned and operated, we have been proudly serving homeowners since 2004.</p>
          </div>
        </amp-fit-text>
        <div className="centerBlock buttonRow">
          <a href="http://www.threelittlepigsmasonry.com/#services" target="_self">
            <button
              className="btn btnLarge"
            >
              Learn More!
            </button>
          </a>
        </div>
        <div className="titleBlock">
          <h1>See what our customers say...</h1>
        </div>
        <div className="testimonialCard contentBlock">
          <div className="testimonialTitleBar">★★★★★</div>
          <p>I contacted 3 pigs for a quote to repair crumbling stone work. Tyler came out to look and take photos (I didn't even need to be home), then Darren phoned me. Darren was extremely knowledgeable and gave me lots of advice on the phone. It turns out it would be a big job ($50,000), but rather than give me hard sell about why I should go ahead, he actually explained why it might be best to leave it and monitor the situation over the next few years. I was very impressed that customer service is more important to them than getting work. I would absolutely trust them in future because I know they are not going to try to rip me off. Highly recommended.</p>
          <p className="nameTag">private user</p>
        </div>
        <div className="testimonialCard contentBlock">
          <div className="testimonialTitleBar">★★★★★</div>
          <p>We just had four brick window sills replaced with limestone sills. The entire process from initial contact, on site estimator, contact with the chief estimator, quoting, financial arrangements, and replacement, was carried out in a very professional manner. We would like to highlight the craftsmanship and personable talents of Patrick and his assistant. They were polite, clean, attentive to detail, respectful and punctual. We highly recommend them and the entire team at Three Little Pigs Masonry.</p>
          <p className="nameTag">Mark</p>
        </div>
        <div className="testimonialCard contentBlock">
          <div className="testimonialTitleBar">★★★★★</div>
          <p>Very happy with the quality of their work and their customer service! The first call was friendly and the estimate was arranged promptly. Contract negotiations and job scheduling went very smoothly. When the time came for the job, the team was fast, clean and professional. They even took the time to assess and complete some extra work to fix an issue we didn't notice prior to that day! From everyone we had dealings with, it's clear that these guys work as one cohesive team and truly take pride in their work and taking care of their clients. I would hire Three Little Pigs Masonry again without a moment's hesitation. Highly recommended!!</p>
          <p className="nameTag">Olga & Shawn</p>
        </div>

        <div className="centerBlock buttonRow">
          <a href="http://www.threelittlepigsmasonry.com/#testimonials" target="_self">
            <button
              className="btn btnLarge"
            >
              Read More Testimonials
            </button>
          </a>
        </div>
        <amp-img
          src="./static/images/LogoBanner-white.png"
          width="812"
          height="328"
          layout="responsive"
          className="bottomImage">
        </amp-img>
        <div className="centerBlock footer">
          <p>Copyright &#169; 2018 Three Little Pigs Masonry</p>
        </div>
      </div>
    );
  }
}
export default AmpPageBody;
