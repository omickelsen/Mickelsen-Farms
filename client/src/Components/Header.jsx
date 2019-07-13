import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import logo from "../images/Mickelsen_Logo.jpg";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <Link to="/"><img src={logo} alt="" title="" /></Link>
            {/* Uncomment below if you prefer to use a text image */}
            {/* <h1><Link to="#hero">Bell</a></h1> */}
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><Link to="#about">About Us</Link></li>
              <li><Link to="#services">Services</Link></li>
              <li><Link to="#calendar">Calendar</Link></li>
              <li><Link to="#team">Team</Link></li>
              <li><Link to="/login">Admin Login</Link></li>
              {/* <li className="menu-has-children"><Link to="">Drop Down</a>
                <ul>
                  <li><Link to="#">Drop Down 1</a></li>
                  <li className="menu-has-children"><Link to="#">Drop Down 2</a>
                    <ul>
                      <li><Link to="#">Deep Drop Down 1</a></li>
                      <li><Link to="#">Deep Drop Down 2</a></li>
                      <li><Link to="#">Deep Drop Down 3</a></li>
                      <li><Link to="#">Deep Drop Down 4</a></li>
                      <li><Link to="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><Link to="#">Drop Down 3</a></li>
                  <li><Link to="#">Drop Down 4</a></li>
                  <li><Link to="#">Drop Down 5</a></li>
                </ul>
              </li> */}
              <li><Link to="#contact">Contact Us</Link></li>
            </ul>
          </nav>
          <nav className="nav social-nav pull-right d-none d-lg-inline">
            <Link to="#"><i className="fa fa-twitter"></i></Link> <Link to="#"><i className="fa fa-facebook"></i></Link> <Link to="#"><i className="fa fa-envelope"></i></Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;