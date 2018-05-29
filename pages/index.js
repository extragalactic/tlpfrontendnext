import React, { Component } from 'react';
import Head from 'next/head';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styled from 'styled-components';
import TopBar from '../components/Topbar';
import Footer from '../components/Footer';
import MainPage from '../components/MainPage';
import muiTheme from '../components/styles/muiTheme';
import GlobalStyles from '../components/styles/globalStyles';
import AmpPageBody from '../components/AmpPageBody';
import StructuredData from '../components/StructuredData';

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}
/* eslint-disable */

const StyledApp = styled.section`
  text-align: center;
  position: relative;
  margin: -8px;
  width: 100%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`;

class Index extends Component {
  static getInitialProps({ req, query }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent;
    if (process.browser) {
      userAgent = navigator.userAgent;
    } else {
      userAgent = req.headers['user-agent'];
    }
    const amp = query.amp == '1';
    const url = req ? req.url : window.location.href;
    const ampUrl = amp ? url.replace('?amp=1', '') : url + '?amp=1';

    return { userAgent, query, amp, ampUrl };
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState(currentState => ({ isOpen: !currentState.isOpen }));
  };

  render() {
    const { amp, ampUrl } = this.props;
    return (
      <div className="page">
        <Head>
          {amp ? (
            <link rel="canonical" href={ampUrl} />
          ) : (
            <link rel="amphtml" href={ampUrl} />
          )}
        </Head>
        {amp ? (
          <AmpPageBody />
        ) : (
          <StyledApp>
            <Head>
              <StructuredData />
              <title>
                Three Little Pigs Masonry | Masonry and Concrete Experts
              </title>
              <meta
                property="description"
                content="Three Little Pigs Masonry provides high quality masonry restoration and renovation services for the GTA home and business owner."
              />
              <meta
                property="keywords"
                content="stone, brick, concrete, refacing, parging, masonry"
              />
            </Head>
            <MuiThemeProvider muiTheme={muiTheme}>
              <GlobalStyles>
                <TopBar
                  redirect={this.props.query.redirect}
                  handleClick={this.handleClick}
                />
                <MainPage
                  isOpen={this.state.isOpen}
                  handleClick={this.handleClick}
                />
                <Footer />
              </GlobalStyles>
            </MuiThemeProvider>
          </StyledApp>
        )}
      </div>
    );
  }
}

export default Index;
