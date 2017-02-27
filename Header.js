
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Header extends Component{
    constructor(){
    super()
    this.state = {
      banner: 'Triton Athletics'
      }
    }
    render(){
    return (
      <View style = {styles.head}>
        <Text style ={styles.title}>
          {this.state.banner}
        </Text>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 80,
    backgroundColor: '#00008b'
  },
  title: {
  justifyContent: 'center',
  color: 'yellow',
  fontSize: 35,
  fontWeight: 'bold',
  fontFamily: "Didot"
  }
});

AppRegistry.registerComponent('Header', () => Header);
