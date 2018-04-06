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

import textManipulation from '../../libs/text';

export default class ExplorerNavigation extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.name,
      ...defaultHeaderStyles
    };
  }

  render() {
    const { goBack, state } = this.props.navigation;
    const { types, abilities, stats, id, name } = state.params;
    return (
      <View style={[styles.container, typeToColourStyles[types[0]]]}>
        <BackButton goBack={goBack} />

        <View style={styles.imageCont}>
          <Image
            style={styles.image}
            source={idToImageMap[id]}
          />
        </View>
        <Text style={styles.name}>
          {textManipulation.capitalise(name)}
        </Text>

        <InfoTabs info={state.params} />

      </View>
    );
  }
}
