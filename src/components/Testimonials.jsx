import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    return (
        <div class="container mx-auto p-8 ">
            <h2 className=' text-3xl p-3 font-medium text-center'>Testimonials</h2>
            <div className='flex justify-center'>
                <h2 className='text-center w-32 h-1 bg-black'></h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    )
}

export default Testimonials