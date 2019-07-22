import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from '../components/layout/Footer'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Farm from '../images/farm.jpeg'


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
                                <h1 className="service-includes-title">Payment Information</h1>
                                <p>
                                    <ul className="includes-list">
                                        <li>Please contact for rates and options</li>
                                        <li>Payment may be completed by cash, check, or Venmo at JoDee Mickelsen@JoDee-Mickelsen (which I prefer for convenience).</li>
                                        <li>Payment includes the following: ipsem lorem sihe ddieynt gia heiht asldihfiahe</li>
                                        <li>Please read and make note of cancellation policy below.</li>
                                    </ul>
                                    <Accordion defaultActiveKey="1">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0" >
                                                <center>Click for cancellation policy</center>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <ul className="accordion-list">
                                                        <p>
                                                            <li>If instructor or student cancels for any reason, credit will be applied to next lesson.</li>
                                                            <li>No money will be returned unless instructor is unable to make up lesson within a 2-week window.</li>
                                                            <li>Beacuse I have instructors and students traveling to my barn for lessons, I expect at least a 4-hour
                                                    cancellation notice by instructor or student unless an illness or emergency might arise. </li>
                                                            <li>If a 4-hour notice is not given for cancellations, a $10 fee will be charged to cover the person's
                                                    time and gas to come out for the lesson.</li>
                                                            <li>With 3 instructors, we will try not to cancel any lessons. If someone is gone on vacations, we will
                                                                try not to cancel any lessons. If someone is on vacation, we will see if the other two can cover the
                                                    lesson.</li>
                                                            <li>Trail rides are usually reserved for Saturday because if usually takes two instructors-one to ride tail
                                                    and one to ride lead. Trail rides can occur other days if arranged by instructors in advance.</li>
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
                                                <Image src={Farm} rounded />
                                            </Col>
                                            <Col >
                                                <Image src={Farm} rounded />
                                            </Col>
                                            <Col >
                                                <Image src={Farm} rounded />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col >
                                                <Image src={Farm} rounded />
                                            </Col>
                                            <Col >
                                                <Image src={Farm} rounded />
                                            </Col>
                                            <Col >
                                                <Image src={Farm} rounded />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col >
                                                <Image src={Farm} rounded />
                                            </Col>
                                            <Col >
                                                <Image src={Farm} rounded />
                                            </Col>
                                            <Col >
                                                <Image src={Farm} rounded />
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