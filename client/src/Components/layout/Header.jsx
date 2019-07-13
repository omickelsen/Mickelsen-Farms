import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import logo from "../../images/Mickelsen_Logo.jpg";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'

const Header = ({ auth: { isAuthenticated, loading}, logout }) => {
  const authLinks = (
    <ul className="nav-menu">
      <li><Link to="/">About Us</Link></li>
      <li><Link to="/">Services</Link></li>
      <li><Link to="/">Calendar</Link></li>
      <li><Link to="/">Team</Link></li>
      <li><Link to="/">Contact Us</Link></li>
        <li>
          <a onClick={logout} href="#!">
            <i className='fas fa-sign-out-alt'></i> />{' '}
            <span className='hide-sm'>Logout</span>
          </a>
        </li>
    </ul>
  );

  const guestLinks = (
    <ul className="nav-menu">
      <li><Link to="#about">About Us</Link></li>
      <li><Link to="#services">Services</Link></li>
      <li><Link to="#calendar">Calendar</Link></li>
      <li><Link to="#team">Team</Link></li>
      <li><Link to="#contact">Contact Us</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );

    return (
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <Link to="/"><img src={logo} alt="" title="" /></Link>
          </div>
          <nav id="nav-menu-container">
            { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
          </nav>       
          <nav className="nav social-nav pull-right d-none d-lg-inline">
            <Link to="#"><i className="fa fa-twitter"></i></Link> <Link to="#"><i className="fa fa-facebook"></i></Link> <Link to="#"><i className="fa fa-envelope"></i></Link>
          </nav>
        </div>
      </header>
    );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, 
  { logout }
  )(Header);