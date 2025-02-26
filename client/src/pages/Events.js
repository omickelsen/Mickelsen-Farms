import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header'; // Default import
import { Container, Row, Col, Image } from 'react-bootstrap'; // Remove Accordion, Card
import Footer from '../components/layout/Footer'; // Default import
import P1 from '../images/P1.JPEG';
import P2 from '../images/P2.JPEG';
import P3 from '../images/P3.JPEG';
import P4 from '../images/P4.JPEG';
import P5 from '../images/P5.JPEG';
import P6 from '../images/P6.JPEG';
import P7 from '../images/P7.JPEG';
import P8 from '../images/P8.JPEG';
import P9 from '../images/P9.JPEG';
import Pdf4 from '../pdfs/Horse-Pony birthday parties registration form.pdf';
import Pdf9 from '../pdfs/Down on the farm registration form.pdf';
import Pdf10 from '../pdfs/Down on the farm and birthday parties Release and Wavier of Liability form for Mickelsen Farm.pdf';

const Events = () => {
  console.log('Events component:', Events);
  const [isOpen, setIsOpen] = useState(false); // State for toggle

  return (
    <div>
      <Header />
      <div className="container">
        <div className="service-container">
          <h1 className="service-title">Events</h1>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <div className="lesson-pricing-container">
                <h1 className="service-includes-title">Available Events</h1>
                <center><h3><a href={Pdf10} target="_blank">Click here for Release and Waiver of Liability form for Mickelsen Farm</a></h3></center>
                <p>Available Events:</p>
                <ul className="includes-list">
                  <li>Down on the Farm Day Camps</li>
                  <a href={Pdf9} target="_blank">Click here for Down on the Farm Registration Form</a>
                  <li>Farm Parties</li>
                  <li>Birthday Parties</li>
                  <a href={Pdf4} target="_blank">Click here for Horse/Pony Birthday Parties Form</a>
                  <li>Specialized Trainings</li>
                </ul>
                <button 
                  className="toggle-button" 
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? 'Hide Additional Information' : 'Click for Additional Information'}
                </button>
                {isOpen && (
                  <div className="additional-info">
                    <ul className="accordion-list">
                      <li>Down on the farm day camp - (9-12:00 pm) Participants will get help feed, visit, pet, groom, and get pictures with all the animals on the farm. In addition, they will enjoy games and activities and a horse/pony ride.</li>
                      <li>Farm parties - participants can design their own type of farm party which can include learning to feed animals, interact with animals, hay rides, or ride horses/pony. (Lunch or refreshments are optional)</li>
                      <li>Birthday parties - participants will get to visit, pet, and get pictures on the farm and get a horse/pony ride. For an additional charge, games and activities, piñata breaking, cake, and refreshments can be included.</li>
                      <li>Payment for these events varies based on the type of activity and number of participants attending. Contact owner to discuss price and availability.</li>
                    </ul>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="price-table">
                <h1 className="gallery-title">Gallery</h1>
                <Container>
                  <Row>
                    <Col>
                      <Image src={P1} rounded className="event-images" />
                    </Col>
                    <Col>
                      <Image src={P2} rounded className="event-images" />
                    </Col>
                    <Col>
                      <Image src={P3} rounded className="event-images" />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Image src={P4} rounded className="event-images" />
                    </Col>
                    <Col>
                      <Image src={P5} rounded className="event-images" />
                    </Col>
                    <Col>
                      <Image src={P6} rounded className="event-images" />
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Image src={P7} rounded className="event-images" />
                    </Col>
                    <Col>
                      <Image src={P8} rounded className="event-images" />
                    </Col>
                    <Col>
                      <Image src={P9} rounded className="event-images" />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Events;