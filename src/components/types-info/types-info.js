import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

import styles from './types-info-styles';

import TypeCircle from '../type-circle/type-circle';

import abilityIdToDesc from '../../../config/abilities-to-desc.json';

import textManipulation from '../../libs/text';

export default class TypesInfoTab extends Component {

  _renderTypesInfo = (type) => {
    return (
      <TypeCircle
        circleStyle={styles.circles}
        key={type}
        type={type}
        textStyle={styles.text}
      />
    );
  }

  render() {
    return (
      <View style={styles.cont}>
        {this.props.data.map(this._renderTypesInfo)}
      </View>
    );
  }
}

TypesInfoTab.propTypes = {
  data: PropTypes.array.isRequired
};
