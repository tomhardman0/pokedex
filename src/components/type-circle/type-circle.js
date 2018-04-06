import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './type-circle-styles';
import typeToColourStyles from '../../shared/type-to-colour';

import textManipulation from '../../libs/text';

export default ({ type, circleStyle, textStyle, shortenedType }) => {
  const capitalised = textManipulation.capitalise(type);
  const text = shortenedType ? capitalised.slice(0,2) : capitalised;
  return (
    <View style={[styles.typeCircle, typeToColourStyles[type], circleStyle]}>
      <Text style={[styles.typeCircleText, textStyle]}>
        {text}
      </Text>
    </View>
  );
}
