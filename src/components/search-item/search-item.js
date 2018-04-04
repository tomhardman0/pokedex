import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './search-item-styles';
import typeToColourStyles from '../../shared/type-to-colour';

const _renderTypeCircles = (types) => {
  return types.map((type) => {
    return (
      <View key={type} style={[styles.typeCircle, typeToColourStyles[type]]}>
        <Text style={styles.typeCircleText}>
          {`${type.charAt(0).toUpperCase()}${type.slice(1,2)}`}
        </Text>
      </View>
    );
  }).reverse();
};

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
          {`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}
        </Text>
        <View style={styles.typeCircleWrappers}>
          {_renderTypeCircles(item.types)}
        </View>
      </View>
    </TouchableOpacity>
  );
}
