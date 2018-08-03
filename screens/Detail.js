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
    Dimensions,
    Button,
    Linking
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
        const { state } = this.props.navigation;

        return (
            
            <View style={{ flex: 1 }}>
                
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0 }}>
                        
                        <View style={{ marginTop: 0, paddingHorizontal: 20 }}>
                            
                            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={{uri: state.params.image }}
                                />

                            </View>
                        </View>

                        <View style={{ marginTop: 40 }}>

                            <Button title="Add to Cart" style={{ paddingTop: 20, paddingBottom: 20 }} onPress={() => Linking.openURL('http://www.huboffruit.com/index.php?route=product/product&product_id=' + state.params.product_id)}/>



                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                {state.params.name}
                            </Text>

                            <Text style={{ fontSize: 24, fontWeight: '20', paddingHorizontal: 20 }}>
                                {state.params.description}
                            </Text>

                            <Text style={{ fontSize: 24, fontWeight: '20', paddingHorizontal: 20 }}>
                                PRICE {state.params.price}
                            </Text>

                            
                            
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