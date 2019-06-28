import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

import {getWeatherIcon} from './getWeatherInfo'
import {getClothText} from '../../utils/getClothImage'
import {getClothRecommends} from '../../utils/getRecommend'
import {getUserDiscomfort} from '../HomeScreen/calculator'

export default class MiniWeather extends Component {
    render() {
        const {bg, icon, tempMin, tempMax, hum, bias, sun, gender} = this.props
        const userDiscomfortMin = getUserDiscomfort(tempMin, hum, bias, sun)
        const clothCombListMin = getClothRecommends(gender, userDiscomfortMin)
        indexMin = (Math.random() * clothCombListMin.length).toFixed(0) % clothCombListMin.length
        
        const userDiscomfortMax = getUserDiscomfort(tempMax, hum, bias, sun)
        const clothCombListMax = getClothRecommends(gender, userDiscomfortMax)
        indexMax = (Math.random() * clothCombListMax.length).toFixed(0) % clothCombListMax.length

        return (
            <View style={[styles.container, {backgroundColor : bg}]}>
                <View style={{height:"7%"}}/>
                <Image
                    source={getWeatherIcon(icon)}
                    style={styles.iconImage}
                    resizeMode="stretch"
                />
                <Text style={[styles.text, {fontFamily:"Bongodik-Medium"}]}>
                    {tempMax.toFixed(0)}℃ :
                </Text>
                <Text style={styles.text}>
                    {getClothText(gender, 't', clothCombListMax[indexMax].top)}{clothCombListMax[indexMax].bottom != -1 ? '/'+getClothText(gender, 'b', clothCombListMax[indexMax].bottom) : null}
                </Text>
                <Text style={[styles.text, {fontFamily:"Bongodik-Medium"}]}>
                    {tempMin.toFixed(0)}℃ :
                </Text>
                <Text style={styles.text}>
                {getClothText(gender, 't', clothCombListMin[indexMin].top)}{clothCombListMin[indexMin].bottom != -1 ? '/'+getClothText(gender, 'b', clothCombListMin[indexMin].bottom) : null}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width : "45%",
        height : "100%",
        borderRadius: 15,
        alignItems : 'center'
    },
    iconImage : {
        width : "55%",
        height : "40%",
    },
    text : {
        fontSize : 13,
        color : 'white',
        fontWeight : '100',
        height : "11.5%",
    }
})