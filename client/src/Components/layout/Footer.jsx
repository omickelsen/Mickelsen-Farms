import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';


class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xs-12 text-lg-left text-center">
                <p className="copyright-text">
                  
                </p>
                
              </div>
              <div className="col-lg-6 col-xs-12 text-lg-right text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#services">Services</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#calendar">Calendar</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#team">Team</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;