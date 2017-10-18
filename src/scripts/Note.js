
import React, {Component} from "react";
import "../css/Notes.css";


class Note extends Component {

  render (){
    return(
      <div className="noteElement">
      <p onClick = {()=>{this.props.selected(this)}}>{this.props.note.title}</p>
      <i className="fa fa-trash-o deleteButton" aria-hidden="true" onClick={()=>{this.props.delete(this)}}/>
    </div>
    )
  }
}


export default Note;
