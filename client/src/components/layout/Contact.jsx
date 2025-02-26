import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">Contact Us</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4">
              <div className="info">
                <div>
                  <i className="fa fa-map-marker"></i>
                  <p>1393 North 500 East<br />Pleasant Grove, UT 84062</p>
                </div>
                <div>
                  <i className="fa fa-envelope"></i>
                  <p>mickelsenfamilyfarms@gmail.com</p>
                </div>
                <div>
                  <i className="fa fa-phone"></i>
                  <p>JoDee Mickelsen +1 801-372-2070</p>
                </div>
                <div>
                  <i className="fa fa-phone"></i>
                  <p>Al Mickelsen: +1 801-960-6671</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-2">
              <div className="maps">
                <p>Map functionality removed or not implemented.</p>
                {/* Removed GoogleMaps component, update with alternative if needed */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;