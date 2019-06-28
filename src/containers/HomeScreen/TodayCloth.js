import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

import {getCondBoxColor} from './getBgColor'
import {getUserDiscomfort} from './calculator'
import {getClothRecommends} from '../../utils/getRecommend'
import {getClothImage, getClothText, getPartLength} from '../../utils/getClothImage'

export default class TodayCloth extends Component {
    state = {
        space : [],
        barLength : [],
    }

    render() {
        const {temp, humidity, bias, sun, gender} = this.props
        const userDiscomfort = getUserDiscomfort(temp, humidity, bias, sun)
        const clothCombList = getClothRecommends(gender, userDiscomfort)

        getItem = () => {
            const {temp, tempYest, pm10Value, icon} = this.props
            if((icon == 'snow' || icon == 'rain') && pm10Value >= 51) {
                return require('../../assets/images/item/i_3.png');
            }
            if((temp >= 33 && tempYest >= 33) && pm10Value >= 51) {
                return require('../../assets/images/item/i_4.png');
            }
            if(icon == 'snow' || icon == 'rain') {
                return require('../../assets/images/item/i_0.png');
            }
            if(temp >= 33 && tempYest >= 33) {
                return require('../../assets/images/item/i_2.png');
            }
            if(pm10Value >= 51) {
                return require('../../assets/images/item/i_1.png');
            }
        }

        getRandomCloth = () => {
            index = (Math.random() * clothCombList.length).toFixed(0) % clothCombList.length

            length_t = length_b = length_o = index_t = index_b = index_o = 0

            length_t = getPartLength(gender, 't', clothCombList[index].top)
            if(clothCombList[index].bottom != -1)
                length_b = getPartLength(gender, 'b', clothCombList[index].bottom)
            if(clothCombList[index].outer != -1)
                length_o = getPartLength(gender, 'o', clothCombList[index].outer)

            index_t = Math.floor(Math.random() * length_t)
            if(clothCombList[index].bottom != -1)
                index_b = Math.floor(Math.random() * length_b)
            if(clothCombList[index].outer != -1)
                index_o = Math.floor(Math.random() * length_o)

            return (
                <TouchableOpacity style={{height : "100%", width : "100%"}}
                    onPress={()=>{this.setState({phase_3:true})}}>
                    <View style={{height : "100%", width : "100%"}}>
                        <View style={styles.row}>
                            {(clothCombList[index].bottom != -1) && (
                                <Image
                                    source={getClothImage(gender, 'b', clothCombList[index].bottom, index_b)}
                                    resizeMode='stretch'
                                    style={{height : "95%", width:"46%"}}
                                />
                            )}
                            <Image
                                source={getClothImage(gender, 't', clothCombList[index].top, index_t)}
                                resizeMode='stretch'
                                style={{height : clothCombList[index].bottom == -1 ? "100%" : "77%", width: clothCombList[index].bottom == -1 ? "40%" :"50%", marginRight:clothCombList[index].bottom == -1?"0%":"-30%"}}
                            />
                            {(clothCombList[index].bottom == -1) && (
                                <View style={{width:"10%"}}/>
                            )}
                            {(clothCombList[index].outer != -1) && (
                                <Image
                                    source={getClothImage(gender, 'o', clothCombList[index].outer, index_o)}
                                    resizeMode='stretch'
                                    style={{height : "80%", width:"51%", marginRight: clothCombList[index].bottom == -1 ? "-10%" : "-20%"}}
                                />  
                            )}
                        </View>
                        <View style={{width:"100%", height:"15%"}}>
                            <Image
                                source={getItem()}
                                resizeMode='stretch'
                                style={{height : "100%", width:"100%"}}
                            />
                        </View>
                        <View style={{width:"100%", height:"18%", alignItems:'flex-end', paddingRight : '6.5%'}}>
                            <Text style={styles.text}>
                                <Text style={{fontFamily:"Bongodik-Medium"}}>Top</Text> : {getClothText(gender, 't', clothCombList[index].top)}
                            </Text>
                            <Text style={styles.text}>
                                <Text style={{fontFamily:"Bongodik-Medium"}}>Bottom</Text> : {getClothText(gender, 'b', clothCombList[index].bottom)}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.container}>
                {getRandomCloth()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width : "92%",
        height : "100%",
        borderRadius: 15,
        paddingTop : "3.5%",
        backgroundColor : getCondBoxColor()
    },
    row : {
        paddingLeft : "-2%",
        flexDirection : 'row-reverse',
        height : "65%",
        width : "100%",
    },
    text : {
        fontSize : 13,
        color : 'white',
        height : "40%",
    }
})