import React from 'react';
import {Text, View} from 'react-native';

export default class ToDo extends React.Component {
    render() {
        return (
            <View>
                <Text>Title: {this.props.item.title}</Text>
            </View>
        );
    }
}