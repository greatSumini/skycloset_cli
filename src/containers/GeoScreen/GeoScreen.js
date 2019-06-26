import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import {connect} from 'react-redux'

import {getGeoBgColor} from '../HomeScreen/getBgColor'

class GeoScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    onCloseButtonPressed = () => {
        this.props.navigation.goBack()
    }

    onSearchButtonPressed = () => {
    }

    onCurrentLocButtonPressed = () => {

    }

    render() {
        const bgColor = {
            backgroundColor : getGeoBgColor(),
        }

        return (
            <View style={styles.container}>
                <View style={[styles.headContainer, bgColor]}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                            onPress={this.onCloseButtonPressed}
                            style={{flex:1}}>
                            <Image
                                style={{height:25, width:25}}
                                resizeMode='stretch'
                                source={require('../../assets/images/button/whiteXButton.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.guideText}>
                        지번, 도로명, 건물명을 입력하세요.
                    </Text>
                    <View style={{flexDirection:'row', marginTop : "6%", alignItems : 'center', justifyContent : 'center'}}>
                        <TextInput
                            style={{height : "80%", width : "80%", backgroundColor : 'white', borderRadius : 500, marginRight : "5%", paddingLeft : "5%", fontSize : 15}}
                            placeholder="예) 하늘동 12-3 또는 하늘대로"
                            placeholderTextColor="grey">
                        </TextInput>
                        <TouchableOpacity 
                            onPress={this.onSearchButtonPressed}
                            style={{flex:1}}>
                            <Image
                                style={{height:50, width:50}}
                                resizeMode='stretch'
                                source={require('../../assets/images/button/searchButton.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
                            onPress={this.onCurrentLocButtonPressed}
                            style={{flex:1}}>
                            <View style={{width:"100%", height:"68%", backgroundColor:'white', marginTop : "6%", borderRadius : 500, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:15, fontFamily:"Bongodik-Regular", marginBottom : "5%", color:getGeoBgColor()}}>
                                현 위치로 주소 설정
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : "100%",
        alignItems : 'center',
    },
    headContainer : {
        width:"100%",
        height : "37%",
        paddingLeft : "5%",
        paddingRight : "5%",
        paddingTop : "6%",
    },
    guideText : {
        fontSize : 23,
        fontFamily : "Bongodik-Regular",
        color : 'white',
        marginTop : "7%",
    },
})

const mapStateToProps = state => {
    return {
        address: state.geoloc.address,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GeoScreen);