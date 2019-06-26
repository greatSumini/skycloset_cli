import React, {Component} from 'react'
import {
    Share,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Platform,
    TouchableWithoutFeedback,
    ToastAndroid,
    LayoutAnimation,
    Dimensions,
    UIManager,
    BackHandler,
} from 'react-native'
import {connect} from 'react-redux'

import Drawer from 'react-native-drawer'
import LinearGradient from 'react-native-linear-gradient'
import DialogInput from 'react-native-dialog-input'

import DrawerPanel from '../DrawerPanel/DrawerPanel'
import HomeHead from './HomeHead'
import WeatherInfo from './WeatherInfo'
import Closet from '../../components/Closet'
import MiniWeather from './MiniWeather'
import WeeklyWeather from './WeeklyWeather'
import DetailHead from './DetailHead'

import data from '../../../config/data'
import {dev_passwd} from '../../../config/keys'

import {getHomeBgColor} from './getBgColor'
import {getPmCondition, getPmImoticon, getPmColor} from './getDustInfo'
import {getWeatherCondition, getWeatherImoticon} from './getWeatherInfo'

class HomeScreen extends Component {
    state = {
        isDialogVisible : false,
        phase_0 : true,
        phase_1 : false,
        phase_2 : false,
        phase_3 : false,
        canAnimateDetail : true,
    }

