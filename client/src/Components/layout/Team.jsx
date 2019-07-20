
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ServiceCards from './ServiceCards'

class Team extends Component {
  render() {
    return (
      <section className="team" id="team">
        <div className="container">
          <h2 className="text-center">
            <Link to="/team" >Team</Link>
          </h2 >
          <div className="row">
            <Link to="/AlandJoDee" >
              <div className="team-col col-lg-4 col-xs-12">
                <div className="card card-block text-center">
                  <div>
                    <h3 className="team-card-title">
                      Alfred and JoDee Mickelsen
                    </h3>
                    <p className='team-description'>
                      This is the summary of Al and JoDee.
                  </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/Other2" >
              <div className="team-col col-lg-4 col-xs-12">
                <div className="card card-block text-center">
                  <div>
                    <h3 className="team-card-title">
                      Other Team Member 2
                    </h3>
                    <p className='team-description'>
                      This information will be added by Orie.
                  </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/Other3" >
              <div className="team-col col-lg-4 col-xs-12">
                <div className="card card-block text-center">
                  <div>
                    <h3 className="team-card-title">
                      Other Team Member 3
                    </h3>
                    <p className='team-description'>
                      If there is another team member they will be added here by Orie
                  </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section >
    );
  }
}

export default Team;