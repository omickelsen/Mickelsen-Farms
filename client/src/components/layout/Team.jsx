import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Replaced HashLink with Link

class Team extends Component {
  render() {
    return (
      <section className="team" id="team">
        <div className="container">
          <h2 className="text-center">
            <Link to="/team">Owners</Link>
          </h2>
          <div className="row">
            <Link to="/AlandJoDee">
              <div className="team-col col-lg-4 col-xs-12">
                <div className="card card-block text-center">
                  <div>
                    <h3 className="team-card-title">Alfred and JoDee Mickelsen</h3>
                    <p className="team-description">
                      Owners and Operators of Mickelsen Family Farms. Experienced In all things Horses.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            {/* Removed commented-out links for cleanliness (reintroduce if needed) */}
          </div>
        </div>
      </section>
    );
  }
}

export default Team;