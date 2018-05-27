import React from "react";
import Head from "next/head";
import styled from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "../components/styles/muiTheme";
import GlobalStyles from "../components/styles/globalStyles";
import TopBar from "../components/Topbar";
import Footer from "../components/Footer";
import ServicesPageMain from "../components/ServicePageMain";
import StructuredData from '../components/StructuredData';


const StyledApp = styled.section`
  text-align: center;
  position: relative;
  margin: -8px;
  width: 100%;
  flex: 1;
  font-family: "Open Sans", sans-serif;
  font-weight: "lighter";
`;

class Services extends React.Component {
  static getInitialProps({ req, query }) {
    let userAgent;
    if (process.browser) {
      userAgent = navigator.userAgent;
    } else {
      userAgent = req.headers["user-agent"];
    }
    const amp = query.amp == "1";
    const url = req ? req.url : window.location.href;
    const ampUrl = amp ? url.replace("?amp=1", "") : `${url}?amp=1`;

    return { userAgent, query, ampUrl };
  }

  state = {
    isOpen: false
  };
  handleClick = () => {
    this.setState(currentState => {
      return { isOpen: !currentState.isOpen };
    });
  };

  render() {
    const { ampUrl } = this.props;
    return (
      <div className="page">
        <Head>
          <link rel="amphtml" href={ampUrl} />
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
        <StyledApp>
          <MuiThemeProvider muiTheme={muiTheme}>
            <GlobalStyles>
              <TopBar
                redirect={this.props.query.redirect}
                handleClick={this.handleClick}
              />
              <ServicesPageMain
                page={this.props.query.page}
                isOpen={this.state.isOpen}
                handleClick={this.handleClick}
              />
              <Footer />
            </GlobalStyles>
          </MuiThemeProvider>
        </StyledApp>
      </div>
    );
  }
}

export default Services;
