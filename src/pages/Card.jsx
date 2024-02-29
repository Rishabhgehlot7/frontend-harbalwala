import React from 'react'
import Header from '../components/Header'
import MobileNavbar from '../components/MobileNavbar'
import Footer from '../components/Footer'
import CardContainer from '../components/CardContainer'
import BillingCard from '../components/BillingCard'
const Card = () => {
    return (
        <div>
            <Header />
            <MobileNavbar />
            <CardContainer />
            <BillingCard />
            <Footer />
        </div>
    )
}

export default Card