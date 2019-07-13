import React from 'react';
import Hero from './Hero';
import About from './About';
import Parallax from './Parallax';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import MainCalendar from './MainCalendar';
import '../../styles/Bootstrap.min.css'
import '../../styles/App.css';

const Home = () => {
    return(
    <div>
        <Hero/>
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