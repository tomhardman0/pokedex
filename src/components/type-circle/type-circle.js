import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

import styles from './type-circle-styles';

import mapsHoc from '../maps-hoc/maps-hoc';

import textManipulation from '../../libs/text';

function TypeCircle({ type, circleStyle, textStyle, shortenedType, typeColourMap }) {
  const capitalised = textManipulation.capitalise(type);
  const text = shortenedType ? capitalised.slice(0,2) : capitalised;
  return (
    <View style={[styles.typeCircle, typeColourMap[type], circleStyle]}>
      <Text style={[styles.typeCircleText, textStyle]}>
        {text}
      </Text>
    </View>
  );
}

TypeCircle.propTypes = {
  type: PropTypes.string.isRequired,
  circleStyle: PropTypes.number,
  textStyle: PropTypes.number,
  shortenedType: PropTypes.bool
};

export default mapsHoc(TypeCircle);
