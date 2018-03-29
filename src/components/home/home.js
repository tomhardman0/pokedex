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

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    ...defaultHeaderStyles
  }

  render() {
    const { navigate } = this.props.navigation;
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
          title="Explore"
          onPress={() =>
            navigate('Explorer')
          }
        />
      </View>
    );
  }
}
