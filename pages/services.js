import React from "react";
import ServicesPageMain from "../components/ServicePageMain";


class Services extends React.Component {
  static async getInitialProps({ query }) {
    return { query }
  }

  render() {
    return(
      <ServicesPageMain page={this.props.query.page} />
    );
  }

}

export default Services;
