import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

import {getWeatherIcon} from './getWeatherInfo'

export default class WeeklyWeather extends Component {
    state = {
        space : [],
        barLength : [],
    }

    componentWillMount() {
        let minTemp = 100
        let maxTemp = -100
        sp = []
        bl = []

        for(let i = 0;i<7;++i) {
            minTemp = Math.min(minTemp, Math.round(this.props.weekInfo[i].min))
            maxTemp = Math.max(maxTemp, Math.round(this.props.weekInfo[i].max))
        }
        for(let i = 0;i<7;++i) {
            sp.push({
                height: String((Math.round(this.props.weekInfo[i].min) - minTemp)/(maxTemp - minTemp)*80) + "%"
            })
            bl.push({
                height: String((Math.round(this.props.weekInfo[i].max) - Math.round(this.props.weekInfo[i].min))/(maxTemp - minTemp)*80) + "%"
            })
        }
        this.setState({space : sp, barLength : bl})
    }

    createDayInfos(){
        const weekDays = new Array('일', '월', '화', '수', '목', '금', '토')
        let textRow = []

        let today = (new Date().getDay() + 1) % 7

        for(let i = 0;i<7;++i) {
            const iconImage = getWeatherIcon(this.props.weekInfo[i].icon)
            textRow.push(
                <View key={i} style={styles.dayInfo}>
                    <Text style={styles.text}>{weekDays[today]}</Text>
                    <Image
                        style={styles.icon}
                        source={iconImage}
                        resizeMode="stretch"/>
                    <View style={styles.dayBar}>
                        <View style={this.state.space[i]}/>
                        <View style={styles.circle}/>
                        <View style={[styles.bar, this.state.barLength[i]]}/>
                        <View style={styles.circle}/>
                        <Text style={styles.text}>{Math.round(this.props.weekInfo[i].max)}</Text>
                    </View>
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
        marginLeft : "3%",
        marginRight : "3%",
        width:"8%",
        alignItems : "center",
    },
    dayBar : {
        flexDirection: "column-reverse",
        width : "100%",
        height : "61%",
        marginTop : "20%",
        alignItems : "center",
    },
    text : {
        fontSize : 15,
        color : "white",
        margin : "20%",
    },
    icon : {
        marginTop : "18%",
        height: "10%",
        width : "100%",
    },
    circle : {
        width : "35%",
        height : "7.5%",
        borderRadius : 100,
        backgroundColor : 'white',
    },
    bar : {
        width : "8%",
        paddingTop : "-9%",
        paddingBottom : "-9%",
        backgroundColor : 'white',
    }
})