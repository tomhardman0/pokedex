import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Text
} from 'react-native';

import styles from './abilities-info-styles';

import mapsHoc from '../maps-hoc/maps-hoc';

import textManipulation from '../../libs/text';

class AbilitiesInfoTab extends Component {

  _renderAbilityInfo = (item, abilityIdToDesc) => {
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
    const { data, abilityIdToDesc } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.cont}>
        {data.map((item) => this._renderAbilityInfo(item, abilityIdToDesc))}
      </ScrollView>
    );
  }
}

AbilitiesInfoTab.propTypes = {
  data: PropTypes.array.isRequired,
  abilityIdToDesc: PropTypes.object.isRequired
};

export default mapsHoc(AbilitiesInfoTab);
