import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Header, Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
export default class ListHome extends Component {
  render() {
    return (
       <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail', {
          name: this.props.name,
          description: this.props.description,
          image: this.props.image,
          price: this.props.price,
          url: this.props.url,
        })} title={this.props.name} style={{ backgroundColor: '#fff'}}>
      <View style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 -30,
          borderWidth: 0.5,
          borderColor: '#ccc',
          marginBottom: 5
        }}>
        <View style={{ flex: 1}}>
          <Image 
            source={{uri: this.props.image}}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
          />
        </View>
       <View style={{ marginTop: 10}}>
        <Text style={{ "textAlign": "center"}}>{this.props.name}</Text>
        </View>

      </View>
      </TouchableOpacity>
      
    );
  }
}
