import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

import './App.scss';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        {/* <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header> */}
        <Navbar />

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default App
