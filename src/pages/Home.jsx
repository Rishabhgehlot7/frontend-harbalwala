import React from 'react'
import Header from '../components/Header'
import MobileNavbar from '../components/MobileNavbar'
import Poster from '../components/Poster'
import HotSale from '../components/HotSale'
import Blogs from '../components/Blogs'
import CustomerLoveUsCard from '../components/CustomerLoveUsCard'
import CustomersLoveUs from '../components/CustomersLoveUs'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <MobileNavbar />
            <Poster />
            <HotSale/>
            <Blogs/>
            <CustomersLoveUs/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Home