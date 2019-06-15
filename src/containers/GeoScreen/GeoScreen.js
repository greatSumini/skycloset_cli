import React, {Component} from 'react';
import {Text} from 'react-native';

import {connect} from 'react-redux'

class GeoScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <Text>I'm geoscreen</Text>
        )
    }
}

const mapStateToProps = state => {
    return {
        address: state.geoloc.address,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeoScreen);