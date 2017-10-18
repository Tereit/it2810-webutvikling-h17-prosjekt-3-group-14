import React, {Component} from "react";
import "../../css/Notes.css";
import NoteList from "./NoteList";
import AddNote from "./AddNote";
import NoteView from "./NoteView";


class Notes extends Component {

  constructor(props) {
    super(props);
    this.state={
      notes: [],
      currentNote: null
    };
    this.addNote = this.addNote.bind(this);
    this.save = this.save.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.selectedNote = this.selectedNote.bind(this);
}

    componentWillMount(){
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
    }

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

  render (){
    return(
      <div className="container">
        <div className="flexbox1">
        <div className="headerBar">Notes</div>

      </div>
      <div className="flexbox2">
        <AddNote addNote = {this.addNote}/>
        <NoteList notes = {this.state.notes} delete= {this.deleteNote} selected = {this.selectedNote}/>
        <NoteView currentNote = {this.state.currentNote}/>
      </div>

        {this.save()}


      </div>
    );
  }


}

export default Notes;
