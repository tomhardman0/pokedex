import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './stats-info-styles';

export default class StatsInfoTab extends Component {

  _renderTemp = () => {
    const arr = [1,2,3,4,5,6]
    return arr.map((item) => {
      return (
        <View key={item} style={styles.statBlock}>
          <Text style={styles.tileTag}>
            Health points
          </Text>
          <Text style={styles.tileNum}>
            50
          </Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.cont}>
        {this._renderTemp()}
      </View>
    );
  }
}
