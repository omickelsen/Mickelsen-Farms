import React, { Component } from 'react';
import logo from "../../images/Mickelsen_Logo.jpg";
import { Link } from 'react-router-dom';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <Link to="/" className="hero-brand" title="Home"><img className="horseLogo" alt="Mickelsen Logo" src={logo} /></Link>
            </div>
          </div>


          <div className="col-md-12">
            <h1>
                Mickelsen Family Farms
              </h1>

            <p className="tagline">
              Lorem, ipsum dolor sit amet consectetur adipisicingnigad elit. Sapiente ipsam distinctio mollitia quidem? Obcaecati dolores, atque sit adipisci itaque, repudiandae totam odit facilis odio voluptas eos, error cum quasi fugiats.
            </p>
            <a className="btn btn-full" href="#about">Explore</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;