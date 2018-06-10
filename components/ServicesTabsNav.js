import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MediaQuery from 'react-responsive';
import ServiceData from './ServiceData';
import ServicePage from './ServicePage';
import ServiceThumbnail from './ServiceThumbnail';

// styled-components needs this small workaround to pass in a custom prop when wrapping another component to prevent an 'unknown prop' warning
const StyledTabs = styled(({ isBottomRow, ...rest }) => {
  return <Tabs {...rest} />;
})`
  margin-top: ${(props) => {
    return props.isBottomRow ? 0 : 30;
  }}px;
  overflow-x: hidden;
`;

// create all tabs for wide screens
const allServicesTabs = ServiceData.map((service, i) => {
  return <Tab label={service.pageName} value={i} key={service.pageName} />;
});

// split the tabs menu into 2 rows on small screens
const servicesTabsRow1 = ServiceData.map((service, i) => {
  let val = <Tab label={service.pageName} value={i} key={service.pageName} />;
  if (i > 2) {
    val = null;
  }
  return val;
});
const servicesTabsRow2 = ServiceData.map((service, i) => {
  let val = <Tab label={service.pageName} value={i} key={service.pageName} />;
  if (i < 3) {
    val = null;
  }
  return val;
});

class ServicesTabsNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.startIndex,
    };
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.refresh = this.refresh.bind(this);
    this.allServices = this.allServices.bind(this);
    this.swipeableViewsRef = null;
  }

  componentDidMount() {
    // This is a solution to ensure the height calculation occurs after the DOM is fully rendered. Otherwise, componentDidMount() fires before the DOM is rendered which caused the height calc to fail (this is unexpected React behavior)
    setTimeout(() => {
      window.requestAnimationFrame(() => {
        this.swipeableViewsRef.updateHeight();
      });
    }, 10);
  }

  // ****
  // Note: need to updateHeight onResize (via react-window-resize-listener maybe?)
  // ****

  handleChange(value) {
    this.setState({
      selectedTab: value,
    });
  }

  // This refresh to recalculate the screen height needs to be called *after* the MaterialUI Card gets expanded, but there is no callback to know when the expansion is complete, so instead we'll wait a few milliseconds.
  refresh() {
    setTimeout(() => {
      this.swipeableViewsRef.updateHeight();
    }, 25);
  }

  allServices() {
    if (this.props.bIsMainPage) {
      return ServiceData.map((service) => {
        return (
          <div key={service.pageName} style={{ overflowX: 'hidden' }}>
            <ServiceThumbnail service={service} />
          </div>
        );
      });
    }
    return ServiceData.map((service) => {
      return (
        <div key={service.pageName} style={{ overflowY: 'auto' }}>
          <ServicePage
            serviceType={service.pageName}
            openChat={this.props.openChat}
            refresh={this.refresh}
            selectedTab={this.state.selectedTab}
          />
        </div>
      );
    });
  }

  render() {
    return (
      // the media queries determine if the tabs are displayed on 1 or 2 rows
      <div>
        <MediaQuery minWidth={1} maxWidth={624} values={{ width: 600 }}>
          <StyledTabs
            onChange={this.handleChange}
            value={this.state.selectedTab}
          >
            {servicesTabsRow1}
          </StyledTabs>
          <StyledTabs
            isBottomRow
            onChange={this.handleChange}
            value={this.state.selectedTab}
          >
            {servicesTabsRow2}
          </StyledTabs>
        </MediaQuery>
        <MediaQuery minWidth={625}>
          <StyledTabs
            onChange={this.handleChange}
            value={this.state.selectedTab}
          >
            {allServicesTabs}
          </StyledTabs>
        </MediaQuery>
        <SwipeableViews
          index={this.state.selectedTab}
          onChangeIndex={this.handleChange}
          animateHeight={this.props.variableHeight}
          animateTransitions={false}
          ref={(view) => {
            this.swipeableViewsRef = view;
          }}
        >
          {this.allServices()}
        </SwipeableViews>
      </div>
    );
  }
}

ServicesTabsNav.propTypes = {
  startIndex: PropTypes.number,
  variableHeight: PropTypes.bool,
  openChat: PropTypes.func,
  bIsMainPage: PropTypes.bool,
};
ServicesTabsNav.defaultProps = {
  startIndex: 0,
  variableHeight: false,
  bIsMainPage: false,
};

export default ServicesTabsNav;
