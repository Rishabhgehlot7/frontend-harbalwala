import React from 'react'
import image01 from '../images/01.jpg'
import stars from '../images/icons/starts.svg'
const TestimonialCard = () => {
    return (
        <div class="bg-gray-50 shadow-lg shadow-gray-500 rounded-lg p-4 flex flex-col items-center m-4">
            <img src={image01} alt="" className=' rounded-full w-24 h-24' />
            <h1 className=' p-2 font-medium text-xl'>Rishabh Gehlot</h1>
            <div>
                <img src={stars} alt="" />
            </div>
            <p className='text-center'>Lorem ipsum dolor , molestiae tempora, facere et ut eligendi veritatis!</p>
        </div>
    )
}

export default TestimonialCard