import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import WeatherCondition from './WeatherCondition'
import DustCondition from './DustCondition'
import {getCondBoxColor} from './getBgColor'

export default class WeatherInfo extends Component {
    render = () => {
        const {tempNow, tempMax, tempMin, tempDiff, icon, pm10, pm25} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.tempNowStyle}>
                    {tempNow.toFixed(1)}℃
                </Text>
                <Text style={styles.tempMinMaxStyle}>
                    ( {tempMax.toFixed(1)}℃ / {tempMin.toFixed(1)}℃ )
                </Text>
                <View style={[styles.conditionContainer, {backgroundColor:getCondBoxColor()}]}>
                    <WeatherCondition
                        style={styles.wetherCondition}
                        tempDiff={tempDiff}
                        icon={icon}
                    />
                    <DustCondition 
                        style={styles.dustCondition}
                        pm10={pm10}
                        pm25={pm25}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container : {
        alignItems: 'center',
        justifyContent : 'center',
        marginBottom : "4%",
   },
   tempNowStyle : {
        paddingTop : 2,
        paddingBottom : 5,
        fontSize : 35,
        color : 'white',
        fontFamily : "Bongodik-Regular",
   },
   tempMinMaxStyle : {
        paddingTop : 3,
        paddingBottom : 3,
        fontSize : 17,
        color : 'white',
        fontFamily : "Bongodik-Regular",
   },
   conditionContainer : {
        width:"94%",
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : "6%",
        paddingTop : "1.0%",
        paddingLeft : "4%",
        paddingRight : "4%",
        paddingBottom : "9.5%",
        borderRadius:15,
   },
   weatherCondition : {
        flex:6.5,
        height:"100%",
        flexDirection : 'row',
        justifyContent: 'flex-start',
   },
   dustCondition : {
        flexDirection : 'row',
        justifyContent: 'flex-start',
   },
});