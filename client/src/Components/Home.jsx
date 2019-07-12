import React, { Component } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import Parallax from '../components/Parallax';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import MainCalendar from '../components/MainCalendar';
import '../styles/Bootstrap.min.css';
import '../styles/App.css';
import GoogleMaps from '../components/GoogleMaps';

const Home = () => {
    return (
        <div>
            <Hero />
            <Header />
            <About />
            <Parallax />
            <Services />
            <MainCalendar />
            <Team />
            <Contact />
            <Footer />
            <ScrollTop />
        </div>
    )
}

export default Home;