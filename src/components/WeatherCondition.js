import React, {Component} from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

export default class WeatherCondition extends Component {
    getWeatherIcon = (weatherId, weatherCondition) => {
        switch(weatherCondition) {
            case '11' : return require('../assets/images/weatherIcon/lightning.png');
            case '09' :
            case '10' : return require('../assets/images/weatherIcon/rain.png');
            case '13' : {
                    if(weatherId == 615 || weatherId == 616)
                        return require('../assets/images/weatherIcon/snow_rain.png'); 
                    else
                        return require('../assets/images/weatherIcon/snow.png');
                }
            case '01' : return require('../assets/images/weatherIcon/sunny.png'); // 시간대별로 아이콘 다르게 설정해줘야함!! (moon, sunrise, sunset)
            case '02' :
            case '03' :
            case '50' :
            case '04' : return require('../assets/images/weatherIcon/cloudy.png');
            default : return null;
        }
    }

    render() {
        const {tempDiff, weatherId, weatherCondition} = this.props;
        const icon = this.getWeatherIcon(weatherId, weatherCondition);
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={icon}
                />
                <Text style={styles.condition}>
                    구름 조금
                </Text>
                <Text style={styles.diff}>
                    어제보다 {tempDiff}℃
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        paddingLeft : "5%",
        paddingLeft : "7%",
        borderRightWidth : 2,
        borderRightColor : 'white',
        flexDirection:'row',
        alignItems : 'center',
    },
    condition : {
        fontSize : 15,
        color : 'white',
    },
    diff : {
        fontSize : 10,
        color : 'white',
    },
    icon : {
        height: 70,
        width : 70,
    }
});