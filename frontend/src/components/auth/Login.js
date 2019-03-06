import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from '../../store';
import { loginUser } from '../../actions/authActions';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  componentDidMount() {
    // if user is isAuthenticated then redirect user to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      history.push('/');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  render() {
    const { errors } = this.state
    return (
      <div className="register-wrapper">
        <div className="register-container">
          <h1 className="">Sign in</h1>
          <p className="">
            Log into your account
          </p>
          <div className="form">
            <form className="register-form" onSubmit={this.onSubmit}>
              {errors && <span className="in-valid muted">{errors.email}</span>}
              <input
                type="text"
                name="email"
                placeholder="email address"
                onChange={this.onChange} />
              {errors && <span className="in-valid muted">{errors.password}</span>}
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.onChange} />
              <button>create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  // loginUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};
const mapStateToProps = ({ errorsState, authState }) => ({
  auth: authState,
  errors: errorsState
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
