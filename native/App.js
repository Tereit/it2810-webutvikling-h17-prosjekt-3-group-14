import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoItems from './components/ToDoItems';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Wohoo!!!</Text>
        <ToDoItems />
      </View>
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
