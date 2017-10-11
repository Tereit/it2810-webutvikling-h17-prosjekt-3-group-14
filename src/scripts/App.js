import React, { Component } from 'react';
import '../css/App.css';
import NavComponent from './navbar';
import Notifications from './notifications';
import Notes from './Notes';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <Notifications />
      </div>
    );
  }
}

export default App;
