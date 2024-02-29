import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
    const [show, setShow] = useState(false)
    const showMenu = () => {
        setShow(!show);
    }
    useEffect(() => {

    }, [show])

    return (
        <div className=' w-screen h-auto bg-gray-200 md:hidden'>
            <div className='bg-green-900 w-full h-full'>
                <div className='w-screen h-auto p-2 text-white flex justify-center max-w-7xl m-auto'>
                    <h1>Use code FIRST50 for a 50% discount on your first order!</h1>
                </div>
            </div>
            <div className=' w-screen h-auto flex justify-between p-5 items-center max-w-7xl m-auto'>
                <Link to={'/'} className=' font-medium'>LOGO</Link>
                <div>
                    <Link to={'/Card'} className='px-2 font-medium'>CARD</Link>
                    <Link to={'/'} className='px-2 font-medium'>USER</Link>
                    <Link to={'/'} className='px-2 font-medium' onClick={showMenu}>MENU</Link>
                </div>
                <ul className={` fixed right-0 top-0 bg-gray-300 p-4 h-screen pt-7 w-[80%] flex flex-col z-30 ${show ? "" : "right-[-500px]"}`}>
                    <button className='absolute top-2 right-3' onClick={showMenu}>X</button>
                    <div className=' my-6'></div>
                    <input type="text" className='rounded-md border-black border-[1px] p-2 font-medium' placeholder='Search' />
                    <Link to={'/'} className=' px-2 font-medium p-2'>Home</Link>
                    <Link to={'/Products'} className=' px-2 font-medium p-2'>Products</Link>
                    <Link to={'/About'} className=' px-2 font-medium p-2'>About</Link>
                    <Link to={'/Contact'} className=' px-2 font-medium p-2'>Contact</Link>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavbar