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
    Dimensions,
    ListView,
    Linking,
    Button
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
import Carousel from 'react-native-banner-carousel';
import Modal from 'react-native-modal';
const { height, width } = Dimensions.get('window')
class Explore extends Component {

    static navigationOptions = {
        headerRight: <Icon name="ios-menu" style={{ paddingRight: 15 }} size={35} onPress={() => this._toggleModal} />
    }



    constructor() {
        super();
        this.state = {
            products: [],
            isLoading: true,
            banner: [],
            isModalVisible: false
        }
    }
    _toggleModal() {
        
        console.log('toggle');
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    _onserch() {

    }



    componentDidMount() {
        const { params } = this.props.navigation.state;
        fetch('http://www.huboffruit.com/index.php?route=api/product')
        .then((res) => res.json())
        .then((resp) => {
            data = resp.products;
            banner = resp.banner;

            this.setState({
                products: data,
                isLoading: false,
                banner: banner
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }

    fetchData() {
        
        if (this.state.isLoading) {
            return (
                <View><Text>Loading</Text></View>
            )
        } else {
            
        }

    }

    renderBanner(image, index) {
        return(
            <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover'}} source={{ uri: image}} />
        );
    }

    renderBanners(image, key, width) {
        return (
            <Category imageWidth={width} imageUri={image} name="Home"/>
        );
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                

                <View style={{ flex: 1 }}>
                    <Modal isVisible={this.state.isModalVisible}>
                      <View style={{ flex: 1 }}>
                        <Text>Hello!</Text>
                        <TouchableOpacity onPress={() => this._toggleModal}>
                          <Text>Hide me!</Text>
                        </TouchableOpacity>
                      </View>
                    </Modal>


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
                        
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            

                            <View style={{ height: 200, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {this.state.banner.map((img, key) => this.renderBanners(`http://www.huboffruit.com/image/${img.image}`, key, width))}
                                    
                                    
                                </ScrollView>
                            </View>
                            
                        </View>


                        
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                ข้อมูลสินค้า
                            </Text>
                            <TouchableOpacity onPress={() => this._toggleModal()}>
                            <Text>Click</Text>
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                
                                {this.fetchData()}


                                {
                                    this.state.products.map((item, index) => {
                                        return (
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {
                                                product_id: item.product_id,
                                                name: item.name,
                                                price: item.price,
                                                image: item.image,
                                                description: item.description
                                            }) }>
                                                <Home width={width}
                                                    product_id={item.product_id}
                                                    name={item.name}
                                                    type={item.name}
                                                    price={item.price}
                                                    image={item.image}
                                                    rating={4}
                                                    url={item.url}
                                                />
                                            </TouchableOpacity>
                                        )
                                    })

                                }
                                
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