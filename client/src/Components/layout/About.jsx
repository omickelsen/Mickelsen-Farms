import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container text-center">
          <h2>
            About Mickelsen Farms
          </h2>
          <p>
            Mickelsen Family Farms is a home town farm offering many different features from Horse boarding to Horse riding lessons. Established in 1987 as a hobby farm for JoDee and Al Mickelsen, it has since grown into a business venture providing many services for the local community to enjoy. 
          </p>
          <div className="row stats-row">
            <div className="stats-col text-center col-md-3 col-sm-6">
              <div className="circle">
                <span></span>
              </div>
            </div>
            <div className="stats-col text-center col-md-3 col-sm-6">
              <div className="circle">
                <span></span> 
                Animals
              </div>
            </div>
            <div className="stats-col text-center col-md-3 col-sm-6">
             
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;