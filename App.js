/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './src/components/home/home';
import TypeExplorer from './src/components/type-explorer/type-explorer';
import ExplorerNavigation from './src/components/explorer-navigation/explorer-navigation';
import Search from './src/components/search/search';

export default App = StackNavigator({
  Home: { screen: Home },
  ExplorerNavigation: { screen: ExplorerNavigation },
  TypeExplorer: { screen: TypeExplorer },
  Search: { screen: Search }
});
