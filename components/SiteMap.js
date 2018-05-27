import React from 'react';
import styled from 'styled-components';


const SiteMap = () => {
  const rootURL = 'https://threelittlepigsmasonry.ca';

  return (
    <div>
      <p><b>Our Company: </b> <a href={`${rootURL}#photos`}>Photos</a> | <a href={`${rootURL}#testimonials`}>Testimonials</a> | <a href={`${rootURL}#service-area`}>Service Area</a> | <a href={`${rootURL}#about-us`}>About Us</a></p>
      <p><b>Services: </b> <a href={`${rootURL}/services/refacing`}>Refacing</a> | <a href={`${rootURL}/services/flagstone`}>Flagstone</a> | <a href={`${rootURL}/services/walls`}>Walls</a> | <a href={`${rootURL}/services/masonry`}>Masonry</a> | <a href={`${rootURL}/services/foundation`}>Foundation</a> | <a href={`${rootURL}/services/concrete`}>Concrete</a></p>
    </div>
  );
};

export default SiteMap;
