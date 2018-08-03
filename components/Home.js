import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, Dimensions, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import { Header, Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
import Carousel from 'react-native-banner-carousel';
import ListHome from './ListHome';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

export default class Home extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      products: [],
      banner: [],
      category: [],
      isLoading: true,
      isModalVisible: false,
      modalVisible: false
    }
  }
  
   setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  componentDidMount() {
    const { params } = this.props.navigation.state;
    fetch('http://www.huboffruit.com/index.php?route=api/product')
      .then((res) => res.json())
      .then((resp) => {
        
        this.setState({
          products:  resp.products,
          isLoading: false,
          banner: resp.banner,
          category: resp.categorys
        })
        
      })
  }
  
  renderBanner(image, index) {
      return (
          <View key={index} style={{ width: BannerWidth - 10, height: BannerHeight - 100}}>
              <Image style={{ width: null, height: null, flex: 1, resizeMode: 'cover', }} source={{ uri: image }} />
          </View>
      );
  }
  
  


  _showMenu() {
    this.setModalVisible(true);
  }
  
  _fetchProduct() {
    
  }
  
  onChangeHandler(e){
    this.setState({
      input: e,
      products: []
    });
    
    const url = 'http://www.huboffruit.com/index.php?route=api/product&search=' + encodeURIComponent(e);
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        
        this.setState({
          products:  resp.products
        })
        
      })
    

  }
  
  someMethod() {
    
  }
  
  

  render() {
    return (
      <View style={styles.container}>
      
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          <ScrollView>
            <View style={{marginTop: 22, paddingHorizontal: 10}}>
              
              
              { 
                this.state.category.map((item, inx) => {
                  return(
                     <View style={{ marginBottom: 5}} key={inx}>
                      <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        this.props.navigation.navigate('Search', {
                          category_id: item.category_id
                        });
                      }}>
                      <Text style={{backgroundColor: "#ccc", color:"#000", textAlign: "center", paddingHorizontal: 10, fontSize: 18}}>{item.name}</Text>
                    
                     
                      
                     </TouchableHighlight>
                    </View>
                  )
                })
              }
              
            </View>
          </ScrollView>
        </Modal>
      
        <Header 
          outerContainerStyles={{ width: '100%', backgroundColor: '#fff', marginBottom: 10 }}
          centerComponent={{ text: 'HUB OF FRUIT', style: { textAlign: 'left', color: '#4a9b45' } }}
          rightComponent={{ 
            icon: 'menu', 
            color: '#4a9b45',
            onPress: () => this._showMenu()
          }}
        />
        <View style={{flex: 1}}>
          <ScrollView 
            scrollEventThrottle={16}
          >
          
          <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth-10}
                >
                    {this.state.banner.map((image, index) => this.renderBanner(`http://www.huboffruit.com/image/${image.image}`, index))}
                </Carousel>
                
          <View>
            <SearchBar
              onChangeText={this.onChangeHandler.bind(this)}
              onClearText={this.onChangeHandler.bind(this)}
              onChange={this.onChangeHandler.bind(this)}
              lightTheme={true}
              containerStyle={{ marginBottom: 20}}
              placeholder='ค้นหา' />
          </View>
          
          
          <View style={{ marginTop: 10, paddingHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }} >
            {
              this.state.products.map((item, index) => {
                return(
                  
                    <ListHome 
                      key={index}
                      product_id={item.product_id}
                      name={item.name}
                      description={item.description_brief}
                      width={BannerWidth}
                      image={item.image}
                      url={item.url}
                      price={item.price}
                      navigation={this.props.navigation}
                    />
                  
                )
              })
            }
            
            
          </View>
           
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
