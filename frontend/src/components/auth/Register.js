import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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
    const { errors } = this.state
    return (
      <div className="register-wrapper">
        <div className="register-container">
          <h1 className="">Sign Up</h1>
          <p className="">
            Create your account
          </p>
          <div className="form">
            <form className="register-form" onSubmit={this.onSubmit}>
              {errors && <span className="in-valid muted">{errors.name}</span>}
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={this.onChange} />
              {errors && <span className="in-valid muted">{errors.password}</span>}
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.onChange} />
              {errors && <span className="in-valid muted">{errors.email}</span>}
              <input
                type="text"
                name="email"
                placeholder="email address"
                onChange={this.onChange} />
              <button>create</button>
              {/* <p className="muted">Already registered? <a href="#">Sign In</a></p> */}
            </form>
          </div>
        </div>
      </div>

    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = ({ errorsState }) => ({
  // auth: state.auth,
  errors: errorsState
});

const mapDispatchToProps = {
  registerUser
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
