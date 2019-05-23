import React, {Component} from 'react';
import {Text, View, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>I'm HomeScreen</Text>
                <Text>
                    {JSON.stringify(this.props.location, null, 4)}
                    {JSON.stringify(this.props.weather, null, 4)}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        location: state.geoloc.location,
        address: state.geoloc.address,
        weather: state.weather.weather,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);