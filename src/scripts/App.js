import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import ToDo from './ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ToDo>
        </ToDo>

      </div>
    );
  }
}

export default App;
