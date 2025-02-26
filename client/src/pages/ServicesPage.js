import React from 'react';
import { Link } from 'react-router-dom'; // Added for potential use (if needed)
import Header from '../components/layout/Header'; // Updated path (inside src/)
import Services from '../components/layout/Services'; // Updated path (inside src/)
import Footer from '../components/layout/Footer'; // Updated path (inside src/)

const ServicesPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;