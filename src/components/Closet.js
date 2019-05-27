import React, {Component} from 'react'
import {ImageBackground, StyleSheet, Text} from 'react-native'

import Cloth from './Cloth';

export default class Closet extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/images/closet/closet_sunmove.png')} style={styles.imgbg}>
                <Cloth />
                <Cloth />
                <Cloth />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imgbg : {
        paddingTop:25,
        paddingLeft:10,
        marginTop:45,
        width:"101.34%",
        height:685,
        flexDirection:'row',
    }
})