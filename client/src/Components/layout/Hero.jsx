import React, { Component } from 'react';
import logo from "../../images/Mickelsen_Logo.jpg";
import {HashLink as Link} from 'react-router-hash-link';

class Hero extends Component {
  render() {
    return (
      <section className="hero" id="hero">
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
            <Link smooth to="/#about" className="btn btn-full">Explore</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;