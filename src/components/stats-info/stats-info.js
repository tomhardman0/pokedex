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

  _renderStatsTiles = (item) => {
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
  }

  render() {
    // reversing because i want them reversed, no actual reason
    return (
      <View style={styles.cont}>
        {this.props.data.map(this._renderStatsTiles).reverse()}
      </View>
    );
  }
}
