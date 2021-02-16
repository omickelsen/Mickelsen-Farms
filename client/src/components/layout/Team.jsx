
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
                      Owners and Operators of Mickelsen Family Farms. Experienced In all things Horses.
                  </p>
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link to="/Olivia-Lindstrom" >
              <div className="team-col col-lg-4 col-xs-12">
                <div className="card card-block text-center">
                  <div>
                    <h3 className="team-card-title">
                      Olivia Lindstrom
                    </h3>
                    <p className='team-description'>
                      Horse Trainer and Lesson Teacher. 2019-20 Stawberry Days Rodeo Queen.
                  </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/Izzy-Barnes" >
              <div className="team-col col-lg-4 col-xs-12">
                <div className="card card-block text-center">
                  <div>
                    <h3 className="team-card-title">
                      Izzy Barnes
                    </h3>
                    <p className='team-description'>
                      Horse enthusiast, Trainer, Teacher. 2019-20 Strawbery Days 1st Attendant.
                  </p>
                  </div>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </section >
    );
  }
}

export default Team;