import React, {Component} from "react";
//import NoteList from "./NoteList";
//import AddNote from "./AddNote";
//import NoteView from "./NoteView";
import {AsyncStorage, Text, TextInput, View, StyleSheet} from 'react-native';
//import {FormLabel, FormInput} from 'react-native-elements';


class Notes extends Component {

  constructor(props) {
    super(props);
    this.state={
      notes: [],
      currentNote: null
    };
}

save(){
  let str = JSON.stringify(this.state.notes);
  try {
    AsyncStorage.setItem("notes", str)
  } catch (error) {
    console.log("Error in saving");
  }
}

componentWillMount(){
  try {
    const value = AsyncStorage.getItem("notes");
    if(value !== null) {
      console.log(value);
    }
  } catch (error) {
    console.log("Error loading data");
  }

}

componentWillUnmount(){
  this.save();
}

  /*  componentWillMount(){
      let str = localStorage.getItem("notes");
      let notes = [];

      if (str !== 'undefined' && str !== null){
        notes = JSON.parse(str);
      }
      this.setState({notes: notes})
    }

    componentWillUnmount(){
      let str = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", str);
    }

    save(){
      let str = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", str);
    } */
/*
    addNote(note){
      this.setState({
        notes: [...this.state.notes,note]
      });
      this.save();
    }

    deleteNote(note){
      let notes = this.state.notes.slice();
      let index = "undefined";
      for (let i = 0; i < notes.length; i++) {
        if (note.title === notes[i].title) {
          index = i;
          break;
        }
      }
      if (index !== "undefined") {
        notes.splice(index,1);
      }

      this.setState({
        notes: notes,
        currentNote: null
      });

      this.save();

    }

    selectedNote(note){
      this.setState({
        currentNote: note
      });

    }
*/
  render (){
    return(
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Text>Notes</Text>
        </View>
        <TextInput style={{height: 10}}
          placeholder="testing" /> 
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white'
  },

  flexbox1: {
    backgroundColor: 'skyblue'
  },

  flexbox2: {
    backgroundColor: 'red'
  },

  headerBar: {
    backgroundColor: 'grey',
    width: 400,
    alignSelf: 'stretch',
    alignContent: 'center',
    justifyContent: 'center'
  }

});


export default Notes;
