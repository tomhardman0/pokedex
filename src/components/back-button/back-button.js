import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './back-button-styles';

export default class BackButton extends Component {
  render() {
    const { goBack } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={()=> goBack()}>
        <Image
          style={styles.icon}
          source={require('../../../assets/back-button.png')}
          onPress={() => goBack()}
        />
      </TouchableOpacity>
    );
  }
}
