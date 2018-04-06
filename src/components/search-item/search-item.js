import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './search-item-styles';
import typeToColourStyles from '../../shared/type-to-colour';

import TypeCircle from '../type-circle/type-circle';

import textManipulation from '../../libs/text';

export default ({ item, navigate }) => {
  return (
    <TouchableOpacity onPress={() => navigate('Pokemon', item)}>
      <View style={styles.listItemCont}>
        <View style={styles.listItemNumberWrapper}>
          <Text style={styles.listItemNumber}>
            #{item.id}
          </Text>
        </View>
        <Text style={styles.listItem}>
          {textManipulation.capitalise(item.name)}
        </Text>
        <View style={styles.typeCircleWrappers}>
          {item.types.map((type) => <TypeCircle shortenedType={true} key={type} type={type} />)}
        </View>
      </View>
    </TouchableOpacity>
  );
}
