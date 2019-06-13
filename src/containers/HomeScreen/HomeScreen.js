import React, {Component} from 'react';
import {Share, StyleSheet, ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';

import Drawer from 'react-native-drawer'
import LinearGradient from 'react-native-linear-gradient'

import DrawerPanel from '../DrawerPanel/DrawerPanel'
import HomeHead from './HomeHead'
import WeatherInfo from './WeatherInfo'
import Closet from './Closet'
import getHomeBgColor from './getHomeBgColor'
import {getPmCondition, getPmImoticon} from './getDustInfo'
import {getWeatherCondition, getWeatherImoticon} from './getWeatherInfo'

class HomeScreen extends Component {

    componentDidMount() {
    }

    openDrawer = async () => {
        this._drawer.open()
    }

    shareWeather = async () => {
        tempDiff = this.props.weather1.tempMax - this.props.weather0.tempMax
        const result = await Share.share({
            message:
            `☀하늘옷장☁ - Share Test Message
지금 ${this.props.address}의 날씨는 ${getWeatherImoticon(this.props.currentWeather.currentIcon)}${getWeatherCondition(this.props.currentWeather.currentIcon)}!!
🌡현재온도 : ${this.props.currentWeather.currentTemp.toFixed(1)}
🌡어제보다 ${Math.abs(tempDiff).toFixed(1)}℃ ${tempDiff>0 ? '↑' : '↓'}
🌫미세 : ${getPmImoticon(this.props.dust.pm10Value, 0)}(${getPmCondition(this.props.dust.pm10Value, 0)}:${this.props.dust.pm10Value}㎍/m³)
🌫초미세 : ${getPmImoticon(this.props.dust.pm25Value, 1)}(${getPmCondition(this.props.dust.pm25Value, 1)}:${this.props.dust.pm25Value}㎍/m³)
자외선이 강한 날이에요. 반팔 입고 꼭 썬크림 바르세요!`,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
        }
        else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    }

    render() {
        const {address, currentWeather, weather1, weather0, dust} = this.props;
        return (
                <Drawer
                    ref={(ref)=>this._drawer = ref}
                    content={<DrawerPanel />}
                    openDrawerOffset={0.4}
                    tapToClose={true}
                    >
                    <ScrollView style={styles.container}>
                        <LinearGradient colors={getHomeBgColor()} style={styles.linearGradient}>
                            <View style={styles.wrapper}>
                                <HomeHead
                                    style={styles.homeHead}
                                    address={address}
                                    onDrawerButtonPressed={this.openDrawer}
                                    onShareButtonPressed={this.shareWeather}
                                />
                                <WeatherInfo 
                                    tempNow={currentWeather.currentTemp} 
                                    tempMin={weather1.tempMin} 
                                    tempMax={weather1.tempMax}
                                    icon={currentWeather.currentIcon}
                                    tempDiff={(weather1.tempMax - weather0.tempMax)}
                                    pm10 = {dust.pm10Value}
                                    pm25 = {dust.pm25Value}
                                />
                                <Closet
                                    style={{width:"90%"}}
                                />
                                <Text>fdsdsf</Text>
                                <Text>fdsdsf</Text>
                                <Text>fdsdsf</Text>
                                <Text>fdsdsf</Text>
                            </View>
                        </LinearGradient>
                    </ScrollView>
                </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    wrapper : {
        paddingTop : "8%",
        paddingLeft : "5%",
        paddingRight : "5%",
    },
    container : {
    },
    homeHead : {
        height: "15%",
    },
    weatherInfo : {
        height: "70%",
    },
});

const mapStateToProps = state => {
    return {
        address: state.geoloc.address,
        weather0: state.weather.weather0,
        weather1: state.weather.weather1,
        weather2: state.weather.weather2,
        weather3: state.weather.weather3,
        currentBias : state.current.currentBias,
        currentGender : state.current.currentGender,
        currentWeather : state.current.currentWeather,
        dust : state.dust.dust,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);