import React, {Component} from 'react';
import {View, AsyncStorage, StyleSheet, Text, Image, Animated} from 'react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        //this._bootstrapAsync();
        this.state = {
            bg: new Animated.ValueXY({x:193, y:222})
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
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 1500
        }).start();
        const data = await this.performTimeConsumingTask();
        if(data!==null) {
            //this.props.navigation.navigate('App');
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
                    <Image
                        style={{width: 128, height:128}}
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