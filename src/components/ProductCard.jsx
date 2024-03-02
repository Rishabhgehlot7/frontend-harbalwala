import React, { useEffect } from 'react'
import image01 from '../images/01.jpg'

const ProductCard = () => {
    return (
        <div class="bg-gray-100 shadow-lg shadow-gray-500 rounded-lg p-4 flex flex-col items-center m-4">
            <img src={image01} alt="" width={"100%"} className=' rounded-lg' />
            <h1 className=' p-2 font-medium text-xl'>Natural ToothPaste</h1>
            <div className=' p-2 text-xl'>
                <span className=' line-through px-2'>Rs 50</span>
                <span>Rs 70</span>
            </div>
            <button className=' p-3 bg-green-700 text-xl w-full rounded-md border-none font-medium text-white'>Buy</button>
        </div>
    )
}

export default ProductCard