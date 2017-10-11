
import React, {Component} from "react";
import "../css/Notes.css";


class Note extends Component {

  render (){
    return(
      <div onClick = {()=>{this.props.selected(this)}}>
      <p className="noteElement">{this.props.note.title} <button onClick={()=>{this.props.delete(this)}}>Delete</button></p>
    </div>
    )
  }
}


export default Note;
