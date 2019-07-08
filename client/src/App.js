import React, { Component } from 'react';
import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Parallax from './Components/Parallax';
import Services from './Components/Services';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollTop from './Components/ScrollTop';
import MainCalendar from './Components/MainCalendar';
import './Styles/Bootstrap.min.css';
import './Styles/App.css';



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