import React, {Component} from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

import {getWeatherIcon, getWeatherCondition} from '../functions/getWeatherInfo'

export default class WeatherCondition extends Component {
    render() {
        const {tempDiff, icon} = this.props;
        const iconImage = getWeatherIcon(icon);
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={iconImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.condition}>
                        {getWeatherCondition(icon)}
                    </Text>
                    <Text style={styles.diff}>
                        어제보다 {Math.abs(tempDiff).toFixed(1)}℃ {tempDiff>0 ? '↑' : '↓'}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex:6.5,
        paddingRight : "7%",
        borderRightWidth : 1,
        borderRightColor : 'white',
        flexDirection:'row',
        alignItems : 'center',
    },
    textContainer : {
        flexDirection: 'column'
    },
    condition : {
        fontSize : 16,
        color : 'white',
        marginBottom : "10%",
    },
    diff : {
        fontSize : 12,
        color : 'white',
    },
    icon : {
        height: 70,
        width : 70,
        marginRight:"7%",
    }
});