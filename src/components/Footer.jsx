import React from 'react'
import logo from '../images/icons/logo.svg'
import mastercart from '../images/icons/master.svg'
import Badge from '../images/icons/Compant Badge.svg'
import Facebook from '../images/icons/Facebook.svg'
import instagram from '../images/icons/instagram.svg'
import threads from '../images/icons/threads.svg'
import Twitter from '../images/icons/Twitter.svg'
import visa from '../images/icons/visa.svg'
import rupay from '../images/icons/rupay.svg'
import paymentsIcon from '../images/icons/payments.svg'
const Footer = () => {
    return (
        <div className=' w-screen h-auto'>
            <div className=' w-screen flex p-4 bg-green-700 justify-around md:flex-row flex-col'>
                <div className=' flex justify-center'>
                    <img src={logo} alt="" />
                </div>
                <ul className='list-none text-white py-3'>
                    <li className=' font-medium'>Quick Links</li>
                    <li>About Us</li>
                    <li>My Account</li>
                    <li>Offers</li>
                </ul>
                <ul className='list-none text-white py-3'>
                    <li className=' font-medium'>Legal</li>
                    <li>T&C</li>
                    <li>Privacy Policy</li>
                    <li>Shipping</li>
                    <li>Returns & Refund Policy</li>
                </ul>
                <ul className='list-none text-white py-3'>
                    <li className=' font-medium'>Support</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                </ul>
                <div className=' flex justify-center'>
                    <img src={Badge} alt="" />
                </div>
                <div className='flex flex-col justify-between items-start text-white py-2'>
                    <div className=' flex flex-col'>
                        <div>Copyright 2024</div>
                        <p>HERBALWALA | Powered by Aditi Tech Service</p>
                    </div>
                    <ul className=' flex list-none flex-row p-2'>
                        <li className='pr-2'>
                            <img src={Facebook} alt="" />
                        </li>
                        <li className='pr-2'>
                            <img src={instagram} alt="" />
                        </li>
                        <li className='pr-2'>
                            <img src={threads} alt="" />
                        </li>
                        <li className='pr-2'>
                            <img src={Twitter} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className=' w-full bg-green-900 text-white flex justify-center p-1 md:flex-row flex-col items-start md:items-center '>
                <div className=' px-3'>We facilitate your payments through trusted gateways!</div>
                <ul className='px-3 list-none flex items-center justify-center flex-row'>
                    <li className=' px-2'>
                        <img src={visa} alt="" />
                    </li>
                    <li className=' px-2'>
                        <img src={mastercart} alt="" />
                    </li>
                    <li className=' px-2'>
                        <img src={rupay} alt="" />
                    </li>
                    <li className=' px-2'>
                        <img src={paymentsIcon} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer