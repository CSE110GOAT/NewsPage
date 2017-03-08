
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  WebView,
  Linking,
  TouchableOpacity
} from 'react-native'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Article extends Component {
  constructor(){
    super()
    this.state = {
        picture: require('./home_bar_icons/basketball.jpg'),
        source: "UCSD Athletics",
        time: "12:00 PM",
        headline: "UCSD Goes D1!",
        summary: "UCSD students vote to go D1",
        url: 'http://www.ucsdtritons.com/ViewArticle.dbml?DB_OEM_ID=5800&ATCLID=211501690'
    }
  }
    
  handleClick = () => {
    Linking.canOpenURL(this.state.url).then(supported => {
      if (supported) {
        Linking.openURL(this.state.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.state.url);
      }
    });
  };
    
    
  render() {
    return (
      <TouchableOpacity
        onPress={this.handleClick}>
        <View>
          <Text style={styles.sport}>  Posted by {this.state.source} at {this.state.time}</Text>
          <View style={styles.container}>
            <View style={styles.logo_item}>
              <Image source={this.state.picture} style={styles.logo}/>

            </View>
          </View>
          <Text style={styles.sport}>  {this.state.headline}{"\n"}  {this.state.summary}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 2
  },
  logo_item:{
    alignItems: 'center',
    height: 200
  },
  item:{
    fontFamily:"Menlo",
    borderWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    textAlign:'center'
  },
  sport:{
    fontFamily: 'Didot',
    backgroundColor: 'gold',
    fontWeight: 'bold',
    borderColor: 'grey',
    borderWidth: 2
  },
  sport_image: {
    width: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 15
  },
  source: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  summary: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign:'center'
  },
  logo: {
    width: window.width,
    height: window.height/3 - 15,
    resizeMode: 'contain',
    borderColor: 'grey',
    borderWidth: 0,
    justifyContent: 'flex-start'
  }
});

AppRegistry.registerComponent('Game', () => Game);
