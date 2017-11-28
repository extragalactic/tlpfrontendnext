import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MainPage from '../components/MainPage';
import muiTheme from '../components/muiTheme';
import GlobalStyles from '../components/globalStyles';


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
  font-family: 'Open Sans', sans-serif;
  font-weight: 'lighter';
`;


class Index extends Component {
  static getInitialProps ({ req, query }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return { userAgent, query }
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
            <TopBar redirect={this.props.query.redirect} />
            <MainPage />
            <Footer />
          </GlobalStyles>
        </MuiThemeProvider>
      </StyledApp>
    )
  }
}

export default Index
