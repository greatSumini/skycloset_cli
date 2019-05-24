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
                        source={require('../assets/images/drawerButton.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.titletText}>
                    {address}
                </Text>
                <View style={styles.menuButton}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width:"90%",
        flexDirection : "row",
        alignItems : "center",
    },
    menuButton : {
        width:"10%",
    },
    titletText : {
        width:"70%",
        fontSize : 20,
        textAlign : 'center',
        fontFamily : "Bongodik",
        color : 'white',
    },
});