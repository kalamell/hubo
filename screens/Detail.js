import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
const { height, width } = Dimensions.get('window')
class Detail extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                
                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0 }}>
                        
                        <View style={{ marginTop: 0, paddingHorizontal: 20 }}>
                            
                            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={require('../assets/bigbanner1.jpg')}
                                />

                            </View>
                        </View>

                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                ข้อมูลสินค้า
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Home width={width}
                                    name="ทุเรียน"
                                    type="ผลไม้ตามฤดูกาล"
                                    price={82}
                                    rating={4}
                                />
                                <Home width={width}
                                    name="ทุเรียน"
                                    type="ผลไม้ตามฤดูกาล"
                                    price={82}
                                    rating={5}
                                />
                                <Home width={width}
                                    name="ทุเรียน"
                                    type="ผลไม้ตามฤดูกาล"
                                    price={82}
                                    rating={4}
                                />
                            </View>
                        </View>


                    </View>
                    
                </ScrollView>

            </View>

        );
    }
}
export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});