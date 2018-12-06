import React, { Component } from 'react';
import classes from "./App.css";
import Header from './components/Header/Header';
import About from './components/about/about';
import Team from './components/team/team';
import Updates from './components/updates/updates';
import Instagram from './components/instagram/instagram';
import Facebook from './components/facebook/facebook';
import Social from './components/social/social';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1 className={classes.AboutText}>About us</h1>
        <About />
        <Team />
        <Updates />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
