import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className=' w-screen h-auto bg-gray-200 hidden md:block'>
            <div className='bg-green-900 w-full h-full'>
                <div className='w-screen h-auto p-2 text-white flex justify-between max-w-7xl m-auto'>
                    <div></div>
                    <h1>Use code FIRST50 for a 50% discount on your first order!</h1>
                    <div className='flex'>
                        <button className='px-2 font-medium'>CARD</button>
                        <button className='px-2 font-medium'>USER</button>
                    </div>
                </div>
            </div>
            <div className=' w-screen h-auto flex justify-between p-5 items-center max-w-7xl m-auto'>
                <Link to={'/'} className=' font-medium'>LOGO</Link>
                <ul className='flex justify-center'>
                    <Link to={'/'} className=' px-3 font-medium'>Home</Link>
                    <Link to={'/Products'} className=' px-3 font-medium'>Products</Link>
                    <Link to={'/About'} className=' px-3 font-medium'>About</Link>
                    <Link to={'/Contact'} className=' px-3 font-medium'>Contact</Link>
                </ul>
                <input type="text" className=' w-96 rounded-md border-black border-[1px] p-1' placeholder='Search' />
            </div>
        </div>
    )
}

export default Header