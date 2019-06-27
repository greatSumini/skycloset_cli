import React, {Component} from 'react'
import {
    View, 
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
    Image,
} from 'react-native'

import {getGeoBgColor} from './getBgColor'
import {getWeatherIcon} from './getWeatherInfo'
import dataF from '../../../config/data'

export default class TempChart extends Component {
    state = {
        leftTop : [],
        leftBottom : [],
        rightTop : [],
        rightBottom : [],
        ascendLeft : [],
        ascendRight : [],
    }

    componentWillMount = () => {
        const {data} = this.props

        let minTemp = 100
        let maxTemp = -100

        lt = []
        lb = []
        rt = []
        rb = []
        al = []
        ar = []

        for(let i = 0;i<26;++i) {
            minTemp = Math.min(minTemp, Math.round(data[i].temp))
            maxTemp = Math.max(maxTemp, Math.round(data[i].temp))
        }
        for(let i = 1;i<25 ;++i) {
            prev = (data[i-1].temp + data[i].temp) / 2
            now = data[i].temp
            next = (data[i].temp + data[i+1].temp) / 2

            lt.push({
                borderBottomWidth: String(Math.abs((Math.round(now) - Math.round(prev)))/(maxTemp - minTemp)*100) + "%",
                backgroundColor : 'transparent',
                borderLeftColor : 'transparent',
                borderRighttColor : 'transparent',
                borderStyle : 'solid',
                borderLeftWidth : now > prev ? String(Math.abs((Math.round(now) - Math.round(prev)))/(maxTemp - minTemp)*100) + "%" : 0,
                borderRightWidth : now < prev ? String(Math.abs((Math.round(now) - Math.round(prev)))/(maxTemp - minTemp)*100) + "%" : 0,
                borderBottomColor : getGeoBgColor(),
            })
            lb.push({
                height: String((Math.round(prev) - minTemp)/(maxTemp - minTemp)*100) + "%"
            })
            rt.push({
                borderBottomWidth: String(Math.abs((Math.round(next) - Math.round(now)))/(maxTemp - minTemp)*100) + "%",
                backgroundColor : 'transparent',
                borderLeftColor : 'transparent',
                borderRighttColor : 'transparent',
                borderStyle : 'solid',
                borderLeftWidth : next > now ? String(Math.abs((Math.round(now) - Math.round(prev)))/(maxTemp - minTemp)*100) + "%" : 0,
                borderRightWidth : next < now ? String(Math.abs((Math.round(now) - Math.round(prev)))/(maxTemp - minTemp)*100) + "%" : 0,
                borderBottomColor : getGeoBgColor(),
            })
            rb.push({
                height: String((Math.round(next) - minTemp)/(maxTemp - minTemp)*100) + "%"
            })
            al.push(now > prev)
            ar.push(next > now)
        }
        this.setState({
            leftTop : lt,
            leftBottom : lb,
            rightTop : rt,
            rightBottom : rb,
            ascendLeft : al,
            ascendRight : ar,
        })
    }
    createChartItems = () => {
        const {data} = this.props;
        let chartItems = []
        hour = dataF.getHours()

        for(let i = 0;i<24;++i) {
            const iconImage = getWeatherIcon(data[i].icon)
            chartItems.push(
                <View style={styles.barContainer}>
                    <Text style={{height:"9.5%", fontSize : 13}}>
                        {Math.round(data[i].temp)}
                    </Text>
                    <View style={{height:"3.5%"}}/>
                    <View style={styles.areaContainer}>
                        <View style={styles.areaItem}>
                            <View style={[this.state.leftBottom, styles.area]}>
                            </View>
                            <View style={[this.state.leftTop, styles.area]}>
                            </View>
                        </View>
                        <View style={styles.areaItem}>
                            <View style={[this.state.rightBottom, styles.area]}>
                            </View>
                            <View style={[this.state.rightTop, styles.area]}>
                            </View>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.icon}
                            source={iconImage}
                        />
                    </View>
                    <View style={{height:"9.5%"}}/>
                    <Text style={{height:"9.5%", fontSize : 13}}>
                        {hour}시
                    </Text>
                </View>
            )
            hour = hour + 1
        }
    }

    render() {
        return (
            <ScrollView
                horizontal={true}
                style={styles.container}>
                <View style={styles.wrapper}>
                    {this.createChartItems()}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        height : "100%",
    },
    wrapper : {
        width: Dimensions.get('window').width * 3.07,
        height : "100%",
        flexDirection : 'row',
    },
    barContainer: {
        height : "100%",
        width : "15%",
        alignItems : 'center'
    },
    areaContainer : {
        flexDirection: 'row',
        height : "46%",
    },
    areaItem : {
        height : "100%",
        width : "50%",
        flexDirection : 'column-reverse'
    },
    area : {
        width : "100%",
    },
    areaTriangle : {
        width : 0,
        height : 0,

    },
    iconContainer : {
        height : "21%",
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : getGeoBgColor(),
    },
    icon : {
        height : "80%",
        width : "80%",

    }
})