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
import styles from './type-explorer-styles';

import typeExplorerConfig from '../../../config/type-explorer-config';

import GenericContainer from '../generic-container/generic-container';
import mapsHoc from '../maps-hoc/maps-hoc';

class TypeExplorer extends Component {

  _renderTypeTile = (datum, navigate, typeColourMap) => {
    const { item } = datum;
    const searchOptions = {
      title: `Search ${item.name} types`,
      typeFilter: item.name
    };

    return (
      <TouchableOpacity
        style={[styles.listItem, typeColourMap[item.name]]}
        onPress={() => navigate('Search', searchOptions)}>;
          <View style={styles.tileContainer}>
            <Image
              style={styles.tileImage}
              source={item.reqPath}
            />
          </View>

          <Text style={styles.tileText}>{`${item.name.charAt(0).toUpperCase()}${item.name.slice(1)}`}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    return (
      <GenericContainer goBack={goBack}>
        <FlatList
          data={typeExplorerConfig}
          numColumns={2}
          renderItem={this._renderTypeTile}
          renderItem={(item) => this._renderTypeTile(item, navigate, this.props.typeColourMap)}
          initialNumToRender={8}
        />
      </GenericContainer>
    );
  }
}

const TypeExplorerWithMaps = mapsHoc(TypeExplorer);
TypeExplorerWithMaps.navigationOptions = {
  title: 'Explorer',
  ...defaultHeaderStyles
};
export default TypeExplorerWithMaps;
