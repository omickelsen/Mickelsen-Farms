import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, []);

    return (
        <div className='container'>
          <Fragment>
              { loading ? <Spinner /> : <Fragment>
                  <h1>Profiles</h1>
              </Fragment>}
          </Fragment>
          
        </div>
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}
    
const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);