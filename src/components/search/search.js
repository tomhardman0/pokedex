import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import defaultHeaderStyles from '../../shared/default-header';
import styles from './search-styles';

import BackButton from '../back-button/back-button';

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
    ...defaultHeaderStyles
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackButton goBack={goBack} />
      </View>
    );
  }
}
