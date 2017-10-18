import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import '../css/ToDoList.css';

class ToDoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  addItem(event){
    let itemArray = this.state.items;

    if (this._inputElement.value !=='') {
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });

      this._inputElement.value = '';
    }

    console.log(itemArray);
    event.preventDefault();
  }

  deleteItem(key){
    let filteredItems = this.state.items.filter(function(item){
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })
  }

  render(){
    return(
      <div className="todoListMain">
        <div className ="headerBar">Todo</div>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
               placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
        <ToDoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    )
  }
}

export default ToDoList;
