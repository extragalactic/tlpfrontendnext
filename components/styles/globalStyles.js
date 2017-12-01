import styled from 'styled-components';

const GlobalStyles = styled.div`
body {
  margin: 0;
  padding: 0;

  p {
    font-family: 'Open Sans', sans-serif;
  }
}
a:link, a:visited {
  color: #fff;
  background-color: none;
  text-decoration: none;
  padding: 3px;
}
a:hover, a:active {
  color: #c65757;
  text-decoration: none;
  padding: 3px;     
}  
h1 {
  font-size: 1.8em;
  color: #777;
  background-color: #eee;
  padding: 3px 5px 3px 5px;
}
h2 {
  color: #fff;
  background-color: #841F27;
  background: linear-gradient(#841F27, #b9202c);
  font-size: 1.5em;
  font-family: 'Libre Baskerville';
  padding: 5px 0px;
}
h3 {
  font-size: 1.4em;
}
h4 {
  font-size: 1.3em;
  color: #777;
  background-color: #eee;
  padding: 3px 5px 3px 5px;
}
h5 {
  font-size: 1.1em;
  color: #444;
}
h6 {
  font-size: 1.0em; 
}  
`;

export default GlobalStyles;
