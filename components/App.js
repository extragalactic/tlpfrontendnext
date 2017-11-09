import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Footer from './Footer';
import TopBar from './TopBar';
import MainPage from './MainPage';
import ServicePageMain from './ServicePageMain';
// import './App.css'; /* using this css for testing */

const StyledApp = styled.section`
  text-align: center;
  position: relative;
  margin: auto;
  width: 100%;
  flex: 1;
`;

const GlobalStyles = styled.div`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
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


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#841F27',
    primary2Color: '#f00',
    accent1Color: '#f00',
    alternateTextColor: '#1a0000',
  },
  appBar: {
    height: '100%',
  },
  inkBar: {
    backgroundColor: '#b9202c',
  },
  tabs: {
    backgroundColor: '#fff',
    textColor: '#000',
    fontSize: '1.0em',
  },
  raisedButton: {
    primaryTextColor: '#fff',
    secondaryTextColor: '#fff',
    primaryColor: '#a00',
    secondaryColor: '#1DA1F2', /* this is 'Twitter Blue' */
    color: 'rgba(255, 0, 0, 0.87)',
  },
  dropDownMenu: {
    accentColor: '#000',
  },
});
const myMuiTheme = getMuiTheme(muiTheme);

injectTapEventPlugin();

const App = () => {
  return (
    <StyledApp>
      <MuiThemeProvider muiTheme={myMuiTheme}>
        <GlobalStyles>
          <TopBar />
          <Switch>
            <Route exact path="/" component={MainPage} />

            {/* Route re-directs from old website, linking to different Services pages */}
            <Route path="/services/brick-repair" render={(props) => { return <ServicePageMain redirect="masonry" {...props} />; }} />
            <Route path="/services/basement-waterproofing" render={(props) => { return <ServicePageMain redirect="foundations" {...props} />; }} />
            <Route path="/services/chimneys--stone-chimneys" render={(props) => { return <ServicePageMain redirect="masonry" {...props} />; }} />
            <Route path="/services/concrete-repair" render={(props) => { return <ServicePageMain redirect="concrete" {...props} />; }} />
            <Route path="/services/concrete-step-repair" render={(props) => { return <ServicePageMain redirect="concrete" {...props} />; }} />
            <Route path="/services/concrete-walkways" render={(props) => { return <ServicePageMain redirect="concrete" {...props} />; }} />
            <Route path="/services/foundations--piling--footings" render={(props) => { return <ServicePageMain redirect="foundations" {...props} />; }} />
            <Route path="/services/masonry-repairs" render={(props) => { return <ServicePageMain redirect="masonry" {...props} />; }} />
            <Route path="/services/parging--foundation-repairs" render={(props) => { return <ServicePageMain redirect="foundations" {...props} />; }} />
            <Route path="/services/retaining-walls" render={(props) => { return <ServicePageMain redirect="walls" {...props} />; }} />
            <Route path="/services/stone-refacing" render={(props) => { return <ServicePageMain redirect="refacing" {...props} />; }} />
            <Route path="/services/stone-refacing-for-stucco-wood-and-siding" render={(props) => { return <ServicePageMain redirect="refacing" {...props} />; }} />
            <Route path="/services/window-sills" render={(props) => { return <ServicePageMain redirect="masonry" {...props} />; }} />

            {/* Route re-directs from old website, linking to anchors on the main page  */}
            <Route path="/our-commitment" render={(props) => { return <MainPage anchor="about-us" {...props} />; }} />
            <Route path="/our-history" render={(props) => { return <MainPage anchor="about-us" {...props} />; }} />
            <Route path="/testimonials" render={(props) => { return <MainPage anchor="testimonials" {...props} />; }} />
            <Route path="/contact-us" render={(props) => { return <MainPage anchor="service-area" {...props} />; }} />

            {/* New routes */}          
            <Route path="/services/:type" component={ServicePageMain} />
            <Route path="/services" component={ServicePageMain} />
            <Route component={MainPage} />
          </Switch>
          <Footer />
        </GlobalStyles>
      </MuiThemeProvider>
    </StyledApp>
  );
};

export default App;