    constructor(){
        super()
        if(Platform.OS === 'android')
        {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }

    static navigationOptions = {
        header: null,
    }

    readyFor700ms = async() => {
        return new Promise((resolve) =>
            setTimeout (
                () => {resolve('result')},
                500
            )    
        )
    }

    openDrawer = () => {
        this._drawer.open()
    }

    shareWeather = async () => {
        tempDiff = this.props.weather1.tempMax - this.props.weather0.tempMax
        const result = await Share.share({
            message:
            `☀하늘옷장☁ - Share Test Message
지금 ${this.props.address}의 날씨는 ${getWeatherImoticon(this.props.currentWeather.currentIcon)}${getWeatherCondition(this.props.currentWeather.currentIcon)}!!
🌡현재온도 : ${this.props.currentWeather.currentTemp.toFixed(1)}
🌡어제보다 ${Math.abs(tempDiff).toFixed(1)}℃ ${tempDiff>0 ? '↑' : '↓'}
🌫미세 : ${getPmImoticon(this.props.dust.pm10Value, 0)}(${getPmCondition(this.props.dust.pm10Value, 0)}:${this.props.dust.pm10Value}㎍/m³)
🌫초미세 : ${getPmImoticon(this.props.dust.pm25Value, 1)}(${getPmCondition(this.props.dust.pm25Value, 1)}:${this.props.dust.pm25Value}㎍/m³)
자외선이 강한 날이에요. 반팔 입고 꼭 썬크림 바르세요!`,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
        }
        else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    }

    openGeoScreen = () => {
        this.props.navigation.push('Geo')
    }
    /*
    openDonateScreen = () => {
        this.props.navigation.push('Donate')
    }*/

    onPowerLongPress = () => {
        if(data.state.dev) {
            data.randDevHours()
            ToastAndroid.show('HOUR : ' + data.state.dev_hours, ToastAndroid.SHORT)
            this.setState({phase_3:true})
            return
        }
        this.setState({isDialogVisible:true})
    }

    onDevPasswdSubmit = (passwd) => {
        this.setState({isDialogVisible:false})
        if(passwd != dev_passwd) {
            return
        }
        ToastAndroid.show('DEV MODE ON', ToastAndroid.SHORT)
        
        data.randDevHours()
        data.setDevMode(!data.state.dev)
    }

    onDetailPress = async() => {
        if(this.state.canAnimateDetail == false)
            return

        this.setState({canAnimateDetail: false})

        if(this.state.phase_0) {
            LayoutAnimation.configureNext({
                duration : 500,
                create : {
                    property: LayoutAnimation.Properties.scaleY,
                    type: LayoutAnimation.Types.spring,
                    springDamping : 1.5
                },
                update : {
                    property: LayoutAnimation.Properties.scaleY,
                    type: LayoutAnimation.Types.spring,
                    springDamping : 0.4
                },
            })
            this.setState({phase_0:false, phase_1:true, phase_2:false})
        }
        else {
            LayoutAnimation.configureNext({
                duration : 200,
                create : {
                    property: LayoutAnimation.Properties.opacity,
                    type: LayoutAnimation.Types.linear,
                },
                update : {
                    property: LayoutAnimation.Properties.opacity,
                    type: LayoutAnimation.Types.linear,
                },
            })
            this.setState({phase_0:true, phase_1:false, phase_2:false})    
        }
        console.log(this.state)
        done = await this.readyFor700ms()
        if (done !== null)
            this.setState({canAnimateDetail : true})
    }

    getWindBearingText = (windBearing) => {
        const windBearingText = [
            '북',
            '북동',
            '동',
            '동남',
            '남',
            '남서',
            '서',
            '서북',
            '북',
        ]
        return windBearingText[((windBearing + 22.5)/45).toFixed(0)]
    }

    getUvIndexText = (uvIndex) => {
        if(uvIndex<=2) {
            return '낮음'
        }
        if(uvIndex<=5) {
            return '보통'
        }
        if(uvIndex<=7) {
            return '높음'
        }
        if(uvIndex<=10) {
            return '매우높음'
        }
        return '위험'
    }

    render() {
        const {address, currentWeather, weather1, weather0, dust, weekWeather} = this.props;
        const compBg = 'rgba(10, 10, 10, 0.3)'

        const wrapper_phase1 = (this.state.phase_0 != true) ? {
            paddingTop : 0,
            height : Dimensions.get('window').height,
            paddingBottom : "-15%",
        } : null

        const innerWrapper = (this.state.phase_0 != true) ? {
            paddingTop : "6%"
        } : null

        return (
                <Drawer
                    ref={(ref)=>this._drawer = ref}
                    content={
                    <DrawerPanel 
                        //onDonatePress={this.openDonateScreen}
                    />}
                    openDrawerOffset={0.4}
                    tapToClose={true}
                    tweenDuration={100}
                    >
                    <ScrollView style={styles.container}>
                        <View style={wrapper_phase1}>
                            <LinearGradient colors={getHomeBgColor(false)} /*style={{height: (this.state.phase_0 ? "100%" : "23%")}}*/>
                                <View style={[styles.wrapper, wrapper_phase1]}>
                                    <View style={[styles.wrapperInner, innerWrapper]}>
                                        {(this.state.phase_0)&&(
                                        <View style={styles.wrapperInner}>
                                            <HomeHead
                                                address={address}
                                                onDrawerButtonPressed={this.openDrawer}
                                                onShareButtonPressed={this.shareWeather}
                                                onAddressPressed={this.openGeoScreen}
                                            />
                                            <Text style={styles.tempNowStyle}>
                                                {currentWeather.currentTemp.toFixed(1)}℃
                                            </Text>
                                            <Text style={styles.tempMinMaxStyle}>
                                                ( {weather1.tempMax.toFixed(1)}℃ / {weather1.tempMin.toFixed(1)}℃ )
                                            </Text>
                                        </View>
                                        )}
                                        {(this.state.phase_0!=true)&&(
                                            <DetailHead
                                                style={{height:"10%"}}
                                                onBackButtonPressed={this.onDetailPress}
                                            />
                                        )}
                                    </View>
                                    {(this.state.phase_0!=true)&&(
                                    <View style={{marginTop: "20%", height:"50%", width:"100%", backgroundColor:'white', marginBottom:"-114%"}}>
                                    </View>
                                    )}
                                    <WeatherInfo 
                                        icon={currentWeather.currentIcon}
                                        tempDiff={(weather1.tempMax - weather0.tempMax)}
                                        pm10 = {dust.pm10Value}
                                        pm25 = {dust.pm25Value}
                                        onPress = {this.onDetailPress}
                                    />
                                    {(this.state.phase_0!=true)&&(
                                        <View style={styles.detailContinaer}>
                                            <View style={{width:"100%",flexDirection:"row", height:"13%", marginTop:"0%",borderBottomColor:'#D4D5D5', borderBottomWidth:4, marginBottom:"5%"}}>
                                                <View style={{height:"85%", flex:1, alignItems:'center', justifyContent:'center'}}>
                                                    <Text style={styles.detailCompTitle}>
                                                        습도
                                                    </Text>
                                                    <Text style={styles.detailCompText}>
                                                        {(currentWeather.currentHum * 100)}%
                                                    </Text>
                                                </View>
                                                <View style={{height:"85%", marginBottom:"0%", flex:1, alignItems:'center', justifyContent:'center', borderLeftWidth:1, borderRightWidth:1, borderColor:'#D4D5D5'}}>
                                                    <Text style={styles.detailCompTitle}>
                                                        자외선
                                                    </Text>
                                                    <Text style={styles.detailCompText}>
                                                        {this.getUvIndexText(currentWeather.currentUv)} {currentWeather.currentUv}
                                                    </Text>
                                                </View>
                                                <View style={{height:"85%", flex:1, alignItems:'center', justifyContent:'center'}}>
                                                    <Text style={styles.detailCompTitle}>
                                                        풍속
                                                    </Text>
                                                    <Text style={styles.detailCompText}>
                                                        {this.getWindBearingText(currentWeather.currentWb)} {currentWeather.currentWs.toFixed(1)}m/s
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{flexDirection:'row', height : "6%", width:"88%", alignItems:'center', justifyContent:'center'}}>
                                                <Text style={{height:"50%", width:"23%", fontSize:13, fontFamily:"Bongodik-Regular", color:'#707070'}}>
                                                    미세먼지
                                                </Text>
                                                <View style={{height:"50%", width:Math.min(dust.pm10Value / 150 * 77, 77) + "%", backgroundColor:getPmColor(dust.pm10Value,0), justifyContent:'center', paddingLeft:"0.5%"}}>
                                                    <Text style={{color:'white'}}>
                                                        {dust.pm10Value}
                                                    </Text>
                                                </View>
                                                <View style={{height:"50%", width:Math.max((150 - dust.pm10Value) / 150 * 77, 0) + "%", backgroundColor:'#E5E6E6'}}>
                                                </View>
                                            </View>
                                            <View style={{flexDirection:'row', height : "6%", width:"88%", alignItems:'center', justifyContent:'center'}}>
                                                <Text style={{height:"50%", width:"23%", fontSize:13, fontFamily:"Bongodik-Regular", color:'#707070'}}>
                                                    초미세먼지
                                                </Text>
                                                <View style={{height:"50%", width:Math.min(dust.pm25Value / 150 * 77, 77) + "%", backgroundColor:getPmColor(dust.pm25Value,1), justifyContent:'center', paddingLeft:"0.5%"}}>
                                                    <Text style={{color:'white'}}>
                                                        {dust.pm25Value}
                                                    </Text>
                                                </View>
                                                <View style={{height:"50%", width:Math.max((150 - dust.pm25Value) / 150 * 77, 0) + "%", backgroundColor:'#E5E6E6'}}>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                    {(this.state.phase_0==true)&&(
                                    <View style={styles.wrapperInner}>
                                        <Closet/>
                                        <View style={styles.compContainer}>
                                            <View style={styles.compTitleContainer}>
                                                <Text style={styles.compTitle}>
                                                    내일 모레
                                                </Text>
                                            </View>
                                            <View style={styles.compCompContainer}>
                                                <MiniWeather bg={compBg}/>
                                                <View style={{width:"2%"}}></View>
                                                <MiniWeather bg={compBg}/>
                                            </View>
                                        </View>
                                        <View style={styles.compContainer}>
                                            <View style={styles.compTitleContainer}>
                                                <Text style={styles.compTitle}>
                                                    주간 예보
                                                </Text>
                                            </View>
                                            <View style={[styles.compCompContainer, {height : 350}]}>
                                                <WeeklyWeather weekInfo={weekWeather} bg={compBg}/>
                                            </View>
                                        </View>
                                        <TouchableWithoutFeedback
                                            onLongPress={this.onPowerLongPress}>
                                            <Text style={{color:'white', fontSize:13}}>
                                                Powerd by <Text style={{fontWeight:"bold"}}>Dark Sky, Air Korea</Text>
                                            </Text>
                                        </TouchableWithoutFeedback>
                                        <DialogInput
                                            isDialogVisible={this.state.isDialogVisible}
                                            title={"dev?"}
                                            message={"input passwd"}
                                            submitInput={(inputText) => this.onDevPasswdSubmit(inputText)}
                                            closeDialog={()=> {this.setState({isDialogVisible:false})}}>
                                        </DialogInput>
                                    </View>)}
                                </View>
                            </LinearGradient>
                        </View>
                    </ScrollView>
                </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop: (Platform.OS === 'ios') ? 20 : 0
    },
    wrapper : {
        width: "100%",
        paddingTop : "8%",
        alignItems: "center",
        paddingBottom : "8%",
    },
    wrapperInner : {
        width: "100%",
        alignItems: "center",
    },
    compContainer : {
        paddingLeft: "2%",
        paddingRight: "2%",
        marginBottom: "8%",
    },
    compTitleContainer : {
        width:"100%",
        paddingLeft: "6.4%",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
        marginBottom: "3.5%",
    },
    compCompContainer : {
        width:"100%",
        height: 250,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    },
    compTitle : {
        width: "100%",
        textAlign : "left",
        color: "white",
        fontSize : 17,
    },
    tempNowStyle : {
         paddingTop : 2,
         paddingBottom : 5,
         fontSize : 35,
         color : 'white',
         fontFamily : "Bongodik-Regular",
    },
    tempMinMaxStyle : {
         paddingTop : 3,
         paddingBottom : 3,
         fontSize : 17,
         color : 'white',
         fontFamily : "Bongodik-Regular",
    },
    detailContinaer : {
        height:"100%", 
        width:"100%", 
        backgroundColor:'white', 
        marginTop:"0%", 
        alignItems:'center'
    },
    detailCompTitle : {
        fontFamily : "Bongodik-Regular",
        fontSize : 13,
    },
    detailCompText : {
        fontFamily : "Bongodik-Medium",
        fontSize : 13,
        margin:"10%",
        fontWeight : 'bold',
    }
})

const mapStateToProps = state => {
    return {
        address: state.geoloc.address,
        weather0: state.weather.weather0,
        weather1: state.weather.weather1,
        weather2: state.weather.weather2,
        weather3: state.weather.weather3,
        weekWeather : state.weather.weekWeather,
        currentBias : state.current.currentBias,
        currentGender : state.current.currentGender,
        currentWeather : state.current.currentWeather,
        dust : state.dust.dust,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);