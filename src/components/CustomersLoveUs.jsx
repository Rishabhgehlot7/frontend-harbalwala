import React from 'react'
import CustomerLoveUsCard from './CustomerLoveUsCard'

const CustomersLoveUs = () => {
    return (
        <div class="container mx-auto p-4">
            <h2 className=' text-3xl p-3 font-medium text-center'>Customers Love Us</h2>
            <div className='flex justify-center'>
                <h2 className='text-center w-32 h-1 bg-black'></h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <CustomerLoveUsCard />
                <CustomerLoveUsCard />
                <CustomerLoveUsCard />
                <CustomerLoveUsCard />
                <CustomerLoveUsCard />
                <CustomerLoveUsCard />
            </div>
        </div>
    )
}

export default CustomersLoveUs