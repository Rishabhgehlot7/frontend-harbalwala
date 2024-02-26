import React from 'react'

const Footer = () => {
    return (
        <div className=' w-screen h-auto'>
            <div className=' w-screen flex p-4 bg-green-700 justify-around md:flex-row flex-col'>
                <div></div>
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
                <div></div>
                <div className='flex flex-col justify-between items-start text-white py-3'>
                    <div className=' flex px-2 text-sm flex-col'>
                        <div>Copyright 2023</div>
                        <p>HERBALWALA | Powered by Aditi Tech Service</p>
                    </div>
                    <ul className=' flex list-none flex-col md:flex-row'>
                        <li className=' text-sm pl-2'>FaceBook</li>
                        <li className=' text-sm pl-2'>Instagram</li>
                        <li className=' text-sm pl-2'>Treads</li>
                        <li className=' text-sm pl-2'>Email</li>
                    </ul>
                </div>
            </div>
            <div className=' w-full bg-green-900 text-white flex justify-center p-1 md:flex-row flex-col items-start md:items-center '>
                <div className=' px-3'>We facilitate your payments through trusted gateways!</div>
                <ul className='px-3 list-none flex md:items-center items-start flex-col md:flex-row'>
                    <li className=' px-2'>Visa</li>
                    <li className=' px-2'>Master Card</li>
                    <li className=' px-2'>RuPay</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer