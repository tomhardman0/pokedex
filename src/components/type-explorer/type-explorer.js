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
import typeToColourStyles from '../../shared/type-to-colour';

import typeExplorerConfig from '../../../config/type-explorer-config';

import BackButton from '../back-button/back-button';

export default class TypeExplorer extends Component {
  static navigationOptions = {
    title: 'Explorer',
    ...defaultHeaderStyles
  }

  _renderTypeTile = (datum, navigate) => {
    const { item } = datum;
    const searchOptions = {
      title: `Search ${item.name} types`,
      typeFilter: item.name
    };

    return (
      <TouchableOpacity
        style={[styles.listItem, typeToColourStyles[item.name]]}
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
      <View style={styles.container}>
        <BackButton goBack={goBack} />
        <FlatList
          data={typeExplorerConfig}
          numColumns={2}
          renderItem={this._renderTypeTile}
          renderItem={(item) => this._renderTypeTile(item, navigate)}
          initialNumToRender={8}
        />
      </View>
    );
  }
}
