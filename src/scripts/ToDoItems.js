import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class ToDoItems extends Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  createTasks(item){
    return <li><input type="checkbox" onChange={(e) => this.delete(item.key, e)} />{item.text}</li>
    //return <li onClick={(e) => this.delete(item.key, e)} key={item.key}>{item.text}</li>
  }

  delete(key){
    this.props.delete(key);
  }

  render(){
    let toDoEntries = this.props.entries;
    let listItems = toDoEntries.map(this.createTasks);

    return(
      <ul className="list">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default ToDoItems;
