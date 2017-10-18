
import React, {Component} from "react";
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';


class Note extends Component {

  render (){
    return(
      <View style={noteElement}>
      <Text onClick = {()=>{this.props.selected(this)}}>{this.props.note.title}</Text>
      {/*<i className="fa fa-trash-o deleteButton" aria-hidden="true" onClick={()=>{this.props.delete(this)}}/>*/}
      <Icon name='trash' ios='md-trash' android='md-trash' style={deleteIcon}/>
    </View>
    )
  }

  const styles = StyleSheet.create({
    noteElement: {
      flex: 1,
      flexDirection: 'row',
      display: 'flex',
      backgroundColor: 'white',
      width: 100,
      height: 100,
      borderBottom: 'solid' 1 'grey',
      paddingTop: 20,
      justifyContent: 'flex-start',
      boxSizing: 'border-box',
      paddingLeft: 10
    }

    deleteIcon: {
      color: 'red'
    }

  });
}


export default Note;
