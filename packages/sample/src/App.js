import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from '@hig/dropdown';
import "@hig/dropdown/build/index.css";

const options = [
  "One", "Two", "Three", "Four"
];

function filterOptions() {
  return options;
}

class App extends Component {
  state = {
    dropdownText: "",
    dropdownOptionId: options[0].id  };

  handleChange = (id) => {
    this.setState({ dropdownOptionId: id });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Dropdown options={filterOptions(this.state.dropdownText)} />
      </div>
    );
  }
}

export default App;
