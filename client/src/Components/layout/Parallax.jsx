    
import React, { Component } from 'react';

class Parallax extends Component {
  render() {
    return (
      <div className="block bg-primary block-pd-lg block-bg-overlay text-center" data-bg-img="https://cdn.appzaib.com/public/bell/img/parallax-bg.jpg" data-settings='{"stellar-background-ratio": 0.6}' data-toggle="parallax-bg">
        <h2>
          Welcome to Mickelsen Farms
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tempore aliquid, porro pariatur adipisci eaque perspiciatis fuga tenetur ipsa asperiores. Nulla illo ad in quod, eveniet itaque consequatur labore consectetur..
        </p>
        <img alt="" className="gadgets-img hidden-md-down" src="" />
      </div>
    );
  }
}

export default Parallax;