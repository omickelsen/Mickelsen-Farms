import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div className='container'>
            <div className="dash-buttons" role="group">
                <Link to="/edit-profile" className="btn btn-light">
                    <i className="fas fa-user-circle text-primary" /> Edit Profile</Link>
          </div>
        </div>
    )
}
    

export default DashboardActions;