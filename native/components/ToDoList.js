import React from 'react';
import {Text, View, FlatList} from 'react-native';
import ToDo from './ToDo';

export default class ToDoList extends React.Component {


    render() {
        return (
            <View>
                <Text>ToDoList!!</Text>
                <FlatList
                    data={this.props.data}
                    renderItem={({item}) => <ToDo item={item} />}
                />
            </View>
        );
    }
}