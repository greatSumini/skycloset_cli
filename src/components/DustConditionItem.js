import React, {Component} from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

export default class DustConditionItem extends Component {
    render() {
        const {name, condition} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {name}
                </Text>
                <Image
                    style={styles.icon}
                    source={require('../assets/images/dustIcon/3.png')}
                />
                <Text style={styles.text}>
                    {condition}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:"5%",
        flex:1,
    },
    icon : {
        height : 25,
        width : 25,
        marginRight : "5%",
    },
    text : {
        width : "15%",
        fontFamily: 'Bongodik',
        fontSize: 12,
        color : 'white',
        marginRight: "5%",
    }
});