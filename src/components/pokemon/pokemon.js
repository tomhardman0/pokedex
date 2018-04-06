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
import styles from './pokemon-styles';

import BackButton from '../back-button/back-button';
import InfoTabs from '../info-tabs/info-tabs';

import idToImageMap from '../../../config/id-to-image';
import typeToColourStyles from '../../shared/type-to-colour';

export default class ExplorerNavigation extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.name,
      ...defaultHeaderStyles
    };
  }

  render() {
    const { goBack, state } = this.props.navigation;
    return (
      <View style={styles.container}>
        <BackButton goBack={goBack} />

        <View style={[styles.imageCont, typeToColourStyles[state.params.types[0]]]}>
          <Image
            style={styles.image}
            source={idToImageMap[state.params.id]}
          />
        </View>

        <InfoTabs backgroundColorStyle={typeToColourStyles[state.params.types[0]]} />

      </View>
    );
  }
}
