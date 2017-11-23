import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
// import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';


const StyledServiceThumbnail = styled.section`
  padding: 0px 5px 5px 5px;
  width: 95wh;
  text-align: center;

  p {
    font-size: 1.0em;
    text-align: center;
    text-justify: auto;
    max-width: 500px; 
    display: inline-block;
  }
  img {
    min-height: 200px;
    width: 100%;
    max-width: 500px;
    border: 1px solid #000;
  }
`;

const ServiceThumbnail = (props) => {
  return (
    <StyledServiceThumbnail>
      <h3>{props.service.title}</h3>
      <img src={`https://s3.ca-central-1.amazonaws.com/3lpm/website/images/services/${props.service.imgSrc}`} alt="" />
      <div>
        <p>{props.service.summary}</p>
        <div>
          <RaisedButton
            labelStyle={{ fontSize: '0.8em' }}
            label="Learn more..."
            secondary
            onClick={() => { Router.push(`/services/${props.service.pageName}`); }}
          />
        </div>
      </div>
    </StyledServiceThumbnail>
  );
};

ServiceThumbnail.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceThumbnail;


/*

          <Link href={`/services/${props.service.pageName}`} >
          <RaisedButton
            labelStyle={{ fontSize: '0.8em' }}
            label="Learn more..."
            secondary
            // onClick={() => { history.push(`/services/${props.service.pageName}`); }}
          />
          </Link>

*/
