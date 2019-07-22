import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Farm from '../images/farm.jpeg'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'







const Other3 = () => {
    return (

        <div>
            <Header />
            <div className="container">
                <div className='service-container'>
                    <h1 className="service-title">Other 3</h1>
                </div>
            </div>
            <Container>
                <Row>
                    <Col > <div className="row">
                        <div className="photo-container">
                            <img src={Farm} className="familyphoto" />
                        </div>
                    </div>
                    </Col>
                    <Col>
                        {/* <div className="second-container"> */}
                        <div>
                            <div className="row">
                                <div className="about-farm-container">
                                    <h1 className="about-farm-title">About Us</h1>
                                    <p>
                                        <ul className="about-farm-list">
                                            <li>Horshoeing, trimming, scheduled worming is avaialble at owner expense</li>
                                        </ul>
                                    </p>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="team-container">
                                    <h1 className="about-team-title">Contact Us</h1>
                                    <h1>
                                        <nav className="nav social-nav pull-center d-none d-lg-inline">
                                            <a href="https://twitter.com/mickelsen_s"><i className="fab fa-twitter"></i></a><a href="https://www.facebook.com/MickelsenFamilyFarms/"><i className="fab fa-facebook"></i></a> <i className="fa fa-envelope"> Other 3@msn.com</i>
                                        </nav>
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default Other3