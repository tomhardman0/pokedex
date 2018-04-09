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

import GenericContainer from '../generic-container/generic-container';
import SearchInput from '../search-input/search-input';
import SearchItem from '../search-item/search-item';
import Separator from '../separator/separator';

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
      searchText: '',
      typeFilter: this.props.navigation.state.params.typeFilter,
      data: allData
    };
  }

  _keyExtractor(item) {
    return item.id.toString();
  }

  filterDataForTypefilter() {
    const { data, typeFilter } = this.state;

    if (!typeFilter) {
      return data;
    }
    return data.filter((datum) => {
      return datum.types.includes(typeFilter);
    });
  }

  filterDataForSearch(searchText) {
    const { data, typeFilter } = this.state;

    if (typeFilter && !searchText) {
      return this.filterDataForTypefilter();
    }

    const normalizedSearchText = searchText.toLowerCase().replace(' ', '-');
    return this.filterDataForTypefilter().filter((datum) => {
      return datum.name.match(normalizedSearchText);
    });
  }

  handleSearch(text) {
    this.setState({
      searchText: text
    });
  }

  _renderSearchItem(item, navigate) {
    return (
      <SearchItem
        item={item}
        navigate={navigate}
      />
    );
  }

  render() {
    const { goBack, navigate } = this.props.navigation;
    const { state } = this;
    return (
      <GenericContainer goBack={goBack}>
        <SearchInput
          placeholder={PLACEHOLDER_TEXT}
          handleSearch={this.handleSearch.bind(this)}
          text={state.searchText}
        />
        <View style={styles.listCont}>
          <FlatList
            data={this.filterDataForSearch(state.searchText)}
            renderItem={(item) => this._renderSearchItem(item.item, navigate)}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={Separator}
            initialNumToRender={12}
          />
        </View>
      </GenericContainer>
    );
  }
}
