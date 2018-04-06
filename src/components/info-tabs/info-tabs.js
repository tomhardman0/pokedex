import React, { Component } from 'react';
import {
  View,
  Dimensions
} from 'react-native';
import {
  TabViewAnimated,
  TabBar,
  SceneMap
} from 'react-native-tab-view';

import StatsInfo from '../stats-info/stats-info';

import styles from './info-tabs-styles';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#ffffff' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#ffffff' } ]} />;

export default class InfoTabs extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'stats', title: 'Stats' },
      { key: 'abilities', title: 'Abilities' },
      { key: 'types', title: 'Types' },
    ],
  }

  _handleIndexChange = (index) => {
    this.setState({ index });
  }

  _renderScene = SceneMap({
    stats: () => <StatsInfo />,
    abilities: SecondRoute,
    types: ThirdRoute
  })

  _renderHeader(props, bgColour) {
    return (
      <TabBar
        {...props}
        style={[styles.tabBar, bgColour]}
        labelStyle={styles.label}
        indicatorStyle={styles.indicator}
      />
    );
  }

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={(props) => this._renderHeader(props, this.props.backgroundColorStyle)}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
