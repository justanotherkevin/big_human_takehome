import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Landing from './pages/landing'
import Plant from './pages/plant';
import Register from './components/auth/Register';

import './App.scss';
import Navbar from './components/Navbar';
/*
1) Implement a NodeJS / Express RESTful API that:
  authentication support(JWT or Sessions)
  Login, Logout and Sign Up

  Provides CRUD support for following entities:
    Users
    Plants
  Users can post comments on Plants

2) Implement a React SPA that:
  Consumes the above Node RESTful server
  Provides authentication support
    Login / Logout / Sign Up
    Posting comments is only allowed for logged in users

  Data Consumption
    //Redux(or similar approach like MobX) ecosystem for handling
    //redux - thunk or redux - saga or promises
  Responsive Design
    //Sass or similar pre - processor approach(css -in -js)
  ! Refrain from using tools like Bootstrap or other component libraries 
  ? Flexbox is an ideal approach
*/
class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />

        <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/plants/:id" component={Plant} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default App
