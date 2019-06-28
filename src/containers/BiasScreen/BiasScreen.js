import React, {Component} from 'react'
import {
    Text,
    View,
    Image, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {connect} from 'react-redux'

import {setCurrentGender} from '../../store/actions/index'
import AsyncStorage from '@react-native-community/async-storage';

class BiasScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    closeThis = () => {
        this.props.navigation.goBack()
    }

    render() {
        const {currentBias} = this.props

        getBiasGrade = () => {
            switch(currentBias) {
                case -2 : return '추위 많이 탐'
                case -1 : return '추위 좀 탐'
                case 0 : return '평균'
                case 1 : return '더위 좀 탐'
                default : return '더위 많이 탐'
            }
        }

        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row',height:"18%", width:"100%", paddingTop:"10%"}}>
                    <TouchableOpacity 
                        style={{flex:1}}
                        onPress={this.closeThis}>
                        <Image
                            style={{tintColor:'#707070', height : "100%", width:"100%", marginLeft:"40%"}}
                            resizeMode='stretch'
                            source={require('../../assets/images/button/backButton.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{flex:8, textAlign:'center', fontSize: 20}}>
                        나의 체감온도
                    </Text>
                    <View style={{flex:1}}/>
                </View>
                <View style={{flexDirection:'row',height:"70%", width:"100%", alignItems: 'center'}}>
                    <View style={{width : "20%"}}/>
                    <View style={{width:"5%", height:"100%", backgroundColor:'red'}}>
                        <View style={{width:"5%", height:"100%", backgroundColor:'red'}}/>
                        <View style={{width : "20%"}}/>
                    </View>
                    <View style={{width : "25%"}}/>
                    <View style={{width:"30%", height:"50%"}}>
                        <TouchableOpacity style={{height:"33%", width : "100%", justifyContent:'center', alignItems:'center'}}>
                            <Image
                                source={require('../../assets/images/button/plusButton.png')}
                                style={{height:"60%", width : "37%"}}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                        <View style={{width:"100%", height:"33%", borderWidth:1, borderColor : "#707070", borderRadius : 20}}>
                            <Text>
                                {this.getBiasGrade}
                            </Text>
                        </View>
                        <TouchableOpacity style={{height:"33%", width : "100%", justifyContent:'center', alignItems:'center'}}>
                            <Image
                                source={require('../../assets/images/button/minusButton.png')}
                                style={{height:"60%", width : "37%"}}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        alignItems : 'center',
    }
})

const mapStateToProps = state => {
    return {
        currentBias : state.current.currentBias,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentGender : (currentGender) => dispatch(setCurrentGender(currentGender)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BiasScreen);