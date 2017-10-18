import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import '../../css/ToDoList.css';

class ToDoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }

  componentDidMount(){
    let tempNotes = [];
    let localState = JSON.parse(localStorage.getItem('todoList'));
    for (var item in localState) {
      tempNotes.push(localState[item]);
    }
    this.setState({
      items: tempNotes
    })
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
    event.preventDefault();
    this.updateLocalStorage(itemArray);
  }

  deleteItem(key){
    let filteredItems = this.state.items.filter(function(item){
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems
    });
    this.updateLocalStorage(filteredItems);
  }

  updateLocalStorage(list){
    localStorage.setItem('todoList', JSON.stringify(list));
  }

  render(){
    return(
        <div className="todoListMain">
          <div className="headerBar">Todo</div>
          <div className="todoListContainer">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}
                 placeholder="enter task" />
              <button type="submit">add</button>
            </form>
            <p>To complete/delete items click them</p>
          </div>
          <ToDoItems entries={this.state.items}
                     delete={this.deleteItem}/>
        </div>
      </div>
    )
  }
}

export default ToDoList;
