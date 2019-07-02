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
            Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. Menandri
            temporibus an duo.
          </p>
          <div className="row stats-row">
            <div className="stats-col text-center col-md-3 col-sm-6">
              <div className="circle">
                <span className="stats-no" data-toggle="counter-up"></span> Who we are
              </div>
            </div>
            <div className="stats-col text-center col-md-3 col-sm-6">
              <div className="circle">
                <span className="stats-no" data-toggle="counter-up"></span> 
                Animals
              </div>
            </div>
            <div className="stats-col text-center col-md-3 col-sm-6">
              <div className="circle">
                <span className="stats-no" data-toggle="counter-up"></span> 
                Openings
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;