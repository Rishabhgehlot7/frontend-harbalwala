import React from 'react'
import image01 from '../images/01.jpg'

const BlogCard = () => {
    return (
        <div class="bg-gray-100 shadow-lg shadow-gray-500 rounded-lg p-4 flex flex-col items-center m-4 imgBG bg-auto bg-no-repeat bg-center">
            <div className=' text-center  w-[80%] text-xl text-white font-medium py-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eos?
            </div>
            <button className=' p-3 bg-green-700 text-xl w-[80%] rounded-md border-none font-medium text-white'>Buy</button>
        </div>
    )
}

export default BlogCard