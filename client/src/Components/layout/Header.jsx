
import React, { Fragment } from 'react';
import logo from "../../images/Mickelsen_Logo.jpg";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'
import { HashLink as Link } from 'react-router-hash-link'

const Header = ( { auth: { isAuthenticated, loading }, logout } ) => {
  const authLinks = (
    <div className="container">
      <div id="logo" className="pull-left">
        <Link smooth to="/#hero"><img src={logo} alt="" title="" /></Link>
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li><Link smooth to="/#about">About Us</Link></li>
          <li><Link smooth to="/#services">Services</Link></li>
          <li><Link smooth to="/#calendar">Calendar</Link></li>
          <li><Link smooth to="/#team">Team</Link></li>
          <li><Link smooth to="/#contact">Contact Us</Link></li>
          <li>
            <Link to="#!" onClick={logout} >
              <i className='fas fa-sign-out-alt' />{' '}
              <span className='hide-sm'>Logout</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <i className='fas fa-user' />{' '}
              <span className='hide-sm'>Dashboard</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav social-nav pull-right d-none d-lg-inline">
        <Link to="#"><i className="fab fa-twitter"></i></Link> <Link to="#"><i className="fab fa-facebook"></i></Link> <Link to="#"><i className="fa fa-envelope"></i></Link>
      </nav>
    </div>
  );

  const guestLinks = (
    <div className="container">
      <div id="logo" className="pull-left">
        <Link smooth to="/#hero"><img src={logo} alt="" title="" /></Link>
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li><Link smooth to="/#about">About Us</Link></li>
          <li><Link smooth to="/#services">Services</Link></li>
          <li><Link smooth to="/#calendar">Calendar</Link></li>
          <li><Link smooth to="/#team">Team</Link></li>
          <li><Link smooth to="/#contact">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <nav className="nav social-nav pull-right d-none d-lg-inline">
        <Link to="#"><i className="fab fa-twitter"></i></Link> <Link to="#"><i className="fab fa-facebook"></i></Link> <Link smooth to="/#contact"><i className="fa fa-envelope"></i></Link>
      </nav>
    </div>
  );

  return (
    <header id="header">
      <nav id="nav-menu-container">
        {!loading && ( <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment> )}
      </nav>
    </header>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ( {
  auth: state.auth
} );

export default connect(
  mapStateToProps,
  { logout }
)( Header );