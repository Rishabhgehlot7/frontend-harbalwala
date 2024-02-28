import React from 'react'
import ProductCard from './ProductCard'


const PRoductsContainer = () => {
    return (
        <div class="container mx-auto p-4">
            <h2 className=' text-3xl p-3 font-medium text-center'>Hot Sale</h2>
            <div className='flex justify-center'>
                <h2 className='text-center w-32 h-1 bg-black'></h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default PRoductsContainer