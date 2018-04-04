import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text
} from 'react-native';

import defaultHeaderStyles from '../../shared/default-header';
import styles from './search-styles';

import BackButton from '../back-button/back-button';
import SearchInput from '../search-input/search-input';
import SearchItem from '../search-item/search-item';

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
      searchText: PLACEHOLDER_TEXT,
      typeFilter: this.props.navigation.state.params.typeFilter,
      data: allData
    };
  }

  _keyExtractor(item) {
    return item.id.toString();
  }

  filterDataForTypefilter() {
    const { data, typeFilter } = this.state;
    console.log(this.state)

    if (!typeFilter) {
      return data;
    }
    return data.filter((datum) => {
      return datum.types.includes(typeFilter);
    });
  }

  filterDataForSearch(searchText) {
    const { data, typeFilter } = this.state;

    if (searchText === PLACEHOLDER_TEXT && !typeFilter) {
      return data;
    }

    if (searchText === PLACEHOLDER_TEXT && typeFilter) {
      return this.filterDataForTypefilter();
    }

    return this.filterDataForTypefilter().filter((datum) => {
      return datum.name.match(searchText);
    });
  }

  _renderListItemSeparator() {
    return (
      <View
        style={{
          borderBottomColor: 'rgba(0, 0, 0, 0.1)',
          borderBottomWidth: 1
        }}
      />
    );
  }

  handleSearch(text) {
    this.setState({
      searchText: text.toLowerCase()
    });
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
            data={this.filterDataForSearch(state.searchText)}
            renderItem={SearchItem}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this._renderListItemSeparator}
          />
        </View>
      </View>
    );
  }
}
