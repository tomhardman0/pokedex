import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './search-item-styles';

import TypeCircle from '../type-circle/type-circle';

import textManipulation from '../../libs/text';

export default function SearchItem({ item, navigate }) {
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

SearchItem.propTypes = {
  item: PropTypes.object.isRequired
};
