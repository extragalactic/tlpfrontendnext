import React, {Component} from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import styled, { injectGlobal } from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MainPage from '../components/MainPage';


// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}
/* eslint-disable */

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

class Index extends Component {
  static getInitialProps ({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return { userAgent }
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      open: false
    }
  }



  render () {
    return (
      <StyledApp>
      <MuiThemeProvider muiTheme={muiTheme}>
        <GlobalStyles>
        <TopBar/>
        <MainPage />
        <Footer/>
        </GlobalStyles>
      </MuiThemeProvider>
    </StyledApp>
    )
  }
}

export default Index
