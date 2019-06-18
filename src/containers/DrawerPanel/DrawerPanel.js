import React, {Component} from 'react'
import {Text, Button, View} from 'react-native'

export default class DrawerPanel extends Component {
    render() {
        const {onDonatePress} = this.props
        return (
            <View>
                <Text>
                    I'm Drawer Panel
                </Text>
                <Button
                    title='후원하기'
                    //onPress={onDonatePress}
                />
            </View>
        );
    }
}