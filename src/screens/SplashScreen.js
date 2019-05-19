import React, {Component} from 'react';
import {View, AsyncStorage, StyleSheet, Text, Image} from 'react-native';

export default class SplashScreen extends Component {
    constructor() {
        super();
        //this._bootstrapAsync();
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
        return (
            <View style={styles.container}>
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
            </View>
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