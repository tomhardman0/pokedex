import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';

import defaultHeaderStyles from '../../shared/default-header';
import styles from './explorer-navigation-styles';

import BackButton from '../back-button/back-button';

export default class ExplorerNavigation extends Component {
  static navigationOptions = {
    title: 'Explorer Navigation',
    ...defaultHeaderStyles
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackButton goBack={goBack} />
        <TouchableOpacity style={styles.tile}>;
          <Text style={styles.tileText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile} onPress={() => navigate('TypeExplorer')}>;
          <Text style={styles.tileText}>Type</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>;
          <Text style={styles.tileText}>Something else</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
