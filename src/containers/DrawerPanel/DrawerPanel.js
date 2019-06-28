import React, {Component} from 'react'
import {
    Text, 
    TouchableOpacity, 
    View, 
    Image, 
    StyleSheet,
    ToastAndroid,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

export default class DrawerPanel extends Component {
    onGenderButtonPress = () => {
        toThis = this.props.gender == 'm' ? 'f' : 'm'
        AsyncStorage.setItem('gender', toThis)
        this.props.onSetCurrentGender(toThis)
        ToastAndroid.show((toThis == 'm' ? '남성' : '여성') + '으로 변경 완료!', ToastAndroid.SHORT)
    }

    render() {
        const {gender, onWhoButtonPress, onBiasButtonPress} = this.props
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/logo/logo_white.png')}
                    resizeMode='stretch'
                    style={{width:"45%", height : "15%", marginTop : "20%", marginBottom : "12%", tintColor:'#00C1DE'}}
                />
                <Text style={{fontSize : 15, height:"9.5%", width:"100%", borderBottomWidth : 5, borderBottomColor:'rgba(212,213,213,0.6)', paddingLeft : "9.5%"}}>
                    현재 성별이{'\n'}
                    <Text style={{color:'#00C1DE', fontWeight:'bold'}}>{gender == 'm' ? '남성' : '여성'}</Text>으로 설정되었습니다.
                </Text>
                <View style={{height:"2%"}}/>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={this.onGenderButtonPress}>
                    <View style={styles.button}>
                        <Image
                            source={require('../../assets/images/button/genderButton.png')}
                            resizeMode='stretch'
                            style={styles.buttonImage}
                        />
                        <Text style={styles.buttonText}>
                            성별 바꾸기
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={onWhoButtonPress}>
                    <View style={styles.button}>
                        <Image
                            source={require('../../assets/images/button/whoButton.png')}
                            resizeMode='stretch'
                            style={styles.buttonImage}
                        />
                        <Text style={styles.buttonText}>
                            미세 먼지 기준
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => {}}>
                    <View style={styles.button}>
                        <Image
                            source={require('../../assets/images/button/myTempButton.png')}
                            resizeMode='stretch'
                            style={[styles.buttonImage, {tintColor:'#E2E2E2'}]}
                        />
                        <Text style={[styles.buttonText, {color:'#E2E2E2'}]}>
                            나의 체감온도
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Image
                            source={require('../../assets/images/button/myStyleButton.png')}
                            resizeMode='stretch'
                            style={[styles.buttonImage, {tintColor:'#E2E2E2'}]}
                        />
                        <Text style={[styles.buttonText, {color:'#E2E2E2'}]}>
                            스타일링
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{height:"25%"}}/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Image
                            source={require('../../assets/images/button/donateButton.png')}
                            resizeMode='stretch'
                            style={[styles.buttonImage, {tintColor:'#E2E2E2'}]}
                        />
                        <Text style={[styles.buttonText, {color:'#E2E2E2'}]}>
                            후원하기
                        </Text>
                    </View>
                </TouchableOpacity>
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
    buttonContainer : {
        width:"100%",
        height : "6%",
        marginBottom : "5%",
    },
    button : {
        flexDirection:'row',
        alignItems:'center',
        height : "100%",
        margin : "3%",
        width : "100%",
    },
    buttonImage : {
        height : "100%",
        width : "14%",
        margin:"3%"
    },
    buttonText : {
        marginLeft : "2%",
        fontSize : 13
    }
})