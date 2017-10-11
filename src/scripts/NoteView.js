import React, {Component} from "react";

class NoteView extends Component {

  constructor(props) {
    super(props);

    this.display = this.display.bind(this);

}

display(){
  if (this.props.currentNote === null) {
    return (<p></p>)
  }
  else {
    return (<p>{this.props.currentNote.props.note.body}</p>)
  }
}

  render (){
    return(
      <div>
        {this.display()}
      </div>
    );
  }
}


export default NoteView;
