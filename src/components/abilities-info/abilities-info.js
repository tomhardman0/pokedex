import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text
} from 'react-native';

import styles from './abilities-info-styles';

import abilityIdToDesc from '../../../config/abilities-to-desc.json';

import textManipulation from '../../libs/text';

export default class AbilitiesInfoTab extends Component {

  _renderAbilityInfo = (item) => {
    return (
      <View key={item.id} style={styles.ability}>
        <Text style={styles.abilityName}>
          {textManipulation.capitalise(item.name)}
        </Text>
        <Text style={styles.abilityDesc}>
          {abilityIdToDesc[item.id]}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.cont}>
        {this.props.data.map(this._renderAbilityInfo)}
      </ScrollView>
    );
  }
}

AbilitiesInfoTab.propTypes = {
  data: PropTypes.array.isRequired
};