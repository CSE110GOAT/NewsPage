'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, View, StyleSheet, Image, WebView, Linking, TouchableOpacity } from 'react-native';
import Header from './Header';
import Article from './Article';


const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class HelloWorldApp extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style = {styles.head}>
                    <Header/>
                </View>
                
                <ScrollView>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                    <Article/>
                </ScrollView>
                

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end'
                }}>
                
                    <View style={styles.home_icon}>
                        <Image
                        source={require('./home_bar_icons/home.png')}
                        style={styles.home_pic}
                        />
                    </View>
            
                    <View style={styles.home_icon}>
                        <Image
                        source={require('./home_bar_icons/magnifying_glass.png')}
                        style={styles.home_pic}
                        />
                    </View>
            
                    <View style={styles.home_icon}>
                        <Image
                        source={require('./home_bar_icons/social.png')}
                        style={styles.home_pic}
                        />
                    </View>
            
                    <View style={styles.curr_icon}>
                        <Image
                        source={require('./home_bar_icons/news.png')}
                        style={styles.home_pic}
                        />
                    </View>
                </View>
            </View>
        )
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
                                 sport_icon: {
                                 width: window.width/3,
                                 height: window.width/3,
                                 backgroundColor: 'white',
                                 borderColor: 'gainsboro',
                                 borderStyle: 'solid',
                                 borderWidth: 0.5,
                                 borderRightWidth: 0,
                                 borderTopWidth: 0,
                                 flexDirection: 'column',
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 },
                                 
                                 sport_title: {
                                 fontSize: 18,
                                 textAlign: 'center',
                                 },
                                 
                                 sport_pic: {
                                 width: window.width/3 - 50,
                                 height: window.width/3 - 50,
                                 alignSelf: 'center',
                                 },
                                 
                                 home_icon: {
                                 width: window.width/4,
                                 height: window.width/4 - 45,
                                 backgroundColor: 'white',
                                 borderColor: 'gainsboro',
                                 borderTopWidth: 0.5,
                                 borderRightWidth: 1,
                                 borderLeftWidth: 1,
                                 borderBottomWidth: 0,
                                 justifyContent: 'center'
                                 },
                                 
                                 curr_icon: {
                                 width: window.width/4,
                                 height: window.width/4 - 45,
                                 backgroundColor: 'white',
                                 borderColor: 'grey',
                                 borderTopWidth: 1,
                                 borderRightWidth: 1,
                                 borderLeftWidth: 2,
                                 borderBottomWidth: 1,
                                 justifyContent: 'center'
                                 },
                                 
                                 home_pic: {
                                 width: window.width/4 - 60,
                                 height: window.width/4 - 60,
                                 alignSelf: 'center'
                                 },

                                 });

AppRegistry.registerComponent('FirstProject', () => HelloWorldApp);
