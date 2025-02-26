import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Replaced Redirect with Navigate
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element: Element, auth, ...rest }) => (
  <Route
    {...rest}
    element={
      auth.isAuthenticated ? (
        <Element />
      ) : (
        <Navigate to="/login" replace /> // Replaced Redirect with Navigate
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);