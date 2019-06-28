import React, {Component} from 'react'
import {
    Text,
    View,
    Image, 
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'

export default class WhoScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    closeThis = () => {
        this.props.navigation.goBack()
    }

    render() {
        return(
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <View style={{flexDirection:'row',height:Dimensions.get('window').height * 0.18, width:"100%", paddingTop:"10%"}}>
                        <TouchableOpacity 
                            style={{flex:1}}
                            onPress={this.closeThis}>
                            <Image
                                style={{tintColor:'#707070', height : "80%", width:"80%", marginLeft:"40%"}}
                                resizeMode='stretch'
                                source={require('../../assets/images/button/backButton.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{flex:8, textAlign:'center', fontSize: 20}}>
                            미세먼지 기준
                        </Text>
                        <View style={{flex:1}}/>
                    </View>
                    <Text style={{fontSize:13, textAlign:'center'}}>
                        하늘 옷장은 세계보건기구(WHO) 기준을 사용하며{'\n'}
                        한국환경공단(AirKorea) 기준과는{'\n'}
                        무관하다는 것을 말씀드립니다.{'\n'}
                        {'\n'}
                        최고, 좋음, 양호, 보통, 주의, 나쁨, 위험, 최악등으로{'\n'}
                        총 8단계로 나누어 세부적으로 정보를 제공합니다.
                    </Text>
                    <View style={{height:Dimensions.get('window').height * 0.05}}/>
                    <Image
                        source={require('../../assets/images/who.png')}
                        style={{height:Dimensions.get('window').height * 1, width:Dimensions.get('window').width * 0.85}}
                        resizeMode='stretch'
                    />
                    <View style={{height:Dimensions.get('window').height * 0.03}}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scroll : {
    },
    container : {
        width : "100%",
        alignItems : 'center',
    }
})