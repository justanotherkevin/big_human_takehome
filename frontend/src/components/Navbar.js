import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import tree from '../assets/imgs/tree.svg';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions'

class Navbar extends React.Component {
  onClickLogout = () => {
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated } = this.props.authState;
    return (
      <header className='navbar-wrapper'>
        <div className="link-container">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="company-name-container">
          <h1>Big Plant</h1>
        </div>
        <div className="nav-links-container">
          <div className="collection-one">
            <button>About</button>
            <ul>
              <li>Out team</li>
              <li>Contact</li>
              <li>Water us</li>
            </ul>
          </div>
          <div className="collection-two">
            <button>Buy us plants</button>
            <ul>
              <li>Thanks!</li>
            </ul>
          </div>
        </div>
        <div className="login-btn">
          {isAuthenticated ?
            <Link to='/' onClick={this.onClickLogout}>
              Logout
            </Link> :
            <Link to='/auth'>
              {/* <img src={tree} class="yourCSSClass"></img> */}
              Login
            </Link>
          }
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({ errorsState, authState }) => ({
  authState,
  // errors: errorsState
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar)