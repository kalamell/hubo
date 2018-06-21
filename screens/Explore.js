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
    TouchableOpacity,
    ListView,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
const { height, width } = Dimensions.get('window')
class Explore extends Component {

    constructor(){
        super();

        this.state={
         dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2}),
        }   
        
    }

    componentDidMount(){
         const { params } = this.props.navigation.state;
        //fetch('http://hardeepcoder.com/laravel/easyshop/api/products/' + params.id)
        fetch('http://www.huboffruit.com/index.php?route=api/product')
        .then((response) => response.json())
        .then((responseJson) =>{
            data = responseJson.products; // here we have all products data
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data)
            })
        })
        .catch((error) =>{
            console.error(error);
        });
        
    }

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="ค้นหา"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
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
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                ข้อมูลสินค้า
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                
                                </TouchableOpacity>
                                <ListView
                                    dataSource={this.state.dataSource}
                                    renderRow={(rowData)=>
                                    
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail') }>
                                            <Home width={width}
                                                name="ทุเรียน"
                                                type="ผลไม้ตามฤดูกาล"
                                                price={82}
                                                rating={4}
                                            />
                                        </TouchableOpacity>

                                    }
                                />

                            </View>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});