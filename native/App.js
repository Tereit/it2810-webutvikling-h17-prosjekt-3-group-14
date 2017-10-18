import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import ToDoList from './components/ToDoList';
import {StackNavigator} from 'react-navigation';
import Calendar from './components/Calendar';

class Notes extends React.Component {
  static navigationOptions = {
    title: 'Notes'
  }
    render(){

      return <View><Text>Notes</Text></View>
    }
}

const SimpleApp = StackNavigator({
  Home: {screen: Home},
  Todo: {screen: ToDoList},
  Notes: {screen: Notes},
  Calendar: {screen: Calendar}
})

export default class App extends React.Component {
  render() {
    return (
      <SimpleApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
