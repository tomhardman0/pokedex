import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import defaultHeaderStyles from '../../shared/default-header';
import styles from './home-styles';

import appData from '../../../config/app-data.json';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    ...defaultHeaderStyles
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(appData)
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/pokeball.png')}
        />
        <Text style={styles.title}>
          Pokedex
        </Text>
        <Button
          style={styles.button}
          title='Explore'
          color='#ffffff'
          onPress={() => navigate('ExplorerNavigation')}
        />
        <Button
          style={styles.button}
          title='Search'
          color='#ffffff'
          onPress={() => navigate('Search')}
        />
      </View>
    );
  }
}
