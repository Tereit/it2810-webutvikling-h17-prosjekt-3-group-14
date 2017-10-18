import React from 'react';
import { Text, View } from 'react-native';
import Home from './components/Home';
import ToDoItems from './components/ToDoItems';
import {StackNavigator} from 'react-navigation';
import Calendar from './components/Calendar';

class Notes extends React.Component {
    static navigationOptions = {
        title: 'Notes'
    };
    render(){
        return <View><Text>Notes</Text></View>
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: Home},
    Todo: {screen: ToDoItems},
    Notes: {screen: Notes},
    Calendar: {screen: Calendar}
});

export default class App extends React.Component {
    render() {
        return (
            <SimpleApp/>
        );
    }
}