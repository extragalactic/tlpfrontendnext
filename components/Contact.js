import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Columns from 'react-columns';
import RaisedButton from 'material-ui/RaisedButton';
//import Ionicon from 'react-ionicons';

/* Note: This component should be renamed (is no longer for contact, it's for Service Area) */

const StyledContact = styled.section`
  padding: 5px 0px;

  section {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.0em;
    text-align: left;
  }
`;
const StyledArea = styled.div`
  width: 45%;
  min-width: 200px;
  padding: 5px;

  @media (max-width: 500px) {
    width: 95%;
    min-width: 280px;
  }
  div {
    text-align: center;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    border: 1px solid #000;
  }
  a:link, a:visited {
    color: #c65757 !important;
    padding: 0px !important;
  }
  a:hover, a:active {
    color: #d00 !important;
    padding: 0px !important;
  }
`;
const StyledColumns = styled(Columns)`
  width: 100%;
  margin: 20px;
  color: #777;
`;
const StyledSocialIcons = styled.div`
  width: 100%;
  text-align: center;

  p {
    text-transform: uppercase;
    color: #777;
    font-size: 0.9em;
  }
  button {
    cursor: pointer;
    margin: 5px;
    height: 55px;
    width: 55px;
  }
`;

const queries = [{
  columns: 2,
  query: 'min-width: 0px',
}, {
  columns: 3,
  query: 'min-width: 600px',
}, {
  columns: 4,
  query: 'min-width: 1000px',
}];

// -- old service area list --
// const serviceAreaList = ['Aurora', 'Bethesda', 'Bradford', 'Brampton', 'Etobicoke', 'Gormley', 'Holland Landing', 'Kettleby', 'King City', 'Maple', 'Markham', 'Mississauga', 'Newmarket', 'Nobleton', 'North York', 'Oak Ridges', 'Oakville', 'Richmond Hill', 'Scarborough', 'Sharon', 'Stouffville', 'Thornhill', 'Toronto', 'Unionville', 'Vandor'];

const serviceAreaList = [
  'Ajax',
  'Aurora',
  'Ballantrae',
  'Bradford West Gwillimbury',
  'Brampton',
  'Caledon',
  'East Gwillimbury',
  'Etobicoke',
  'Glen Major',
  'Gormley',
  'Mississauga',
  'Mt. Albert',
  'Newmarket',
  'Newton Robinson',
  'Nobleton',
  'North York',
  'Oakville',
  'Oshawa',
  'Pickering',
  'Richmond Hill',
  'Scarborough',
  'Schomberg',
  'Toronto',
  'Utica',
  'Uxbridge',
  'Vaughan',
  'Whitby',
  'Whitchurch-Stouffville',
  'Zephyr',
];

const Contact = (props) => {
  const openChat = props.openChat;

  return (
    <StyledContact>
      <h2>Service Area</h2>
      <section>
        <StyledArea>
          <img src="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/service-area-map.jpg" alt="service area" />
        </StyledArea>
        <StyledArea style={{ paddingLeft: '15px', paddingRight: '10px' }}>
          <p>Three Little Pigs Masonry services a large part of the Greater Toronto Area. If you live in one of the areas listed below, let&#39;s get started! <br /><br />You can call us at <a href="tel:+19055080500">905-508-0500</a> or <a href="tel:+14165950100">416-595-0100</a>, or for an immediate estimate just click on the button below:</p>
          <div>
            <RaisedButton label="Get Quote" secondary onClick={openChat} />
          </div>
        </StyledArea>
        <StyledColumns queries={queries}>
          {serviceAreaList.map((area) => {
            return <li key={area}>{area}</li>;
          })
          }
        </StyledColumns>
        <StyledSocialIcons>
          <p>You can also check us out on social media!</p>
          <button onClick={() => { window.open('https://twitter.com/3PigsMasonry', '_blank'); }}>
            <i className="fa fa-facebook-square fa-3x" aria-hidden="true" style={{ color: '#3b5999' }}></i>
          </button>
          <button onClick={() => { window.open('https://www.facebook.com/Three-Little-Pigs-Masonry-301425343309473', '_blank'); }}>
            <i className="fa fa-twitter fa-3x" aria-hidden="true" style={{ color: '#55acee' }}></i>
          </button>
        </StyledSocialIcons>
      </section>
    </StyledContact>
  );
};

Contact.propTypes = {
  openChat: PropTypes.func.isRequired,
};

export default Contact;
/*
            <Ionicon icon="ion-social-twitter" fontSize="35px" color="#55acee" />

            <Ionicon icon="ion-social-facebook" fontSize="35px" color="#3b5999" />

*/