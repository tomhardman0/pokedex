import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './stats-info-styles';

const displayNameMap = {
  'attack': 'Attack',
  'defense': 'Defense',
  'hp': 'HP',
  'special-attack': 'Special Attack',
  'special-defense': 'Special Defense',
  'speed': 'Speed'
};

export default class StatsInfoTab extends Component {

  _renderStatsTiles = () => {
    return this.props.data.map((item) => {
      return (
        <View key={item.name} style={styles.statBlock}>
          <Text style={styles.tileTag}>
            {displayNameMap[item.name]}
          </Text>
          <Text style={styles.tileNum}>
            {item.num}
          </Text>
        </View>
      );
    }).reverse();
  }

  render() {
    return (
      <View style={styles.cont}>
        {this._renderStatsTiles()}
      </View>
    );
  }
}
