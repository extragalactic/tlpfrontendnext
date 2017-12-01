import React from "react";
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
