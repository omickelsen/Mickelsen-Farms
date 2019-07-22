import React from 'react';
import Header from '../components/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from '../components/layout/Footer'







const HorseBoarding = () => {
    return (
        <div>
        <div>
            <Header />
            <div className="container">
                <div className='service-container'>
                    <h1 className="service-title">Horse Boarding</h1>
                </div>
            </div>
            <Container>
                <Row>
                    <Col > <div className="row">
                        <div className="includes-container">
                            <h1 className="service-includes-title">Includes</h1>
                            <p>
                                <ul className="includes-list">
                                    <li>Use of all the facility</li>
                                    <li>Lighted indoor arena 40 X 60</li>
                                    <li>Outdoor arean 72 X 72</li>
                                    <li>Enclosed stalls and daily turnout</li>
                                    <li>Daily cleaning of stalls</li>
                                    <li>High quality alfalfa feed and pasture turn out in the summer</li>
                                    <li>Fresh water</li>
                                    <li>Use of tack room and storage of tack</li>
                                    <li>Use of barn equipment-whips, jumps, barrels, etc.</li>
                                    <li>Also health records kept on every horse boarded at our facility</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    </Col>
                    <Col>
                        {/* <div className="second-container"> */}
                        <div>
                            <div className="row">
                                <div className="pricing-container">
                                    <h1 className="service-pricing-title">Pricing</h1>
                                    <p>
                                        <ul className="pricing-list">
                                            <li>Currently: $275 per month</li>
                                            <li>Currently: $250 per month if purchase once a week lesson. Trailer parking available.</li>
                                            <li>$25 discount for more than one horse.</li>
                                            <li><strong>Boarding fees are subject to change.</strong></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="extra-container">
                                    <h1 className="service-extra-title">Extras</h1>
                                    <p>
                                        <ul className="extra-list">
                                            <li>Horshoeing, trimming, scheduled worming is avaialble at owner expense</li>
                                        </ul>
                                    </p>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
        <Footer />
      </div>
    )
}



export default HorseBoarding