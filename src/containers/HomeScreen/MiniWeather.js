import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

export default class MiniWeather extends Component {
    render() {
        const {bg} = this.props
        return (
            <View style={[styles.container, {backgroundColor : bg}]}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width : "45%",
        height : "100%",
        borderRadius: 15,
    }
})