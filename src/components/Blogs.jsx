import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
    return (
        <div class="container mx-auto p-4">
            <h2 className=' text-3xl p-3 font-medium text-center'>Blogs</h2>
            <div className='flex justify-center'>
                <h2 className='text-center w-32 h-1 bg-black'></h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default Blogs