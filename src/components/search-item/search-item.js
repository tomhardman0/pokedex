import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './search-item-styles';

export default ({ item }) => {
  return (
    <View style={styles.listItemCont}>
      <View style={styles.listItemNumberWrapper}>
        <Text style={styles.listItemNumber}>
          #{item.id}
        </Text>
      </View>
      <Text style={styles.listItem}>
        {`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}
      </Text>
    </View>
  );
}
