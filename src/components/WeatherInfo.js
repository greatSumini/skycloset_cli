import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import WeatherCondition from './WeatherCondition'
import DustCondition from './DustCondition'

export default class WeatherInfo extends Component {
    render = () => {
        const {tempNow, tempMax, tempMin, tempDiff, weatherId, weatherCondition} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.tempNowStyle}>
                    {tempNow}℃
                </Text>
                <Text style={styles.tempMinMaxStyle}>
                    ({tempMax}℃/{tempMin}℃)
                </Text>
                <View style={styles.conditionContainer}>
                    <WeatherCondition
                        style={styles.wetherCondition}
                        tempDiff={tempDiff}
                        weatherId={weatherId}
                        weatherCondition={weatherCondition}
                    />
                    <DustCondition style={styles.dustCondition} />
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
        flex:1,
        width:"100%",
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft : "10%",
        marginTop : "4%",
   },
   weatherCondition : {
        flex:6,
        flexDirection : 'row',
        justifyContent: 'flex-start',
   },
   dustCondition : {
        flex : 4,
        flexDirection : 'row',
        justifyContent: 'flex-start',
   },
});