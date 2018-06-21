import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const img = 'http://www.huboffruit.com/image/catalog/mainweb_banner_slide/bigbanner1.jpg';
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FF7043',
    height: 70,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    paddingTop: 15
  },
  thumbnail: {
    height: 50
  }
});
const Banner = () => (<View style={styles.wrapper}>
  <Image source={{ uri: img }} style={styles.thumbnail} />
</View>);

export default Banner;