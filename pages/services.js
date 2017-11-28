import React from "react";
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../components/muiTheme';
import GlobalStyles from '../components/globalStyles';
import ServicesPageMain from "../components/ServicePageMain";
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const StyledApp = styled.section`
  text-align: center;
  position: relative;
  margin: auto;
  width: 100%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  font-weight: 'lighter';
`;

class Services extends React.Component {
  static async getInitialProps({ query }) {
    return { query }
  }

  render() {
    return(
      <StyledApp>
        <MuiThemeProvider muiTheme={muiTheme}>
          <GlobalStyles>
            <TopBar/>
            <ServicesPageMain page={this.props.query.page} />
            <Footer/>
          </GlobalStyles>
        </MuiThemeProvider>
      </StyledApp>
    );
  }
}

export default Services;
