import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import logo from "../../images/Mickelsen_Logo.jpg";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'
import {HashLink} from 'react-router-hash-link'

const Header = ({ auth: { isAuthenticated, loading}, logout }) => {
  const authLinks = (
    <div className="container">
      <div id="logo" className="pull-left">
        <Link to="/"><img src={logo} alt="" title="" /></Link>
      </div>
        <ul className="nav-menu">
          <li><HashLink smooth to="/#about">About Us</HashLink></li>
          <li><HashLink smooth to="/#services">Services</HashLink></li>
          <li><HashLink smooth to="/#calendar">Calendar</HashLink></li>
          <li><HashLink smooth to="/#team">Team</HashLink></li>
          <li><HashLink smooth to="/#contact">Contact Us</HashLink></li>
          <li>
            <Link to="#!" onClick={logout} >
              <i className='fas fa-sign-out-alt'/>{' '} 
              <span className='hide-sm'>Logout</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <i className='fas fa-user'/>{' '} 
              <span className='hide-sm'>Dashboard</span>
            </Link>
          </li>
        </ul>
      <nav className="nav social-nav pull-right d-none d-lg-inline">
        <Link to="#"><i className="fab fa-twitter"></i></Link> <Link to="#"><i className="fab fa-facebook"></i></Link> <Link to="#"><i className="fa fa-envelope"></i></Link>
      </nav>
     </div> 
  );

  const guestLinks = (
    <div className="container">
      <div id="logo" className="pull-left">
        <Link to="/"><img src={logo} alt="" title="" /></Link>
      </div>
        <ul className="nav-menu">
          <li><HashLink smooth to="/#about">About Us</HashLink></li>
          <li><HashLink smooth to="/#services">Services</HashLink></li>
          <li><HashLink smooth to="/#calendar">Calendar</HashLink></li>
          <li><HashLink smooth to="/#team">Team</HashLink></li>
          <li><HashLink smooth to="/#contact">Contact Us</HashLink></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      <nav className="nav social-nav pull-right d-none d-lg-inline">
        <Link to="#"><i className="fab fa-twitter"></i></Link> <Link to="#"><i className="fab fa-facebook"></i></Link> <Link to="#"><i className="fa fa-envelope"></i></Link>
      </nav>
    </div>
  );

    return (
      <header id="header">       
        <nav id="nav-menu-container">
          { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
        </nav>           
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