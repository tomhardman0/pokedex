import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import BackButton from '../back-button/back-button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default (props) => {
  const { goBack, extraStyles, children } = props;
  return (
    <View style={[styles.container, extraStyles]}>
      <BackButton goBack={goBack} />
      {children}
    </View>
  );
}
