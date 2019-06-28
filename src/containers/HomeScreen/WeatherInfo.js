import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'

import WeatherCondition from './WeatherCondition'
import DustCondition from './DustCondition'
import {getCondBoxColor} from './getBgColor'

export default class WeatherInfo extends Component {
    constructor(props) {
        super(props)
    }
    render = () => {
        const {tempDiff, icon, pm10, pm25, onPress} = this.props;

        return (
            <View style={{width:"100%", marginBottom:"4%"}}>
                <TouchableWithoutFeedback
                    onPress={onPress}>
                    <View style={styles.container}>
                        <View style={[styles.conditionContainer, {backgroundColor:getCondBoxColor()}]}>
                            <WeatherCondition
                                style={styles.wetherCondition}
                                tempDiff={tempDiff}
                                icon={icon}
                            />
                            <DustCondition 
                                style={styles.dustCondition}
                                pm10={pm10}
                                pm25={pm25}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        justifyContent : 'center',
        marginTop:"1.5%",
        width:"94.3%",
        marginLeft : "3%",
    },
    conditionContainer : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent : 'center',
        marginBottom : "-2.5%",
        marginTop : "5.5%",
        width:"94%",
        paddingLeft : "4%",
        paddingRight : "4%",
        paddingBottom : "11.5%",
        borderRadius:15,
   },
   weatherCondition : {
        flex:6.5,
        height:"100%",
        flexDirection : 'row',
        justifyContent: 'flex-start',
   },
   dustCondition : {
        flex : 3.5,
        height:"100%",
        flexDirection : 'row',
        justifyContent: 'flex-start',
   },
});