import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Replaced HashLink with Link

class Hero extends Component {
  render() {
    return (
      <section className="hero" id="hero">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              {/* Reintroduced logo if needed (uncomment and adjust path) */}
              {/* <Link to="/" className="hero-brand" title="Home"><img className="horseLogo" alt="Mickelsen Family Farms Logo" src={require('../../images/Mickelsen_Logo.jpg')} /></Link> */}
            </div>
          </div>
          <div className="col-md-12">
            <h1>Mickelsen Family Farms</h1>
            <p className="tagline">Established in 1987 and still growing.</p>
            <Link to="/#about" className="btn btn-full">Explore</Link> {/* Removed smooth prop */}
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;