import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MediaQuery from 'react-responsive';
import ServiceData from './ServiceData';

// styled-components needs this small workaround to pass in a custom prop when wrapping another component to prevent an 'unknown prop' warning
const StyledTabs = styled(({ isBottomRow, ...rest }) => { return <Tabs {...rest} />; })`
  margin-top: ${(props) => { return props.isBottomRow ? 0 : 30; }}px;
`;

// create all tabs for wide screens
const allServicesTabs = ServiceData.map((service, i) => {
  return (
    <Tab label={service.pageName} value={i} key={service.pageName} />
  );
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

  handleChange(value) {
    this.setState({
      selectedTab: value,
    });
  }

  render() {
    return (
      // the media queries determine if the tabs are displayed on 1 or 2 rows
      <div>
        <MediaQuery minWidth={1} maxWidth={624}>
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
          ref={(view) => { this.swipeableViewsRef = view; }}
        >
          {this.props.pageContent}
        </SwipeableViews>
      </div>
    );
  }
}
ServicesTabsNav.propTypes = {
  pageContent: PropTypes.array.isRequired,
  startIndex: PropTypes.number,
  variableHeight: PropTypes.bool,
};
ServicesTabsNav.defaultProps = {
  startIndex: 0,
  variableHeight: false,
};

export default ServicesTabsNav;

/*
          style={{ height: '100%' }}
          containerStyle={{ height: '100%' }}
          slideStyle={{ height: '100%' }}
*/
