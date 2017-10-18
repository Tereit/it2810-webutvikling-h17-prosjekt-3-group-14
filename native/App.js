import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import ToDoItems from './components/ToDoItems';
import {StackNavigator} from 'react-navigation';

class Notes extends React.Component {
  static navigationOptions = {
    title: 'Notes'
  };
    render(){

      return <View><Text>Notes</Text></View>
    }
}


class Calendar extends React.Component {
  static navigationOptions = {
    title: 'Calendar'
  };
    render(){
      return <View><Text>Calendar </Text></View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
