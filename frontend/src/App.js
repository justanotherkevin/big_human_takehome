import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Landing from './pages/landing'
import Plant from './pages/plant';

import './App.scss';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />

        <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/plants/:id" component={Plant} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default App
