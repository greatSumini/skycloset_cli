import React, {Component} from 'react';
import {Dimensions, Share, StyleSheet, ScrollView, Text, View, Platform} from 'react-native';
import {connect} from 'react-redux';

import Drawer from 'react-native-drawer'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native'

import DrawerPanel from '../DrawerPanel/DrawerPanel'
import HomeHead from './HomeHead'
import WeatherInfo from './WeatherInfo'
import Closet from '../../components/Closet'
import MiniWeather from './MiniWeather'
import WeeklyWeather from './WeeklyWeather'

import {getHomeBgColor} from './getBgColor'
import {getPmCondition, getPmImoticon} from './getDustInfo'
import {getWeatherCondition, getWeatherImoticon} from './getWeatherInfo'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    openDrawer = () => {
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

    openGeoScreen = () => {
        this.props.navigation.push('Geo')
    }

    render() {
        const {address, currentWeather, weather1, weather0, dust, weekWeather} = this.props;
        const compBg = 'rgba(10, 10, 10, 0.3)'
        return (
                <Drawer
                    ref={(ref)=>this._drawer = ref}
                    content={<DrawerPanel />}
                    openDrawerOffset={0.7}
                    tapToClose={true}
                    tweenDuration={150}
                    >
                    <ScrollView style={styles.container}>
                        <LinearGradient colors={getHomeBgColor()} style={styles.linearGradient}>
                            <View style={styles.wrapper}>
                                <HomeHead
                                    address={address}
                                    onDrawerButtonPressed={this.openDrawer}
                                    onShareButtonPressed={this.shareWeather}
                                    onAddressPressed={this.openGeoScreen}
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
                                <Closet/>
                                <View style={styles.compContainer}>
                                    <View style={styles.compTitleContainer}>
                                        <Text style={styles.compTitle}>
                                            내일 모레
                                        </Text>
                                    </View>
                                    <View style={styles.compCompContainer}>
                                        <MiniWeather bg={compBg}/>
                                        <View style={{width:"2%"}}></View>
                                        <MiniWeather bg={compBg}/>
                                    </View>
                                </View>
                                <View style={styles.compContainer}>
                                    <View style={styles.compTitleContainer}>
                                        <Text style={styles.compTitle}>
                                            주간 예보
                                        </Text>
                                    </View>
                                    <View style={[styles.compCompContainer, {height : 350}]}>
                                        <WeeklyWeather weekInfo={weekWeather} bg={compBg}/>
                                    </View>
                                </View>
                                <Text style={{color:'white', fontSize:13}}>
                                    Powerd by <Text style={{fontWeight:"bold"}}>Dark Sky, Air Korea</Text>
                                </Text>
                            </View>
                        </LinearGradient>
                    </ScrollView>
                </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop: (Platform.OS === 'ios') ? 20 : 0
    },
    wrapper : {
        width: "100%",
        paddingTop : "8%",
        alignItems: "center",
        paddingBottom : "8%",
    },
    compContainer : {
        paddingLeft: "2%",
        paddingRight: "2%",
        marginBottom: "8%",
    },
    compTitleContainer : {
        width:"100%",
        paddingLeft: "6.4%",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        marginBottom: "3.5%",
    },
    compCompContainer : {
        width:"100%",
        height: 250,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    },
    compTitle : {
        width: "100%",
        textAlign : "left",
        color: "white",
        fontSize : 17,
    }
});

const mapStateToProps = state => {
    return {
        address: state.geoloc.address,
        weather0: state.weather.weather0,
        weather1: state.weather.weather1,
        weather2: state.weather.weather2,
        weather3: state.weather.weather3,
        weekWeather : state.weather.weekWeather,
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