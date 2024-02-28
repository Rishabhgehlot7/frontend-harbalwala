import React, { useState } from 'react'

const CategoryFilter = () => {
    const [showMainCategory, setShowMainCategory] = useState(true)
    const [showSubCategory, setShowSubCategory] = useState(true)
    const showCategoryMain = () => {
        setShowMainCategory(!showMainCategory);
    }
    const showCategorySub = () => {
        setShowSubCategory(!showSubCategory);
    }
    return (
        <div className=' w-[300px] h-auto bg-gray-50 m-4 shadow-lg rounded-lg'>
            <h3 className='px-3 py-1 text-xl cursor-pointer' onClick={showCategoryMain}> {'>'} ALL Category</h3>
            <div className={`p-3 ${showMainCategory ? '' : "hidden"}`}>
                <h4 className='px-3 py-1 cursor-pointer' onClick={showCategorySub}>{'>'} HairCare</h4>
                <ul className={`list-none ${showSubCategory ? "" : "hidden"}`}>
                    <li className='px-10 cursor-pointer'>Oil</li>
                    <li className='px-10 cursor-pointer'>HairMark</li>
                    <li className='px-10 cursor-pointer'>Product 3</li>
                    <li className='px-10 cursor-pointer'>Others</li>
                </ul>
                <h4 className='px-3 py-1'>{'>'} ShinCare</h4>
                <h4 className='px-3 py-1'>{'>'} BodyCare</h4>
            </div>
        </div>
    )
}

export default CategoryFilter