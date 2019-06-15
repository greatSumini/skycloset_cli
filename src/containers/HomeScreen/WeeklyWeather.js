import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

import {getWeatherIcon} from './getWeatherInfo'

export default class WeeklyWeather extends Component {
    createDayInfos(){
        const weekDays = new Array('일', '월', '화', '수', '목', '금', '토')
        let textRow = []

        let today = (new Date().getDay() + 1) % 7
        for(let i = 0;i<7;++i) {
            const iconImage = getWeatherIcon(this.props.weekInfo[i].icon)
            textRow.push(
                <View key={today} style={styles.dayInfo}>
                    <Text style={styles.text}>{weekDays[today]}</Text>
                    <Image
                        style={styles.icon}
                        source={iconImage}
                        resizeMode="stretch"/>
                    <Text style={styles.text}>{Math.round(this.props.weekInfo[i].max)}</Text>
                    <Text style={styles.text}>{Math.round(this.props.weekInfo[i].min)}</Text>
                </View>
            )
            today = (today+1)%7
        }
        return textRow
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    {this.createDayInfos()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width : "92%",
        height : "100%",
        borderRadius: 15,
        backgroundColor : 'rgba(40, 40, 40, 0.2)',
        paddingTop : "4.5%",
    },
    row : {
        width : "100%",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    },
    dayInfo : {
        height : "100%",
        margin : "3%",
        width:"8%",
        alignItems : "center",
    },
    text : {
        fontSize : 15,
        color : "white",
    },
    icon : {
        marginTop : "18%",
        height: "22.5%",
        width : "100%",
    }
})