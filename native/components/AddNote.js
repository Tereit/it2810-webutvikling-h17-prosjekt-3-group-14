import React, {Component} from "react";
import {AsyncStorage, Text, View, StyleSheet} from 'react-native';

class AddNote extends Component {

  constructor(props) {
    super(props);
    this.state={
      title: "",
      body: ""
    };
}

onTitleChange(event){
  this.setState({
    title: event.target.value
  });
}

onBodyChange(event){
  this.setState({
    body: event.target.value
  });
}

addNote(){
  const note = {
    title: this.state.title,
    body: this.state.body
  }
  this.props.addNote(note);

}

  render (){
    return(
      <View className="form">
        <FormLabel>
          <View className="addNoteHeader">Add note</View>
          <br/>
          <FormInput
            name="title"
            type="text"
            placeholder="Title.."
            className="titleInput"
            value={this.state.title}
            onChange={this.onTitleChange} />
        </FormLabel>
        <br />
        <FormLabel>

          <br/>
          <TextInput
          name='body'
          placeholder="Write your note here.."
          className="noteInput"
          value={this.state.body}
          onChange={this.onBodyChange}/>
        </FormLabel>
        <br />
        <button type='button' value='Save Note!' className="saveButton" onClick={this.addNote} >Save note</button>
    </View>
    );
  }

}

export default AddNote;
