import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import MainPageCarousel from '../components/MainPageCarousel';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import MainCalendar from '../components/MainCalendar';
import '../Styles/Bootstrap.min.css';
import '../Styles/App.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <Header />
            <About />
            <MainPageCarousel />
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