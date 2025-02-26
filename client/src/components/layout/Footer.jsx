import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xs-12 text-lg-left text-center">
                <p className="copyright-text">
                  © {new Date().getFullYear()} Mickelsen Family Farms. All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-xs-12 text-lg-right text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/calendar">Calendar</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/team">Owners</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/contact">Contact Us</Link>
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

export default Footer; // Confirm default export