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
import Explorer from './src/components/explorer/explorer';
import Search from './src/components/search/search';

export default App = StackNavigator({
  Home: { screen: Home },
  Explorer: { screen: Explorer },
  Search: { screen: Search }
});
