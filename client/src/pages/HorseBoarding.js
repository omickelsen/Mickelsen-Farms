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
                            <h2 className="service-includes-title">Includes</h2>
                            <p>
                                <ul className="includes-list">
                                    <li>Use of all the facility</li>
                                    <li>Lighted indoor arena 40 X 60</li>
                                    <li>Lighted Outdoor arean 72 X 72</li>
                                    <li>Enclosed stalls and daily turnout</li>
                                    <li>Stalls cleaned 3X per week</li>
                                    <li>High quality alfalfa feed and pasture turn out in the summer</li>
                                    <li>Fresh water</li>
                                    <li>Use of tack room and storage of tack</li>
                                    <li>Use of barn equipment-whips, jumps, barrels, etc.</li>
                                    <li>Health records kept on every horse boarded at our facility</li>
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
                                    <h2 className="service-pricing-title">Pricing</h2>
                                    <p>
                                        <ul className="pricing-list">
                                            <li>Currently: $300 per month.</li>
                                            <li>$50 initial deposit</li>
                                            <li>Extra Fees for special requests (SawDust)</li>
                                            <li><strong>Boarding fees are subject to change  subject to change based off of feed cost.</strong></li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="extra-container">
                                    <h2 className="service-extra-title">Extras</h2>
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
            <Footer />
        </div>
        
      </div>
    )
}



export default HorseBoarding