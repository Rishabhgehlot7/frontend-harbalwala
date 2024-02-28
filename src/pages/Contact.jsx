import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactComponent from '../components/ContactComponent'

const Contact = () => {
    return (
        <div>
            <Header />
            <MobileNavbar />
            <ContactComponent />
            <Footer />
        </div>
    )
}

export default Contact