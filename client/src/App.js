import React, { Component } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Parallax from './components/Parallax';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import MainCalendar from './components/MainCalendar';
import './Styles/Bootstrap.min.css';
import './Styles/App.css';
import GoogleMaps from './components/GoogleMaps';


class App extends Component {
  render() {
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
    );
  }
}

export default App;