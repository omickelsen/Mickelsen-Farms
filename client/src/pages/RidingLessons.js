import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


const RidingLessons = () => {
    return (

        <div>
            <Header />
            <div className="container">
                <div className='service-container'>
                    <h1 className="service-title">Riding Lessons</h1>
                </div>
            </div>
            <Container>
                <Row>
                    <Col><div className="lesson-pricing-container">
                        <h1 className="service-includes-title">Payment Information</h1>
                        <p>
                            <ul className="includes-list">
                                <li>All monies due each visit or first of month unless other arrangments are made ahead of time.</li>
                                <li>Lessons may be paid for by cash, check, or Venmo at JoDee Mickelsen@JoDee-Mickelsen (which I prefer for convenience).</li>
                                <li>Payment includes horse rental, horse tack, helmet, and horse-riding facility rental.</li>
                                <li>Please read andmake note of cancellation policy below.</li>
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
                                <h1 className="lesson-pricing-title">Pricing</h1>
                                <Table responsive="xs">
                                    <thead>
                                        <tr className="table-headers">
                                            <th>Instructor</th>
                                            <th>1/2 hour private lesson</th>
                                            <th>1 hour private lesson</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jodee Mickelsen</td>

                                            <td>$25.00 (per lesson) once a week.<br />
                                                $20 (per lesson) if you use your own boarded horse.<br />
                                                <br /><center>OR</center><br />$20.00 (per lesson) for twice a week. <br />
                                                $15 (per lesson) if you use your own boarded horse. </td>
                                            <td>$40.00 (per lesson) once a week.<br />
                                                $35 (per lesson) if you use your own boarded horse.<br />
                                                <br /><center>OR</center><br />$35.00 (per lesson) for twice a week. <br />
                                                $30 (per lesson) if you use your own boarded horse. </td>
                                            <td>Each lesson is 10 minutes saddle up time. <br />Remaining time is spent riding.</td>
                                        </tr>
                                        <tr>
                                            <td>Huntyr, Olivia, Izzy</td>

                                            <td>$20.00 (per lesson) once a week.<br />
                                                $15 (per lesson) if you use your own boarded horse.<br />
                                                <br /><center>OR</center><br />$15.00 (per lesson) for twice a week.
                                             </td>
                                            <td>$30.00 (per lesson) once a week.<br />
                                                $25 (per lesson) if you use your own boarded horse.<br />
                                                <br /><center>OR</center><br />$25.00 (per lesson) for twice a week. <br />
                                                $20 (per lesson) if you use your own boarded horse. </td>
                                            <td>Each lesson is 10 minutes saddle up time. <br />Remaining time is spent riding.</td>
                                        </tr>

                                    </tbody>
                                </Table>
                                <h5><strong>Sibling discount: $20.00 (per 1/2 lesson) once a week. <br />
                                    $35 an hour if siblings share the hour lesson and use the same horse.<br />
                                    **Huntyr will be assisted by JoDee for all her lessons.</strong></h5>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}



export default RidingLessons