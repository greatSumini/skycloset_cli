import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

export default class Cloth extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode='stretch'
                    source={require('../assets/images/cloth/w_onepiece.png')}
                />
                <Text style={styles.text}>
                    원피스
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width:100,
    },
    image : {
        width:100,
        height:250,
    },
    text : {
        textAlign : 'center',
        marginTop : "15%",
        fontFamily : 'Bongodik',
        fontSize : 15,
        color : 'white',
    }
});