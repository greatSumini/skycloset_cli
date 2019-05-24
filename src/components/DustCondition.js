import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import DustConditionItem from './DustConditionItem'

export default class DustCondition extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DustConditionItem name='미세' condition='나쁨'/>
                <DustConditionItem name='초미세' condition='나쁨'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        marginLeft : "3%",
    },
});