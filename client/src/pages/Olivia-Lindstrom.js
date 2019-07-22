import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Olivia from '../images/Olivia.jpg'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Footer from '../components/layout/Footer'







const OliviaLindstrom = () => {
    return (

        <div>
            <Header />
            <div className="container">
                <div className='service-container'>
                    <h1 className="service-title">Olivia Lindstrom</h1>
                </div>
            </div>
            <Container>
                <Row>
                    <Col > <div className="row">
                        <div className="photo-container">
                            <img src={Olivia} className="familyphoto" />
                        </div>
                    </div>
                    </Col>
                    <Col>
                        {/* <div className="second-container"> */}
                        <div>
                            <div className="row">
                                <div className="about-farm-container">
                                    <h1 className="about-farm-title">About Olivia</h1>
                                    <p>
                                        <ul className="about-farm-list">
                                            <li>Olivia Lindstrom is the daughter of Jana and Jared Lindstrom. She grew up in Pleasant Grove and is looking forward to her senior year in Pleasant Grove High School. She was part of PG's drill team her freshman and sophomore years and now devotes her high school career to Student Council. Besides being in Student Council and FFA, she is a high honor roll student and loves math and art. Outside of school, Olivia lives and thrives at Mickelsen Family Farms. She has been taking lessons herself from JoDee for almost 7 years and has been teaching at the farm for the past 2 years. She purchased her own horse at the age of 14 and has been working with him and training him to be a highly skilled horse. She was Rodeo Junior Queen 2nd attendant for Lindon Days last year and is the new 2019-2020 Strawberry Days Rodeo Queen for Pleasant Grove. She is current instructor/mentor for two girls that have tried out for Rodeo princess for Lindon Days. Olivia loves working with horses And people and is excited to get to know the community, her clients, and better lover her old ones as well. Her lesson horse is her quarter horse, Cash. In addition, Olivia will have access to the other horses at the barn which she has had lessons on all of them and is proficient and familiar with them.</li>
                                        </ul>
                                    </p>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="team-container">
                                    <h1 className="about-team-title">Contact Me</h1>
                                    <h1>
                                        <nav className="nav social-nav pull-center d-none d-lg-inline">
                                            <a href="https://www.facebook.com/olivia.lindstrom.503"><i className="fab fa-facebook"></i></a> <i className="fa fa-envelope">oliviapaigelinds27@gmail.com</i>
                                            <i className="fa fa-phone"></i>
                                            <p>Olivia Lindstrom: +1 801-830-0816</p>
                                        </nav>
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}



export default OliviaLindstrom