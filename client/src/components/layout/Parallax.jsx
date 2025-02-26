import React, { Component } from 'react';
import Parallax from 'react-parallax'; // Install react-parallax for parallax effect

class ParallaxSection extends Component {
  render() {
    return (
      <Parallax bgImage="https://cdn.appzaib.com/public/bell/img/parallax-bg.jpg" strength={600}>
        <div className="block bg-primary block-pd-lg block-bg-overlay text-center">
          <h2>Welcome to Mickelsen Farms</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus tempore aliquid, porro pariatur adipisci eaque perspiciatis fuga tenetur ipsa asperiores. Nulla illo ad in quod, eveniet itaque consequatur labore consectetur.
          </p>
          {/* Removed empty img tag or update with actual image */}
        </div>
      </Parallax>
    );
  }
}

export default ParallaxSection;