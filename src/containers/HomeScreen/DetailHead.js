import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class DetailHead extends Component {
    render() {
        const {onBackButtonPressed} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={onBackButtonPressed}
                    style={styles.menuButtonLeft}>
                    <Image
                        style={styles.button}
                        resizeMode='stretch'
                        source={require('../../assets/images/button/backButton.png')}
                    />
                </TouchableOpacity>
                <View 
                    style={{flex:7, marginTop:0.3, alignItems : "center", justifyContent : "center",}}>
                    <Text style={styles.titletText}>
                        상세 날씨
                    </Text>
                </View>
                <View style={styles.menuButtonRight}>
                    <Text>

                    </Text>
                </View>
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
        fontSize : 23,
        fontFamily : "Bongodik-Regular",
        color : 'white',
        marginRight : "3%",
    },
});