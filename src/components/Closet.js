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
                    style={styles.imgbg}
                    resizeMode="stretch">
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
        marginTop : "2.0%",
        width:"100%",
    },
    imgbg : {
        width:"100%",
        height: Dimensions.get('window').height * 0.50,
    },
    clothContainer: {
        flex:1,
        paddingTop: "3.5%",
        paddingStart:"3%",
        flexDirection:'row-reverse',
    }
})