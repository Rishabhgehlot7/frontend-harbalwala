import React from 'react'
import MobileNavbar from '../components/MobileNavbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductDetailComponent from '../components/ProductDetailComponent'
const ProductDetailPage = () => {
    return (
        <div>
            <Header />
            <MobileNavbar />
            <ProductDetailComponent />
            <Footer />
        </div>
    )
}

export default ProductDetailPage