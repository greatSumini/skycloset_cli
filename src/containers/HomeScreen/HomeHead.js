import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

export default class HomeHead extends Component {
    render() {
        const {address, onDrawerButtonPressed, onShareButtonPressed} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={onDrawerButtonPressed}
                    style={styles.menuButtonLeft}>
                    <Image
                        style={styles.button}
                        resizeMode='stretch'
                        source={require('../../assets/images/button/drawerButton.png')}
                    />
                </TouchableOpacity>
                <TouchableWithoutFeedback 
                    style={styles.addressContainer}>
                    <View style={styles.addressContainer}>
                        <Text style={styles.titletText}>
                            {address}
                        </Text>
                        <Image
                            style={styles.smallButton}
                            resizeMode='stretch'
                            source={require('../../assets/images/button/geoButton.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableOpacity 
                    onPress={onShareButtonPressed}
                    style={styles.menuButtonRight}>
                    <Image
                        style={styles.button}
                        resizeMode='stretch'
                        source={require('../../assets/images/button/shareButton.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width:"90%",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        marginTop : "1%",
        marginLeft : "5%",
        marginRight : "5%",
        marginBottom : 11,
    },
    addressContainer : {
        flex:7,
        marginTop : 0.3,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    },
    button : {
        width : 25,
        height : 25,
    },
    smallButton : {
        width : 15,
        height : 15,
    },
    menuButtonLeft : {
        flex:1,
    },
    menuButtonRight : {
        flex:1,
        flexDirection : "row-reverse",
    },
    titletText : {
        fontSize : 20,
        fontFamily : "Bongodik-Regular",
        color : 'white',
        marginRight : "3%",
    },
});