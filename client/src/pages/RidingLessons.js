import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Footer from '../components/layout/Footer'
import Pdf from '../pdfs/Equine Release and Wavier of Liability form for Mickelsen Farm.pdf'
import Pdf2 from '../pdfs/Group riding lessons registration form.pdf'
import Pdf3 from '../pdfs/horse 4-H registration form.pdf'
import Pdf4 from '../pdfs/Fall lesson registration form.pdf'
// import Pdf5 from '../pdfs/Spring session registration form 2021.pdf'
import Pdf6 from '../pdfs/Trail ride registration form.pdf'
import Pdf7 from '../pdfs/Hooves and Halos Fall session registration form.pdf'
// import Pdf8 from '../pdfs/PM Summer lesson registration form.pdf'
import Pdf9 from '../pdfs/Winter session Registration.pdf'


const RidingLessons = () => {
    return (

        <div>
            <Header />
            <div className="container">
                <div className='service-container'>
                    <h1 className="service-title">Riding Lessons and Trail Rides</h1>
                    <h2 className="lesson-pricing-container"> <center>Summer session lessons are Jun-August.<br />Fall session lessons are September-November. <br />Winter Session "No Lessons" are December-February. <br />Click registration forms for pricing and details.</center></h2>
                    
                </div>
            </div>
            <Container>
                <Row>
                    <Col><div className="lesson-pricing-container">
                        <h1 className="service-includes-title">Payment Information</h1>
                        
                        <p>
                            <ul className="includes-list">
                                <li>All monies due at the beginning of each month for lessons occuring during the month</li>
                                <li>Lessons may be paid for by cash, check, or Venmo Mickelsen Family Farms @Alfred-Mickelsen (which is preferred for convenience).</li>
                                <li>Payment includes horse rental, horse tack, helmet, and horse-riding facility rental.</li>
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
                                                    <li>No money will be returned unless instructor is unable to make up lesson within a 2-week window.</li>
                                                    <li>Beacuse I have instructors and students traveling to my barn for lessons, I expect at least a 24-hour
                                                    cancellation notice by instructor or student unless an illness or emergency might arise. </li>
                                                    <li>Makeup lessons may be scheduled if Instructors or students miss a lesson with prior notice.</li>
                                                    <li>If a 24-hour notice is not given for cancellations, no makeup lesson will be given.</li>
                                                    <li>Trail rides are usually reserved for Saturday because it usually takes two instructors-one to ride tail
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
                                <h1 className="lesson-pricing-title">Lesson Pricing</h1>
                                <Table responsive="xs">
                                    <thead>
                                        <tr className="table-headers">
                                            
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <h2><center>See registration form for pricing</center></h2>
                                            <td><br /></td>
                                        </tr>
                                        <tr>
                                            <td></td>

                                            <td><br />
                                             </td>
                                            <td><br />
                                                </td>
                                            <td><br /></td>
                                        </tr>

                                    </tbody>
                                </Table>
                                <a href={Pdf}>Click here for Equine Release and Waiver of Liability form</a> <br />
                                {/* <a href={Pdf2}>Click here for Group riding lesson registration form</a> */}
                                {/* <br /> */}
                                <a href={Pdf7}>Click here for Lessons with Izzy/Hooves and Halos</a>
                                <br></br>
                                <a href={Pdf4}>Click here for Lessons with All other instructors at Mickelsen Family Farms</a>
                                <br />
                                <a href={Pdf9}>Click here for Winter Session Registration Form</a>
                                <h5><strong></strong></h5>
                                <h5><strong>For other options please view registration forms</strong></h5>
                                {/* <h5><strong>Group of 4 $25 per person for 1.5 hrs ($20 each sibling/boarder discount)</strong></h5> */}
                                <h5><strong>Date Night options available upon request</strong></h5>
                                <a href={Pdf3}>Click here for 4-H registration form</a>

                                    <br />
                                    <h1 className="lesson-pricing-title">Trail Rides</h1>
                                    <h4>Trail rides can be scheduled on Saturdays and must be reserved a head of time.
See registration form for pricing and details, by appointment only.
</h4>
                                    <a href={Pdf6}>Click here for Trail Ride Registration form</a>

                                    <h5><strong><br />
                                    </strong></h5>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}



export default RidingLessons