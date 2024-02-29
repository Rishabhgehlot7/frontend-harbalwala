import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import userIcon from '../images/icons/user.svg'
import cartIcon from '../images/icons/cart.svg'
import logo from '../images/icons/logo.svg'
import menu from '../images/icons/menu.svg'
const MobileNavbar = () => {
    const [show, setShow] = useState(false)
    const [showLogin, setShowLogin] = useState(true)
    const [showLoginPopUp, setshowLoginPopUp] = useState(false)
    const showMenu = () => {
        setShow(!show);
    }
    const showLoginPage = () => setShowLogin(!showLogin);
    const showLoginPopUpPage = () => setshowLoginPopUp(!showLoginPopUp);
    useEffect(() => {

    }, [show])

    return (
        <div className=' w-screen h-auto bg-gray-100 md:hidden'>
            <div className='bg-green-900 w-full h-full'>
                <div className='w-screen h-auto p-2 text-white flex justify-center max-w-7xl m-auto'>
                    <h1>Use code FIRST50 for a 50% discount on your first order!</h1>
                </div>
            </div>
            <div className=' w-screen h-auto flex justify-between p-2 items-center max-w-7xl m-auto'>
                <Link to={'/'} className=' font-medium w-12'>
                    <img src={logo} alt="" className='' />
                </Link>
                <div className='flex'>
                    <Link to={'/Card'} className=''>
                        <img src={cartIcon} alt="" className=' invert' />
                    </Link>
                    <Link onClick={showLoginPopUpPage} className='px-2 font-medium'>
                        <img src={userIcon} alt="" className=' invert' />
                    </Link>
                    <Link to={'/'} className='px-2 font-medium' onClick={showMenu}>
                        <img src={menu} alt="" />
                    </Link>
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


            {/* login Pop up */}
            <div className={`fixedBox w-[80%] h-auto p-8 bg-gray-300 flex justify-center items-center rounded-md shadow-2xl ${showLoginPopUp ? "" : "hidden"}`}>
                <div className=' pb-14'>
                    <span onClick={showLoginPopUpPage} className={` cursor-pointer absolute right-4 top-1 ${showLoginPopUp ? "" : "hidden"}`}>X</span>
                    <div className=' flex justify-center'>
                        <div onClick={showLoginPage} className={` cursor-pointer px-8 py-1 ${showLogin ? "bg-green-700 text-white" : " border-black border-[2px] text-black"}  rounded-sm  font-medium`}>Log in</div>
                        <div onClick={showLoginPage} className={` cursor-pointer px-8 py-1 ${showLogin ? "border-[2px] text-black border-black" : "bg-green-700 text-white"}  rounded-sm font-medium`}>Sign in</div>
                    </div>
                    {
                        showLogin ?
                            <form className=''>
                                <p className='text-xs p-1'>Don't Have an account?<span className=' text-xs font-medium'>Create now</span></p>
                                <div className='py-1'>
                                    <label htmlFor="" className=' text-sm'>Username/Email</label>
                                    <input type="text" className=' rounded-md p-1 w-full outline-lime-400 my-1' placeholder='example@gmail.com' />
                                </div>
                                <div className='py-1'>
                                    <label htmlFor="" className=' text-sm'>Password</label>
                                    <input type="password" className=' rounded-md p-1 w-full outline-lime-400 my-1' placeholder='@#$%' />
                                </div>
                                <div className='flex justify-between py-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" className='text-xs px-1'>Remember me</label>
                                    </div>
                                    <button className='underline text-xs'>forgot Password</button>
                                </div>
                                <button className=' w-full bg-green-700 text-white font-medium p-1 rounded-md my-1'>Log in</button>
                                <hr className=' bg-black my-4' />
                                <button className=' shadow-2xl bg-gray-100 w-full py-1 rounded-3xl text-sm'>Continue with Google</button>
                            </form> :
                            <form className=''>
                                <p className='text-xs p-1'>Already have an account?<span className=' text-xs font-medium '>Login now</span></p>
                                <div className='py-1'>
                                    <label htmlFor="" className=' text-sm'>Username/Email</label>
                                    <input type="text" className=' rounded-md p-1 w-full outline-lime-400 my-1' placeholder='example@gmail.com' />
                                </div>
                                <div className='py-1'>
                                    <label htmlFor="" className=' text-sm'>Full Name</label>
                                    <input type="text" className=' rounded-md p-1 w-full outline-lime-400 my-1' placeholder='xyz' />
                                </div>
                                <div className='py-1'>
                                    <label htmlFor="" className=' text-sm'>Password</label>
                                    <input type="password" className=' rounded-md p-1 w-full outline-lime-400 my-1' placeholder='@#$%' />
                                </div>
                                <div className='py-1'>
                                    <label htmlFor="" className=' text-sm'>Confirm Password</label>
                                    <input type="password" className=' rounded-md p-1 w-full outline-lime-400 my-1' placeholder='@#$%' />
                                </div>
                                <div className='flex justify-between py-2'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" className='text-xs px-1'>I accept the terms of Service and Privacy Policy</label>
                                    </div>
                                </div>
                                <button className=' w-full bg-green-700 text-white font-medium p-1 rounded-md my-1'>Log in</button>
                            </form>
                    }




                </div>
            </div>
        </div>
    )
}

export default MobileNavbar