import _ from 'lodash';
import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDYHIHEFNBcsyVRAWr8hNP6tW1GpDzRlJ8&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 43.6565336, lng: -79.6017193 }}
    >
      {location.map((pos) => {
        return <Marker position={pos} key={pos.lat} />;
      })}
    </GoogleMap>
  );
});

const enhance = _.identity;

export default enhance(MyMapComponent);

const location = [
  { lat: 43.6425657, lng: -79.3892497 }, // Toronto
  { lat: 43.6326859, lng: -80.0521708 }, // Acton
  { lat: 43.7941091, lng: -80.0229741 }, // Belfountain
  { lat: 44.3375681, lng: -79.1041862 }, // Brock
  { lat: 43.905963, lng: -78.8228071 }, // Courtice
  { lat: 43.745274, lng: -80.255377 }, // Erin
  { lat: 44.3074664, lng: -79.4784103 }, // Georgina
  { lat: 43.9278184, lng: -79.5523681 }, // King City
  { lat: 44.1262531, lng: -79.6940682 }, // Newton Robinson
  { lat: 43.7541366, lng: -79.51221 }, // Noth York
  { lat: 43.8368625, lng: -79.1423134 }, // Pickering
  { lat: 44.0027748, lng: -79.690302 }, // Schomberg
  { lat: 44.2324411, lng: -78.9676272 }, // Sonya
  { lat: 44.1028552, lng: -79.1344469 }, // Uxbridge
  { lat: 44.2028408, lng: -79.2761087 }, // Zephyr
  { lat: 43.8688277, lng: -79.0989808 }, // Ajax
  { lat: 44.4302912, lng: -79.1586229 }, // Beaverton
  { lat: 43.9136715, lng: -78.7039946 }, // Bowmanville
  { lat: 43.944811, lng: -78.6285345 }, // Clarington
  { lat: 44.0092401, lng: -79.0789391 }, // Glen Major
  { lat: 43.5772405, lng: -79.6347746 }, // Mississauga
  { lat: 43.8509091, lng: -79.5427028 }, // Maple
  { lat: 43.90741, lng: -79.6701 }, // Nobleton
  { lat: 43.447925, lng: -79.694593 }, // Oakville
  { lat: 44.0988001, lng: -78.9968556 }, // Port Perry
  { lat: 44.1180669, lng: -79.0532818 }, // Scugog
  { lat: 43.8370635, lng: -79.6361525 }, // Vaughan
  { lat: 43.9962017, lng: -79.4815262 }, // Aurora
  { lat: 44.1067977, lng: -79.6117244 }, // Bradford
  { lat: 43.3271706, lng: -79.8398902 }, // Burlington
  { lat: 44.1434279, lng: -79.4742599 }, // East Gwillimbury
  { lat: 43.9379186, lng: -79.409131 }, // Gormley
  { lat: 44.1017684, lng: -79.4921915 }, // Holland Landing
  { lat: 44.1382393, lng: -79.3254651 }, // Mount Albert
  { lat: 43.8807176, lng: -79.36975 }, // Markham
  { lat: 43.9482709, lng: -79.0187778 }, // Oshawa
  { lat: 43.9035475, lng: -79.4985129 }, // Richmond Hill
  { lat: 44.1008531, lng: -79.4421162 }, // Sharon
  { lat: 43.826645, lng: -79.488831 }, // Thornhill
  { lat: 43.8977212, lng: -78.9628574 }, // Whitby
  { lat: 44.0370651, lng: -79.3096442 }, // Ballantrae
  { lat: 43.707272, lng: -79.7369318 }, // Brampton
  { lat: 43.8310814, lng: -79.9146328 }, // Caledon
  { lat: 43.6723663, lng: -79.6230218 }, // Etobicoke
  { lat: 43.6535433, lng: -79.9374321 }, // Georgetown
  { lat: 44.227619, lng: -79.5143844 }, // Keswick
  { lat: 44.0492891, lng: -79.45125 }, // Newmarket
  { lat: 43.5230469, lng: -80.082519 }, // Milton
  { lat: 43.9121321, lng: -80.1211384 }, // Orangeville
  { lat: 43.7632779, lng: -79.2989461 }, // Scarborough
  { lat: 44.3090835, lng: -79.37827 }, // Sutton
  { lat: 44.0696151, lng: -79.0457319 }, // Utica
  { lat: 44.0124715, lng: -79.3894508 }, // Whitchurch-Stouffville
];
