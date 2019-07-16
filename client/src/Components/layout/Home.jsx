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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


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


Home.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);