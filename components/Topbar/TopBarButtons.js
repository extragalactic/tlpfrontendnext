import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export default ({ onClick, containerStyle }) => {
  return (
    <div style={containerStyle}>
      <FlatButton
        label="Home"
        onClick={() => {
          location.assign('/');
        }}
      />
      <FlatButton
        label="Services"
        onClick={() => {
          // Note: jumping direct to page is breaking on the first visit using SSR
          // location.assign('/services/refacing');
          onClick('services');
        }}
      />
      <FlatButton
        label="Photos"
        onClick={() => {
          onClick('photos');
        }}
      />
      <FlatButton
        label="Testimonials"
        onClick={() => {
          onClick('testimonials');
        }}
      />
      <FlatButton
        label="Service Area"
        onClick={() => {
          onClick('service-area');
        }}
      />
      <FlatButton
        label="About Us"
        onClick={() => {
          onClick('about-us');
        }}
      />
    </div>
  );
};
