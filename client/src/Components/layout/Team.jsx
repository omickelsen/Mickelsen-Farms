import React, { Component } from 'react';

class CTA extends Component {
  render() {
    return (
      <section className="team" id="team">
        <div className="container">
          <h2 className="text-center">
            Meet our team
          </h2>
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#"><img alt="" className="team-img" src="" />
                  <div className="card-title-wrap">
                    <span className="card-title">JoDee Mickelsen</span> <span className="card-text">Owner/Opperator</span>
                  </div>
                  <div className="team-over">
                    <h4 className="hidden-md-down">
                      Connect with me
                    </h4>
                    <nav className="social-nav">
                      <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-linkedin"></i></a> <a href="#"><i className="fa fa-envelope"></i></a>
                    </nav>
                    <p>
                      Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CTA;