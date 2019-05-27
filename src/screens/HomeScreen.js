import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';

import Drawer from 'react-native-drawer'
import LinearGradient from 'react-native-linear-gradient'

import DrawerPanel from '../components/DrawerPanel'
import HomeHead from '../components/HomeHead'
import WeatherInfo from '../components/WeatherInfo'
import Closet from '../components/Closet'
import getHomeBgColor from '../functions/getHomeBgColor'

class HomeScreen extends Component {

    componentDidMount() {
    }

    openDrawer = () => {
        this._drawer.open()
    };

    render() {
        const {address, currentWeather, weather1, weather0} = this.props;
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
                                    onButtonPressed={this.openDrawer}
                                />
                                <WeatherInfo 
                                    tempNow={currentWeather.currentTemp} 
                                    tempMin={weather1.tempMin} 
                                    tempMax={weather1.tempMax}
                                    icon={currentWeather.currentIcon}
                                    tempDiff={(weather1.tempMax - weather0.tempMax)}
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);