import React, {Component} from 'react'
import {View} from 'react-native'

//import firebase from 'react-native-firebase'

import {unitId} from '../../../config/keys'

export default class DonateScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {/*
        const Banner = firebase.admob.Banner
        const AdRequest = firebase.admob.AdRequest
        const request = new AdRequest()
        return (
            <Banner
                unitId={unitId}
                size={'SMART_BANNER'}
                request={request.build()}
                onAdLoaded={() => {
                    console.log('Advert loaded')
                }}
            />
        )*/
        return(
            <View></View>
        )
    }
}