import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img/>
          <h1 className="App-title">Academy Chat</h1>
        </header>
        <p className="App-intro">
          Let´s chat!
        </p>
        <div className="login">
       
        <button type ="submit"> Logga in</button>
        <input type = "text"/>
        <p> Logga in med ditt GoogleKonto </p>
        </div>
      </div>
    );
  }
}

export default App;
