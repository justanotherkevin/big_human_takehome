import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { addClass } from '../../scripts/common';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    };
  }
  componentDidMount() {
    // if user is isAuthenticated then redirect 
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push('/');
    // }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = { ...this.state };
    this.props.registerUser(userData, this.props.history);
  };

  render() {
    return (
      <div className="register-wrapper">
        <div className="register-container">
          <h1 className="">Sign Up</h1>
          <p className="">
            Create your account
          </p>
          <div className="form">
            <form class="register-form" onSubmit={this.onSubmit}>
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={this.onChange} />
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.onChange} />
              <input
                type="text"
                name="email"
                placeholder="email address"
                onChange={this.onChange} />
              <button>create</button>
              <p class="muted">Already registered? <a href="#">Sign In</a></p>
            </form>
          </div>

        </div>
      </div>

    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // state.auth come from combineReducers @ /reducers/index.js
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
