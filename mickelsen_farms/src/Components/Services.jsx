    
import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <section className="services" id="services">
        <div className="container">
          <h2 className="text-center">
              Services
            </h2>
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
                    Horse Boarding
                  </h3>
                  <p>
                    Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
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
                    Horse Riding Lessons
                  </h3>
                  <p>
                    Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
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
                  <p>
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
                  <p>
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