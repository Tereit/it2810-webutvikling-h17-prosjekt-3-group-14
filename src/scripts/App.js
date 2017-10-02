import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import NavComponent from './navbar';
import NotificationButton from './notificationButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <NotificationButton />
      </div>
    );
  }
}

export default App;
