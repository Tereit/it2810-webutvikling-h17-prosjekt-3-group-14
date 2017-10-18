import React from 'react';
import {Text, View} from 'react-native';
import ToDo from './ToDo';

export default class ToDoList extends React.Component {
  static navigationOptions = {
    title: 'Todo List'
  }
    render() {
        return (
            <View>
                <Text>ToDoList!!</Text>
                <ToDo/>
            </View>
        );
    }
}
