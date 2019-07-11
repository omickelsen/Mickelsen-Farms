    
import React, { Component } from 'react';
import logo from "../images/Mickelsen_Logo.jpg";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <a href="/"><img src={logo} alt="" title="" /></a>
            {/* Uncomment below if you prefer to use a text image */}
            {/* <h1><a href="#hero">Bell</a></h1> */}
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#calendar">Calendar</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="/login">Admin Login</a></li>
              {/* <li className="menu-has-children"><a href="">Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="menu-has-children"><a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li> */}
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
          <nav className="nav social-nav pull-right d-none d-lg-inline">
            <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-envelope"></i></a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;