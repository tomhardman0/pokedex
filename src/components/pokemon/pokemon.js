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

import GenericContainer from '../generic-container/generic-container';
import InfoTabs from '../info-tabs/info-tabs';
import mapsHoc from '../maps-hoc/maps-hoc';

import textManipulation from '../../libs/text';

class Pokemon extends Component {

  render() {
    const { goBack, state } = this.props.navigation;
    const { types, abilities, stats, id, name } = state.params;
    return (
      <GenericContainer
        extraStyles={this.props.typeColourMap[types[0]]}
        goBack={goBack}>

          <View style={styles.imageCont}>
            <Image
              style={styles.image}
              source={this.props.idToImageMap[id]}
            />
          </View>
          <Text style={styles.name}>
            {textManipulation.capitalise(name)}
          </Text>

          <InfoTabs info={state.params} />

      </GenericContainer>
    );
  }
}

const PokemonWithMaps = mapsHoc(Pokemon);
PokemonWithMaps.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.name,
    ...defaultHeaderStyles
  };
};
export default PokemonWithMaps;
