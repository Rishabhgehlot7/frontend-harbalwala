import React from 'react'
import AboutUs from '../components/AboutUs'
import MobileNavbar from '../components/MobileNavbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Header />
            <MobileNavbar />
            <AboutUs />
            <Footer/>
        </div>
    )
}

export default About