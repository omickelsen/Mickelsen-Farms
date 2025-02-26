import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile'; // Updated path (inside src/)
import MainCalendar from '../layout/MainCalendar'; // Updated path (inside src/)

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user, profile } = this.props; // Removed unused 'loading'

    return (
      <Fragment>
        <div className="container">
          <h1 className="large text-primary">Dashboard</h1>
          <p className="lead">
            <i className="fas fa-user" /> Welcome {user && user.name}
          </p>
          {profile !== null ? (
            <Fragment>
              <Link to="/register" className="btn btn-primary my-1">
                Register
              </Link>
              <MainCalendar /> {/* Reintegrated Google Calendar iframe component */}
            </Fragment>
          ) : (
            <Fragment>
              <p>You have not yet setup a profile. Please add some info by clicking the button below:</p>
              <Link to="/create-profile" className="btn btn-primary my-1">
                Create Profile
              </Link>
            </Fragment>
          )}
        </div>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);