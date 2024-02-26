import React from 'react'

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
                <div className=' font-medium'>LOGO</div>
                <ul className='flex justify-center'>
                    <li className=' px-3 font-medium'>Home</li>
                    <li className=' px-3 font-medium'>Products</li>
                    <li className=' px-3 font-medium'>About</li>
                    <li className=' px-3 font-medium'>Contact</li>
                </ul>
                <input type="text" className=' w-96 rounded-md border-black border-[1px] p-1' placeholder='Search' />
            </div>
        </div>
    )
}

export default Header