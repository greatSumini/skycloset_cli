import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import WeatherCondition from './WeatherCondition'
import DustCondition from './DustCondition'

export default class WeatherInfo extends Component {
    render = () => {
        const {tempNow, tempMax, tempMin, tempDiff, icon, pm10, pm25} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.tempNowStyle}>
                    {tempNow.toFixed(1)}℃
                </Text>
                <Text style={styles.tempMinMaxStyle}>
                    ({tempMax.toFixed(1)}℃/{tempMin.toFixed(1)}℃)
                </Text>
                <View style={styles.conditionContainer}>
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
   },
   tempNowStyle : {
        paddingTop : 5,
        paddingBottom : 5,
        fontSize : 35,
        color : 'white',
   },
   tempMinMaxStyle : {
        paddingTop : 3,
        paddingBottom : 3,
        fontSize : 15,
        color : 'white',
   },
   conditionContainer : {
        width:"94%",
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : "4%",
        paddingTop : "2%",
        paddingLeft : "4%",
        paddingRight : "4%",
        paddingBottom : "7%",
        backgroundColor : 'rgba(255, 255, 255, 0.15)',
        borderRadius:10,
   },
   weatherCondition : {
        flexDirection : 'row',
        justifyContent: 'flex-start',
   },
   dustCondition : {
        flexDirection : 'row',
        justifyContent: 'flex-start',
   },
});