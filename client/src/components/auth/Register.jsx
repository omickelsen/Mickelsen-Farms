import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Replaced Redirect with Navigate
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert'; // Updated path (inside src/)
import { register } from '../../actions/auth'; // Updated path (inside src/)
import alert from '../layout/Alert'; // Updated path (inside src/)

// Remove incorrect CSS import (use App.css globally in index.js or App.js)
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />; // Replaced Redirect with Navigate
  }

  return (
    <Fragment>
      <div className="container">
        <div className="register" id="register">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h4 className="display-4 text-center">Sign Up</h4>
              <p className="lead text-center">Create your User account</p>
              <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
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
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
              </form>
              <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link><br />Back to the <Link to="/">Home</Link> Page {/* Use Link instead of HashLink */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);