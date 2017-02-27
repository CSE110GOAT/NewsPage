
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Article extends Component {
  constructor(){
    super()
    this.state = {
        picture: './home_bar_icons/basketball.jpg',
        source: "UCSD Athletics",
        time: "12:00 PM",
        headline: "UCSD Goes D1!",
        summary: "UCSD students vote to go D1"
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.sport}>Posted by {this.state.source} at {this.state.time}</Text>
        <View style={styles.container}>
          <View style={styles.logo_item}>
            <Image source={require('./home_bar_icons/basketball.jpg')} style={styles.logo}/>
            <Text>{"\t\t"}</Text>
          </View>
        </View>
            <Text style={styles.sport}>{this.state.headline}{"\n"}{this.state.summary}</Text>
      </View>
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
    justifyContent: 'flex-start'
  }
});

AppRegistry.registerComponent('Game', () => Game);
