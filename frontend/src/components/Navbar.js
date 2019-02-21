import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

export default function Navbar() {
  return (
    <header className='navbar-wrapper'>
      <Link to='/'>
        <img src={logo} alt="" />
      </Link>
      <h1>Big Plant</h1>
      <div className="nav-links-wrapper">
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
    </header>
  )
}
