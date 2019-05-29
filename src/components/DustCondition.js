import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import DustConditionItem from './DustConditionItem'
import {getPmIcon, getPmCondition} from '../functions/getDustInfo'

export default class DustCondition extends Component {
    render() {
        const {pm10, pm25} = this.props;
        return (
            <View style={styles.container}>
                <DustConditionItem 
                    name='미세'
                    img={getPmIcon(pm10, 0)}
                    condition={getPmCondition(pm10, 0)}
                />
                <DustConditionItem
                    name='초미세'
                    img={getPmIcon(pm25, 1)}
                    condition={getPmCondition(pm25, 1)}
                />
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