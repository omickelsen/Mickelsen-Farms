import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../images/Mickelsen_Logo.jpg';

const Header = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <Navbar bg="primary" expand="lg" fixed="top" id="header" className="py-2">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Mickelsen Family Farms Logo" className="horseLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('services')} 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}>
              Services
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('calendar')} 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}>
              Calendar
            </Nav.Link>
            <Nav.Link as={Link} to="/team">Owners</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          <Nav className="social-nav ms-3">
            <Nav.Link href="https://twitter.com" target="_blank" className="me-2">
              <i className="fab fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;