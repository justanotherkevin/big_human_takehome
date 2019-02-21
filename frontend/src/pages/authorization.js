import React, { Component } from 'react'
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

export default class Authorization extends Component {
  state = {
    login: true
  }
  render() {
    return (
      <div className="auth-page">
        <Register />
        <p className="muted">Already registered? <a href="#">Sign In</a></p>
        <Login />
      </div>
    )
  }
}
