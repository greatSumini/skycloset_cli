import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class HomeHead extends Component {
    render() {
        const {address, onButtonPressed} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={onButtonPressed}
                    style={styles.menuButton}>
                    <Image
                        source={require('../../assets/images/drawerButton.jpg')}
                    />
                </TouchableOpacity>
                <Text style={styles.titletText}>
                    {address}
                </Text>
                <View style={styles.menuButton}>
                    <Text>　</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width:"100%",
        flexDirection : "row",
        alignItems : "center",
        marginBottom: "1%",
    },
    menuButton : {
        flex:1,
    },
    titletText : {
        flex:7,
        fontSize : 20,
        textAlign : 'center',
        fontFamily : "Bongodik",
        fontWeight : "bold",
        color : 'white',
    },
});