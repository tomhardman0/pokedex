import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import AbilitiesInfo from '../abilities-info/abilities-info';
import TypesInfo from '../types-info/types-info';

import styles from './info-tabs-styles';
import typeToColourStyles from '../../shared/type-to-colour';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

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

  _renderScene() {
    const { stats, abilities, types } = this.props.info;
    return SceneMap({
      stats: () => <StatsInfo data={stats} />,
      abilities: () => <AbilitiesInfo data={abilities} />,
      types: () => <TypesInfo data={types} />
    });
  }

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
    const headerBgColour = typeToColourStyles[this.props.info.types[0]];
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene()}
        renderHeader={(props) => this._renderHeader(props, headerBgColour)}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

InfoTabs.propTypes = {
  info: PropTypes.object.isRequired
};
