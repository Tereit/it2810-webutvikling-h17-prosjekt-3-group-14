import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import NavComponent from './navbar';
import Notifications from './notifications';

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
