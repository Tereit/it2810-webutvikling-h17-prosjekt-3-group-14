import {Text, View, FlatList} from 'react-native';
import React, {Component} from "react";
import Note from "./Note";

class NoteList extends Component {

  constructor(props) {
    super(props);
    this.createList=this.createList.bind(this);
    this.delete = this.delete.bind(this);
  }


  delete(note){
    this.props.delete(note.props.note);
  }


  render (){
    return(
      <View>
        <FlatList
        notes={this.props.notes}
      renderItem={({item}) => <Note item ={item} {...this.props}/>}/>
    </View>
    );
  }
}


export default NoteList;
