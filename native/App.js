import React from 'react';
import { Text, View } from 'react-native';
import Home from './components/Home';
import ToDoItems from './components/ToDoItems';
import Notes from './components/Notes';
import Calendar from './components/Calendar';
import {StackNavigator} from 'react-navigation';

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
