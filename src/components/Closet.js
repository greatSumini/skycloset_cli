import React, {Component} from 'react'
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native'

import Cloth from './Cloth';
import getClosetBgImg from './getClosetBgImg'

export default class Closet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground 
                    source={getClosetBgImg()} 
                    style={styles.imgbg}>
                    <View style={styles.clothContainer}>
                        <Cloth />
                        <Cloth />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop : "8%",
        width:"100%",
    },
    imgbg : {
        width:"100%",
        height: Dimensions.get('window').height * 0.51,
    },
    clothContainer: {
        flex:1,
        paddingStart:20,
        flexDirection:'row-reverse',
    }
})