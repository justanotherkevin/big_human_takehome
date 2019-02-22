import React, { Component } from 'react'
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

export default class Authorization extends Component {
  state = {
    login: true
  }
  onClick = e => {
    e.preventDefault();
    this.setState({ login: !this.state.login });
  }

  render() {
    const { login } = this.state;
    return (
      <div className="auth-page">
        {login ? <Register /> : <Login />}

        <p className="muted">{login ? 'Already' : 'Not'} registered? <a href="/" onClick={this.onClick} >Sign {login ? 'in' : 'up'} </a></p>

      </div>
    )
  }
}
