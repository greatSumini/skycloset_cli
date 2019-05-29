import React, {Component} from 'react'
import {ImageBackground, StyleSheet, View} from 'react-native'

import Cloth from './Cloth';

export default class Closet extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/images/closet/closet_sunmove.png')} style={styles.imgbg}>
                <View style={styles.clothContainer}>
                    <Cloth />
                    <Cloth />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imgbg : {
        paddingTop:25,
        marginTop:45,
        width:"100%",
        height:685,
    },
    clothContainer: {
        flex:1,
        paddingStart:20,
        flexDirection:'row-reverse',
    }
})