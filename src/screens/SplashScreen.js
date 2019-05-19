import React, {Component} from 'react';
import {View, AsyncStorage, StyleSheet, Text} from 'react-native';

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
            this.props.navigation.navigate('App');
        }
    }

    _bootstrapAsync = async() => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>
                        SkyCloset
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
    }
});