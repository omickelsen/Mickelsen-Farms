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
            JoDee’s dream of turning her passion into a profession happened about 11 years ago with the help of
  her husband Al. They met and married in 1987 when JoDee announced that when he married her the
  horse came along. Both of them grew up on big farms in Idaho, so it seemed the logical step. They
  purchased their small farm surrounded by many other farms and immediately began filling the property
  with chickens, ducks, rabbits, goats, horses, pigs, dogs, cats, cows and children. Al quickly shared in her
  passion and soon found himself enjoying time riding horses in the mountains and caring for the various
  animals. They raised their kids teaching them to care for animals and the hard work involved with
  maintaining a family farm. As their children grew, JoDee taught them how to ride horses and Al taught
  them how to care for the animals and all the skills involved on the farm like hauling hay, fixing fence and
  shoveling manure. As their children left and began to have families of their own and all the farms
  around them were developed into housing developments, they decided they wanted to offer the same
  experiences to others that their children experienced. Thus, they started offering services in the
  summer months by hosting “Down on the Farm” mini camps, birthday parties and horse riding lessons.
  About 9 years ago, Al retired and they decided to expand their business and build an indoor arena and
  offer services year round to include boarding. A few years ago they acquired additional property to
  expand their services more. They currently are boarding horses, 7 of their own and love sharing their
  passion of caring and interacting with animals with others.
          </p>
          {/* <div className="row stats-row">
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
          </div> */}
        </div>
      </section>
    );
  }
}

export default About;