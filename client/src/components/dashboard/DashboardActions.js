import React from 'react';
import { Link } from 'react-router-dom'; // Updated path (inside src/)

const DashboardActions = () => {
  return (
    <div className="container">
      <div className="dash-buttons" role="group" aria-label="Dashboard actions">
        <Link to="/edit-profile" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" /> Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default DashboardActions;