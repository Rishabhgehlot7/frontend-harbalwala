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
                        <Link to={'/Card'} className='px-2 font-medium'>CARD</Link>
                        <Link to={'/'} className='px-2 font-medium'>USER</Link>
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
            <div className='fixedBox w-[30%] h-auto p-8 bg-gray-300 flex justify-center items-center rounded-md shadow-2xl'>
                <div className=' pb-14'>
                    <span className=' absolute right-4 top-1'>X</span>
                    <div className=' flex'>
                        <div className={`px-12 py-2 bg-green-700 rounded-sm text-white font-medium`}>Log in</div>
                        <div className={`px-12 py-2 bg-green-700 rounded-sm text-white font-medium`}>Sign in</div>
                    </div>
                    <p className='text-xs p-1'>Don't Have an account?<span className=' text-xs font-medium'>Create now</span></p>
                    <form>
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
                    </form>
                    <hr className=' bg-black my-4' />
                    <button className=' shadow-2xl bg-gray-100 w-full py-1 rounded-3xl text-sm'>Continue with Google</button>

                </div>
            </div>
        </div>
    )
}

export default Header