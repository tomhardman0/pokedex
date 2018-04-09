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

import GenericContainer from '../generic-container/generic-container';

export default class ExplorerNavigation extends Component {
  static navigationOptions = {
    title: 'Explorer Navigation',
    ...defaultHeaderStyles
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    return (
      <GenericContainer goBack={goBack}>

        <TouchableOpacity
          style={styles.tile}
          onPress={() => navigate('Search', { title: 'Explore All' })}>;
            <View style={styles.tileImageCont}>
              <Image
                style={styles.tileImage}
                source={require('../../../assets/explorer/all.jpg')}
              />
            </View>
            <View style={[styles.tileImageCont, styles.tileImageLayer]} />

            <Text style={styles.tileText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tile}
          onPress={() => navigate('TypeExplorer')}>;
            <View style={styles.tileImageCont}>
              <Image
                style={styles.tileImage}
                source={require('../../../assets/explorer/type.png')}
              />
            </View>
            <View style={[styles.tileImageCont, styles.tileImageLayer]} />

            <Text style={styles.tileText}>Type</Text>
        </TouchableOpacity>
      </GenericContainer>
    );
  }
}
