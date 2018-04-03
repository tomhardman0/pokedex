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
import styles from './search-styles';

import BackButton from '../back-button/back-button';
import SearchInput from '../search-input/search-input';

import allData from '../../../config/app-data.json';

const PLACEHOLDER_TEXT = 'Search...';

export default class ListView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      ...defaultHeaderStyles
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      searchText: PLACEHOLDER_TEXT
    };
  }

  _keyExtractor(item) {
    return item.id.toString();
  }

  _renderListItem({ item }) {
    return (
      <Text style={styles.listItem}>
        {item.name}
      </Text>
    );
  }

  filterData(searchText) {
    if (this.state.searchText === PLACEHOLDER_TEXT) {
      return allData;
    }

    console.log(searchText)
    return allData.filter((datum) => {
      return datum.name.match(searchText);
      // return /searchText/.test(datum.name);
    });
  }

  handleSearch(text) {
    console.log(text)
    this.setState({ searchText: text.toLowerCase() })
  }

  render() {
    const { goBack } = this.props.navigation;
    const { state } = this;
    return (
      <View style={styles.container}>
        <BackButton goBack={goBack} />
        <SearchInput
          handleSearch={this.handleSearch.bind(this)}
          text={state.searchText}
        />
        <View style={styles.listCont}>
          <FlatList
            data={this.filterData(state.searchText)}
            renderItem={this._renderListItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </View>
    );
  }
}
