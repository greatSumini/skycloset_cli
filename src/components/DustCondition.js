import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import DustConditionItem from './DustConditionItem'

export default class DustCondition extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DustConditionItem name='미세' condition='좋음'/>
                <DustConditionItem name='초미세' condition='좋음'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex:4.5,
        paddingRight:1,
        marginLeft : "8%",
    },
});