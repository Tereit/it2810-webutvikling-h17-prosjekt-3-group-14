
import React, {Component} from "react";
import "../css/Notes.css";


class Note extends Component {

  render (){
    return(
      <div className="noteElement">
      <p onClick = {()=>{this.props.selected(this)}}>{this.props.note.title}</p>
      <button onClick={()=>{this.props.delete(this)}}>Delete</button>
    </div>
    )
  }
}


export default Note;
