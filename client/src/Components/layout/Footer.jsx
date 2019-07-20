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
                    <Link smooth to="/#hero">Home</Link>
                  </li>
                  <li className="list-inline-item">
                  <Link smooth to="/#about">About Us</Link>
                  </li>
                  <li className="list-inline-item">
                  <Link smooth to="/#services">Services</Link>
                  </li>
                  <li className="list-inline-item">
                  <Link smooth to="/#calendar">Calendar</Link>
                  </li>
                  <li className="list-inline-item">
                  <Link smooth to="/#team">Team</Link>
                  </li>
                  <li className="list-inline-item">
                  <Link smooth to="/#contact">Contact Us</Link>
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