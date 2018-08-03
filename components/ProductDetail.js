import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,Linking, Dimensions } from 'react-native';
import { Header, Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

export default class ProductDetail extends Component {
  render() {
    const { state } = this.props.navigation;
    return (
      <View style={{
        flex: 1
      }}>
        
        <View style={{ flex: 1, width: BannerWidth, height: BannerHeight}}>
          <Image 
            source={{uri: state.params.image}}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
          />
        </View>
        <View style={{ padding: 10}}>
          <Text style={{fontSize: 22, marginBottom: 10}}>{state.params.name}</Text>
          <Text>{state.params.description}</Text>
        </View>
        
        <View style={{ padding: 10, marginBottom: 20 }}>
          <Button title="Add to Cart" onPress={() => Linking.openURL(state.params.url)}></Button>
        </View>

      </View>
      
    );
  }
}
