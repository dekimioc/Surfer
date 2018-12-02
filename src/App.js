import React, { Component } from 'react';
import classes from "./App.css";
import Header from './src/components/Header/Header';
import About from './src/components/about/about';
import Team from '../src/components/team/team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className={classes.AboutText}>About us</h1>
        <About />
        <Team />
      </div>
    );
  }
}

export default App;
