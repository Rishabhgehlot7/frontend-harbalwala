import React from 'react'
import Header from '../components/Header'
import MobileNavbar from '../components/MobileNavbar'
import ShopPoster from '../components/ShopPoster'
import CategoryFilter from '../components/CategoryFilter'
import ProductsContainer from '../components/ProductsContainer'
import Footer from '../components/Footer'
import CategoryWithPrice from '../components/CategoryWithPrice'

const Products = () => {
    return (
        <div>
            <Header />
            <MobileNavbar />
            <ShopPoster />
            <div className=' w-full h-auto'>
            </div>
            <div class="flex h-auto md:flex-row flex-col">
                <div className='flex flex-col md:flex-col md:justify-start md:items-start items-center justify-center md:m-5'>
                    <CategoryFilter />
                    <CategoryWithPrice />
                </div>
                <ProductsContainer className="col-span-2" />
            </div>
            <Footer />
        </div>
    )
}

export default Products