import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
/*import Icon from 'react-native-vector-icons/Ionicons';*/

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FF7043',
    height: 70,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  }
});
const ListHeader = () => (<View style={styles.wrapper}>
  
  <Text style={styles.text}>ข้อมูลสินค้าต่าง ๆ </Text>
  <Text>{' '}</Text>
</View>);

export default ListHeader;
