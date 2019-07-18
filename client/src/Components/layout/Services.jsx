
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ServiceCards from './ServiceCards'

class Services extends Component {
  render() {
    return (
      <section className="services" id="services">
        <div className="container">
          <h2 className="text-center">
            <Link to="/services" >Services</Link>
          </h2 >
          <div className="row">
            <div className="service-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <div className="service-icon">
                    <span className="fa fa-rocket"></span>
                  </div>
                </div>
                <div>
                  <h3>
                    <Link to="/services/horse-boarding">Horse Boarding</Link>
                  </h3>
                  <p className='service-description'>
                    Includes use of facility, enlcosed stalls, use of equipment, food, water, daily turnout, and health records kept. Click for more details.
                  </p>
                </div>
              </div>
            </div>
            <div className="service-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <div className="service-icon">
                    <span className="fa fa-envelope"></span>
                  </div>
                </div>
                <div>
                  <h3>
                    Riding Lessons
                  </h3>
                  <p className='service-description'>
                    1 hour or 1/2 hour private riding lessons including horse rental, horse tack, helmet, and facility rental. Click for more details.
                  </p>
                </div>
              </div>
            </div>
            <div className="service-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <div className="service-icon">
                    <span className="fa fa-bell"></span>
                  </div>
                </div>
                <div>
                  <h3>
                    Consultations
                  </h3>
                  <p className='service-description'>
                    Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <div className="service-icon">
                    <span className="fa fa-database"></span>
                  </div>
                </div>
                <div>
                  <h3>
                    Animal services
                  </h3>
                  <p className='service-description'>
                    Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
                  </p>
                </div>
              </div>
            </div>
            <div className="service-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">


              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;