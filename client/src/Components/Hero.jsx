import React, { Component } from 'react';
import logo from "../images/Mickelsen_Logo.jpg";
class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <a className="hero-brand" href="index.html" title="Home"><img className="horseLogo" alt="Mickelsen Logo" src={logo} /></a>
            </div>
          </div>


          <div className="col-md-12">
            <h1>
                Mickelsen Family Farms
              </h1>

            <p className="tagline">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam distinctio mollitia quidem? Obcaecati dolores, atque sit adipisci itaque, repudiandae totam odit facilis odio voluptas eos, error cum quasi fugiatssssss.
            </p>
            <a className="btn btn-full" href="#about">Explore</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;