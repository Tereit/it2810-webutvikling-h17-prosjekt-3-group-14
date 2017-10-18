import {Text, View} from 'react-native';
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
      <View className="noteView">
        {this.display()}
      </View>
    );
  }

  const styles = StyleSheet.create({
    noteView: {
      backgroundColor: 'white',
      width: 450,
      height: 1000,
      textAlign: 'justify',
      paddingLeft: 10,
      paddingRight: 10

    }

  });
}


export default NoteView;
