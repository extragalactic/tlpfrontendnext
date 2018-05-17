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
          onClick('services');
        }}
      />
      <FlatButton
        label="Photo Gallery"
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
