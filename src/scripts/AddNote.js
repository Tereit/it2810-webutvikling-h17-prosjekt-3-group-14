import React, {Component} from "react";

class AddNote extends Component {

  constructor(props) {
    super(props);
    this.state={
      title: "",
      body: ""
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.addNote = this.addNote.bind(this);
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
      <div className="form">
      <form>
        <label>
          <div className="addNoteHeader">Add note</div>
          <br/>
          <input
            name="title"
            type="text"
            placeholder="Title.."
            className="titleInput"
            value={this.state.title}
            onChange={this.onTitleChange} />
        </label>
        <br />
        <label>

          <br/>
          <textarea
          name='body'
          placeholder="Write your note here.."
          className="noteInput"
          value={this.state.body}
          onChange={this.onBodyChange}/>
        </label>
        <br />
        <button type='button' value='Save Note!' className="saveButton" onClick={this.addNote} >Save note</button>
      </form>
    </div>
    );
  }

}

export default AddNote;
