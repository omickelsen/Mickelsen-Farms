
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ServiceCards from './ServiceCards'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Team extends Component {
  render() {
    return (
      <section className="team" id="team">
        <div className="container">
          <h2 className="text-center">
            <Link to="/team" >Team</Link>
          </h2 >
          <div className="row">
            <div className="team-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <h3 className="team-card-title">
                    <Link to="/teams">Alfred and JoDee Mickelsen</Link>
                  </h3>
                  <p>
                    Lorem Ipsur dum tumdelly doo dah! Hello I am dkfosi akd nand aodi AOc sucks.
                  </p>
                  {/* <p className='team-description'>
                  </p> */}
                  {/* <div>
                    <Accordion defaultActiveKey="1" className="team-accordion">
                      <Accordion.Toggle as={Card.Header} eventKey="0" >
                        <center>Summary</center>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <ul className="about-accordion-list">
                            <p>
                              <li>If instructor or student cancels for any reason, credit will be applied to next lesson.</li>
                            </p>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Accordion>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="team-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <h3>
                    <Link to="/team/riding-lessons" >Riding Lessons</Link>
                  </h3>
                  <p className='team-description'>
                    1 hour or 1/2 hour private riding lessons including horse rental, horse tack, helmet, and facility rental. Click for more details.
                  </p>
                </div>
              </div>
            </div>
            <div className="team-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <h3>
                    <Link to="/team/riding-lessons" >Events</Link>
                  </h3>
                  <p className='team-description'>
                    We can help you plan and assist your party and other events! Contact
                    us via phone or email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Team;