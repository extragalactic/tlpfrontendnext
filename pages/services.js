import React from "react";
import Head from 'next/head'
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../components/styles/muiTheme';
import GlobalStyles from '../components/styles/globalStyles';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import ServicesPageMain from "../components/ServicePageMain";


const StyledApp = styled.section`
  text-align: center;
  position: relative;
  margin: -8px;
  width: 100%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  font-weight: 'lighter';
`;

class Services extends React.Component {
  static getInitialProps ({ req, query }) {
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }
    const amp = query.amp == '1'
    const url = req ? req.url : window.location.href
    const ampUrl = amp ? url.replace('?amp=1', '') : url + '?amp=1'

    return { userAgent, query, ampUrl }
  }

  render() {
    const { ampUrl } = this.props;
    return (
      <div className="page">
        <Head>
          <link rel="amphtml" href={ampUrl} />
        </Head>
        <StyledApp>
          <MuiThemeProvider muiTheme={muiTheme}>
            <GlobalStyles>
              <TopBar/>
              <ServicesPageMain page={this.props.query.page} />
              <Footer/>
            </GlobalStyles>
          </MuiThemeProvider>
        </StyledApp>
      </div>
    );
  }
}

export default Services;
