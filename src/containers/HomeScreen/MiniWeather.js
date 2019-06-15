import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

export default class MiniWeather extends Component {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width : "45%",
        height : "100%",
        borderRadius: 15,
        backgroundColor : 'rgba(10, 10, 10, 0.5)',
    }
})