import React, {Component} from 'react';
import {Text, View, ToastAndroid} from 'react-native';

export default class HomeScreen extends Component {
    state = {
        userLocation: {},
        userAddress: {}
    }

    async componentDidMount() {
        this.setState({userLocation: this.props.navigation.getParam('location')});
        //const Address = await this.getAddressFromGoogleApi();
        //this.setState({userAddress : Address});
    }

    async getAddressFromGoogleApi() {
        const {userLocation} = this.state;
        const api = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
        const latitude = Number(userLocation.latitude).toString();
        const longitude = Number(userLocation.longitude).toString();
        const googleMapsKey = 'AIzaSyAlLc_Sr23u9MjHU9sO7sgQCyoXElyuPCQ'
        let apiRequestUrl = api + latitude + ',' + longitude + '&key=' + googleMapsKey;

        try {
            let response = await fetch(apiRequestUrl);
            let responseJson = await response.json();
            return responseJson;
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        const {userLocation, userAddress} = this.state;
        return (
            <View>
                <Text>I'm HomeScreen</Text>
                <Text>
                    {JSON.stringify(this.props.navigation.state, null, 4)}
                    {JSON.stringify(userLocation, null, 4)}
                    {JSON.stringify(userAddress, null, 4)}
                </Text>
            </View>
        );
    }
}