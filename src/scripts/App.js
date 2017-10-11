import React, { Component } from 'react';
import '../css/App.css';
import Notes from './Notes';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notes/>
      </div>
    );
  }
}

export default App;
