import React from 'react';
import {Text, View} from 'react-native';
import ToDoList from './ToDoList';

export default class ToDoItems extends React.Component {
    render() {
        return (
            <View>
                <Text>ToDoItems!!</Text>
                <ToDoList/>
            </View>
        );
    }
}