import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero'; // Import Hero component
import About from './About'; // Import About component
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import MainCalendar from './MainCalendar'; // Import MainCalendar
import Team from './Team'; // Assuming Team is the owners component

const Home = () => {
  console.log('Rendering Home');
  return (
    <div>
      <Header />
      <Hero /> {/* Add Hero section at the top */}
      <Container>
        <About /> {/* Add About section */}
        <Row id="services" className="services-row">
          <Col md={4} className="service-card">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-horse"></i>
              </div>
              <h3>Horse Boarding</h3>
              <p>includes use of facility, enclosed stalls, use of equipment, food, water, daily turnout, and health records kept. Click for more details.</p>
              <Link to="/services/horse-boarding" className="btn btn-primary">Learn More</Link>
            </div>
          </Col>
          <Col md={4} className="service-card">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-horse"></i>
              </div>
              <h3>Riding Lessons and Trail Rides</h3>
              <p>1 hour or 1/2 hour private riding lessons including horse rental, horse tack, helmet, and facility and horse care. Click for more details.</p>
              <Link to="/services/riding-lessons" className="btn btn-primary">Learn More</Link>
            </div>
          </Col>
          <Col md={4} className="service-card">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Events</h3>
              <p>We can help you plan and assist at party or other events. Contact us via phone or email.</p>
              <Link to="/services/events" className="btn btn-primary">Learn More</Link>
            </div>
          </Col>
        </Row>
        <Row id="calendar">
          <Col>
            <div className="calendar-section">
              <h2>Calendar</h2>
              <MainCalendar />
            </div>
          </Col>
        </Row>
        <Row id="owners">
          <Col>
            <div className="owners-section">
              <h2>Meet Our Owners</h2>
              <Team /> {/* Assuming Team is a component for owners */}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;