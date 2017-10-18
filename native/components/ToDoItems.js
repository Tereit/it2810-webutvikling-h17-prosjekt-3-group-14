import React from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import ToDoList from './ToDoList';

export default class ToDoItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            text: ''
        };
    }

    _onPress = ()=> {
        let newItem = {
            key: this.state.text,
            title: this.state.text
        };
        this.setState({
            items: [...this.state.items, newItem]
        });
    };

    render() {
        return (
            <View style={style.input}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Enter todo item here!"
                    onChangeText={(text)=> this.setState({text})}
                />
                <Button
                    onPress={this._onPress}
                    title="Submit"
                />
                <ToDoList items={this.state.items} style={style.todolist} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    input: {
        paddingTop: 50,
    },
    todolist:{
        backgroundColor: 'blue',
    }
});