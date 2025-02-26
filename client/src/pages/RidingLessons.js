import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Accordion, Card, Table } from 'react-bootstrap';
import Header from '../components/layout/Header'; // Verify default export
import Footer from '../components/layout/Footer'; // Verify default export
import EquineRelease from '../pdfs/Equine Release and Wavier of Liability form for Mickelsen Farm.pdf';
import Horse4HRegistration from '../pdfs/horse 4-H registration form.pdf';
import TrailRideRegistration from '../pdfs/Trail ride registration form.pdf';
import LessonRegistration from '../pdfs/Lesson Registration form.pdf';
import BeginnerSkills from '../pdfs/Riding Progression Skills - Beginner.pdf';
import IntermediateSkills from '../pdfs/Riding Progression Skills - Intermediate.pdf';
import AdvancedSkills from '../pdfs/Riding Progression Skills - advanced.pdf';
import PonyPalsSkills from '../pdfs/Riding Progression Skills - Pony Pals.pdf';
import HorseCareSkills from '../pdfs/Horse Care and Connenction skills.pdf';
import AdvancedBeginnerSkills from '../pdfs/Riding Progression Skills - Advanced Beginner.pdf';
import AdvancedIntermediateSkills from '../pdfs/Riding Progression Skills - Advanced Intermediate.pdf';

const RidingLessons = () => {
  return (
    <div className="riding-lessons-page">
      <Header />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center mb-4">
            <h1 className="service-title">Riding Lessons and Trail Rides</h1>
            <h2 className="lesson-pricing-container text-muted">
              Click registration forms below for pricing and details.
            </h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col xs={12} md={6} className="mb-4">
            <div className="lesson-pricing-container p-4 bg-light rounded shadow-sm">
              <h2 className="service-includes-title mb-3">Payment Information</h2>
              <ul className="includes-list list-unstyled">
                <li className="mb-2">All monies due at the beginning of each month for lessons occurring during the month</li>
                <li className="mb-2">Payment includes horse rental, horse tack, helmet, and horse-riding facility rental.</li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={6} className="mb-4">
            <div className="price-table p-4 bg-light rounded shadow-sm">
              <h2 className="lesson-pricing-title mb-3">Lesson Pricing</h2>
              <Table responsive bordered hover className="mb-4">
                <thead>
                  <tr className="table-primary">
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <center>
                        <h3>See registration form <Link to={LessonRegistration} target="_blank">CLICK HERE</Link></h3>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <center>
                        <Link to={EquineRelease} target="_blank" className="text-primary">
                          Click here for Equine Release and Waiver of Liability form
                        </Link>
                      </center>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h3 className="mt-4">Riding Levels Offered</h3>
              <ul className="list-unstyled">
                <li><Link to={PonyPalsSkills} target="_blank" className="text-primary">Pony Pals Class Skills</Link></li>
                <li><Link to={BeginnerSkills} target="_blank" className="text-primary">Beginner Class Skills</Link></li>
                <li><Link to={AdvancedBeginnerSkills} target="_blank" className="text-primary">Advanced Beginner Class Skills</Link></li>
                <li><Link to={IntermediateSkills} target="_blank" className="text-primary">Intermediate Class Skills</Link></li>
                <li><Link to={AdvancedIntermediateSkills} target="_blank" className="text-primary">Advanced Intermediate Class Skills</Link></li>
                <li><Link to={AdvancedSkills} target="_blank" className="text-primary">Advanced Class Skills</Link></li>
                <li><Link to={HorseCareSkills} target="_blank" className="text-primary">Horse Care and Connection Class Skills</Link></li>
              </ul>

              <h3 className="mt-4">Trail Rides</h3>
              <p className="text-muted">
                Trail rides can be scheduled on Saturdays only and must be reserved ahead of time. See the registration form for pricing and details, by appointment only.
              </p>
              <h4>
                <Link to={TrailRideRegistration} target="_blank" className="text-primary">
                  Click here for Trail Ride Registration form
                </Link>
              </h4>

              <h5 className="mt-3 text-muted">Date Night options available upon request</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default RidingLessons; // Ensure proper export