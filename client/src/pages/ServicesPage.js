import React from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import Footer from '../components/layout/Footer';



const ServicesPage = () => {
    return (

        <div>
            <Link to='/' >
            </Link>
            <Header />
            <Services />
            <Footer />
        </div>


    )
}



export default ServicesPage