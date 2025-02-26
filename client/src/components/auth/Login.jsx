import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Replaced Redirect and HashLink with Navigate and Link
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'; // Updated path (inside src/)
import Header from '../layout/Header'; // Updated path (inside src/)

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Navigate to="/" replace />; // Replaced Redirect with Navigate
  }

  return (
    <Fragment>
      <div>
        <Header />
        <div className="container">
          <div className="login" id="login">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h4 className="display-4 text-center">Sign In</h4>
                <p className="lead text-center">Sign into your account</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <input type="submit" className="btn btn-primary" value="Login" />
                </form>
                <p className="my-1">
                  Back to the <Link to="/">Home</Link> Page {/* Replaced HashLink with Link */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Fixed PropTypes spelling (prototype -> propTypes)
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);