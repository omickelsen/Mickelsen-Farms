import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/layout/Footer';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import P1 from '../images/P1.JPEG';
import P2 from '../images/P2.JPEG';
import P3 from '../images/P3.JPEG';
import P4 from '../images/P4.JPEG';
import P5 from '../images/P5.JPEG';
import P6 from '../images/P6.JPEG';
import P7 from '../images/P7.JPEG';
import P8 from '../images/P8.JPEG';
import P9 from '../images/P9.JPEG';



const Events = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className='service-container'>
                    <h1 className="service-title">Events</h1>
                </div>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="lesson-pricing-container">
                                <h1 className="service-includes-title">Available Events</h1>
                                <p>
                                    <ul className="includes-list">
                                        <li>Down on the Farm DayCamps</li>
                                        <li>Farm Parties</li>
                                        <li>Birthday Parties</li>
                                        <li>Specialized Trainings</li>
                                    </ul>
                                    <Accordion defaultActiveKey="1">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0" >
                                                <center>Click for additional information</center>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <ul className="accordion-list">
                                                        <p>
                                                            <li>Down on the farm day camp - (8-12:30 pm) Participants will get help feed, visit, pet, groom, and get pictures with all the animals on the farm.  In addition they will enjoy games and activities and a horse/pony ride. A campfire lunch will be included.</li>
                                                            <li>Farm parties - participants can design their own type of farm party which can include learning to feed animals, interact with animals, hay rides or ride horses/pony.  (Lunch or refreshments are optional)</li>
                                                            <li>Birthday parties - participants will get to visit, pet and get pictures on the farm and get a horse/pony ride.  For an additional charge games and activities, piñata breaking, cake and refreshments can be included.</li>
                                                            <li>Payment for these events vary on type of activity and number of participants attending. Contact owner to discuss price and availability.</li>
                                                        </p>
                                                    </ul>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </p>
                            </div>
                        </Col>
                        <Row>
                            <Col sm={12}>
                                <div className="price-table">
                                    <h1 className="gallery-title">Gallery</h1>
                                    <Container>
                                        <Row>
                                            <Col >
                                                <Image src={P1} rounded className='event-images' />
                                            </Col>
                                            <Col >
                                                <Image src={P2} rounded className='event-images' />
                                            </Col>
                                            <Col >
                                                <Image src={P3} rounded className='event-images' />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col >
                                                <Image src={P4} rounded className='event-images' />
                                            </Col>
                                            <Col >
                                                <Image src={P5} rounded className='event-images' />
                                            </Col>
                                            <Col >
                                                <Image src={P6} rounded className='event-images' />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col >
                                                <Image src={P7} rounded className='event-images' />
                                            </Col>
                                            <Col >
                                                <Image src={P8} rounded className='event-images' />
                                            </Col>
                                            <Col >
                                                <Image src={P9} rounded className='event-images' />
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>



    )
}

export default Events