import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';

import defaultHeaderStyles from '../../shared/default-header';
import styles from './explorer-styles';

import explorerConfig from './config.json';

import BackButton from '../back-button/back-button';

export default class Explorer extends Component {
  static navigationOptions = {
    title: 'Explorer',
    ...defaultHeaderStyles
  }

  _renderTypeTile(datum) {
    return (
      <TouchableOpacity style={styles.listItem}>;
        <View style={styles.tileContainer}>
          <Image
            style={styles.tileImage}
            source={require('../../../assets/fire.png')}
          />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    console.log(explorerConfig)
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackButton goBack={goBack} />
        <FlatList
          data={explorerConfig}
          numColumns={2}
          renderItem={this._renderTypeTile}
        />
      </View>
    );
  }
}
