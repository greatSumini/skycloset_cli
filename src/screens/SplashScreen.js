import React, {Component} from 'react';
import {View, AsyncStorage, StyleSheet, Text, Animated, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        //this._bootstrapAsync();
        this.state = {
            userLocation: {},
            logoOp : new Animated.Value(0),
        };
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
            setTimeout (
                () => {resolve('result')},
                2000
            )    
        );
    }

    async componentDidMount() {
        const {userLocation} = this.state;
        this._logoFadeIn();
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 400,
            delay:800,
        }).start();
        const loc = await this.getLocation();
        const data = await this.performTimeConsumingTask();
        if(data!==null&&loc!==null) {
            this.props.navigation.navigate('App', {location:userLocation});
        }
    }

    async getLocation() {
        const LocationPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if(LocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(
                (position) => {
                    this.setState({userLocation: position.coords});
                },
                (error) => {
                    console.log(error.code, error.message);
                },
                {enableHighAccuracy:true, timeout:15000, maximumAge:10000}
            );
            return LocationPermission;
        }
        return null;
    }

    _logoFadeIn() {
        Animated.timing(this.state.logoOp, {
            toValue: 1,
            duration: 300,
            delay:200,
        }).start();
    }

    _getLogoStyle() {
        return {
            width: 128, height:128,
            opacity: this.state.logoOp,
        }
    }

    _bootstrapAsync = async() => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        const interpolateColor = this.animatedValue.interpolate({
            inputRange: [0, 150],
            outputRange: ['rgb(0, 193, 222)', 'rgb(255, 255, 255)']
        })
        const animiatedStyle = {
            backgroundColor: interpolateColor
        }
        return (
            <Animated.View style={[styles.container, animiatedStyle]}>
                <View style={styles.logoContainer}>
                    <Animated.Image
                        style={this._getLogoStyle()}
                        source={require('../assets/images/logo.png')}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        SKY CLOSET
                    </Text>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize : 20,
        fontFamily : "LogoENG-Medium",
        color : '#00C1DE',
    },
});