import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';

import styles from './search-input-styles';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text };
  }

  render() {
    const { props } = this;
    return (
      <View style={styles.inputCont}>
        <TextInput
          style={styles.input}
          onChangeText={props.handleSearch}
          value={props.text}
        />
      </View>
    );
  }
}
