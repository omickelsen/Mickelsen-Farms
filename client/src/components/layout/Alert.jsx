import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts = [] }) =>
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array
};

const mapStateToProps = state => ({
  alerts: state.alert || [] // Default to empty array if undefined
});

export default connect(mapStateToProps)(Alert);