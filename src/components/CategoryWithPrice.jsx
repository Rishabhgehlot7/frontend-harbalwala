import React, { useState } from 'react'

const CategoryWithPrice = () => {
    const [showCategory, setshowCategory] = useState(true)
    const showCategoryHandler = () => {
        setshowCategory(!showCategory)
    }
    return (
        <div className=' w-[300px] h-auto bg-gray-50 shadow-lg my-2 md:m-4 rounded-lg p-2'>
            <div className=' flex justify-between p-3 cursor-pointer' onClick={showCategoryHandler} >
                <h3 className='px-3 py-1 text-xl cursor-pointer'>Sort By</h3>
                <div className=' text-xl'>{">"}</div>
            </div>
            <form action="" className={`px-3 ${showCategory ? "" : "hidden"}`}>
                <div className='p-2 flex gap-2 cursor-pointer'>
                    <input type="checkbox" name='Relevance' id='Relevance'/>
                    <label className=' cursor-pointer' htmlFor="Relevance">Relevance</label>
                </div>
                <div className='p-2 flex gap-2 cursor-pointer'>
                    <input type="checkbox" name='Lowtohigh' id='Lowtohigh'/>
                    <label className=' cursor-pointer' htmlFor="Lowtohigh">Price: Low to high</label>
                </div>
                <div className='p-2 flex gap-2 cursor-pointer'>
                    <input type="checkbox" name='hightoLow' id='hightoLow'/>
                    <label className=' cursor-pointer' htmlFor="hightoLow">Price: high to Low</label>
                </div>
                <div className='p-2 flex gap-2 cursor-pointer'>
                    <input type="checkbox" name='Discount' id='Discount'/>
                    <label className=' cursor-pointer' htmlFor="Discount">Discount: high to Low</label>
                </div>
            </form>
        </div>
    )
}

export default CategoryWithPrice