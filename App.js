import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

import Search from './components/Search';

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  ProductDetail: {
    screen: ProductDetail
  },
  Search: {
    screen: Search
  }
})

