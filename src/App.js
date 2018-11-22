import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArrivalList from './arrivalList';
import Location from './Location';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to this Trimet thing</h1>
        </header>
        <Location />
        <p className="App-intro">
          Here is a list of arrivals from Trimet:
        </p>
        <ArrivalList />
      </div>
    );
  }
}

export default App;
