import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class HomeHead extends Component {
    render() {
        const {address, onDrawerButtonPressed, onShareButtonPressed} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={onDrawerButtonPressed}
                    style={styles.menuButton}>
                    <Image
                        source={require('../../assets/images/drawerButton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.titletText}>
                    {address}
                </Text>
                <TouchableOpacity 
                    onPress={onShareButtonPressed}
                    style={styles.menuButton}>
                    <Image
                        source={require('../../assets/images/drawerButton.png')}
                    />
                </TouchableOpacity>
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