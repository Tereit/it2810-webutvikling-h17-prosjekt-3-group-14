import React, { Component } from 'react';
import '../css/App.css';
import NavComponent from './Navbar';
import Notes from './Notes';
import Calendar from './Calendar';
import Notifications from './Notifications';
import {loadEvents, loadNotifications} from './Events';
import ToDoList from './ToDoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            displayCalendar: false,
            displayNotes: false,
            displayTodo: false,
            displayHome: true,
            events: [],
            notifications: []
        };
        this.display = this.display.bind(this);
        this.setDisplay = this.setDisplay.bind(this);
        this.displayCalendar = this.displayCalendar.bind(this);
        this.displayNotes = this.displayNotes.bind(this);
        this.displayTodo = this.displayTodo.bind(this);
        this.updateEvents = this.updateEvents.bind(this);
    }

    componentWillMount() {
        let events = loadEvents();
        let notifications = loadNotifications(events);
        this.setState({
            events: events,
            notifications: notifications
        })
    }

    setDisplay(display) {
        this.setState({
            displayCalendar: display.displayCalendar,
            displayNotes: display.displayNotes,
            displayTodo: display.displayTodo,
            displayHome: display.displayHome
        })
    }

    updateEvents() {
        let events = loadEvents();
        let notifications = loadNotifications(events);
        this.setState({
            events: events,
            notifications: notifications
        });
    }

    displayCalendar() {
        this.setState({
            displayCalendar: true,
            displayNotes: false,
            displayTodo: false,
            displayHome: false
        })
    }

    displayNotes() {
        this.setState({
            displayCalendar: false,
            displayNotes: true,
            displayTodo: false,
            displayHome: false
        })
    }

    displayTodo() {
        this.setState({
            displayCalendar: false,
            displayNotes: false,
            displayTodo: true,
            displayHome: false
        })
    }

    display() {
        if(this.state.displayHome) {
            return (
                <div className="homeMenu">
                    <div className="menu-icon"><i className="fa fa-calendar fa-5x" onClick={this.displayCalendar} /></div>
                    <div className="menu-icon"><i className="fa fa-sticky-note fa-5x" onClick={this.displayNotes} /></div>
                    <div className="menu-icon"><i className="fa fa-list-ul fa-5x" onClick={this.displayTodo} /></div>
                </div>)
        } else if(this.state.displayCalendar) {
            return <Calendar events={this.state.events} update={this.updateEvents}/>
        } else if(this.state.displayNotes) {
            return <Notes/>
        } else if(this.state.displayTodo) {
            return <ToDoList />
        } else {
            return <div><p>Couldn't load requested page, something went wrong!</p></div>
        }
    }

  render() {
    return (
      <div className="App">
          <NavComponent setDisplay={this.setDisplay}/>
          <Notifications notifications={this.state.notifications}/>
          {this.display()}
      </div>
    );
  }
}

export default App;
