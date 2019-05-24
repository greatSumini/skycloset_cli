import React, {Component} from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

export default class DustCondition extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                />
                <Text>
                    미세먼지
                </Text>
                <Text>
                    매우좋음
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {

    },
});