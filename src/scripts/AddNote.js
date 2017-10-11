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
      <form>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange} />
        </label>
        <br />
        <label>
          Write your note
          <textarea
          name='body'
          value={this.state.body}
          onChange={this.onBodyChange}/>
        </label>
        <br />
        <button type='button' value='Save Note!' onClick={this.addNote} >Save note</button>
      </form>
    );
  }

}

export default AddNote;
