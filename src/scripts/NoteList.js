import React, {Component} from "react";
import Note from "./Note";

class NoteList extends Component {

  constructor(props) {
    super(props);
    this.createList=this.createList.bind(this);
    this.delete = this.delete.bind(this);
  }

  createList(){
    return this.props.notes.map( (note,index) => <li key={index}><Note note={note} delete = {this.delete} selected = {this.props.selected}/></li> );
  }

  delete(note){
    this.props.delete(note.props.note);
  }


  render (){
    return(
      <div className="flex-box1">
        <ul className="notesList">{this.createList()}</ul>
    </div>
    );
  }
}


export default NoteList;
