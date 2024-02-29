import React, { useEffect, useState } from 'react'
import Image from '../images/IMG-20240216-WA0003.jpg'
const CardContainer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Assuming mobile breakpoint is 768px
        };

        handleResize(); // Call initially to set state based on initial screen size

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures effect only runs once on component mount

    return (
        <div className=' w-screen h-auto p-4'>
            <div className=' max-w-screen-xl p-3 shadow-xl m-auto'>
                <h1 className=' text-center text-4xl font-medium'>Your Card Items</h1>
                <div className=' w-full flex justify-center py-2'>
                    <h1 className=' bg-black w-48 h-[2px] text-center'></h1>
                </div>
                <div>
                    {/* Your JSX */}
                    {isMobile ? (
                        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                            {/* Product Cards */}
                            {Array.from({ length: 6 }, (_, i) => (
                                <div key={i} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <img
                                            src={`https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60${i}`}
                                            alt="Product"
                                            className="h-80 w-72 object-cover rounded-t-xl"
                                        />
                                        <div className="px-4 py-3 w-72">
                                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                            <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                                            <div className="flex items-center justify-between">
                                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                                <div className='md:w-[75px] flex border-[2px]'>
                                                    <button className=' p-1'>+</button>
                                                    <input type="number" className=' p-1 w-10 text-center' value={5} />
                                                    <button className=' p-1'>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </section>
                    ) : (
                        <table class="md:min-w-full leading-normal my-4">
                            <thead>
                                <tr>
                                    <th
                                        class="md:px-5 py-3 border-b-2 border-gray-20 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >

                                    </th>
                                    <th
                                        class="md:px-5 py-3 border-b-2 border-gray-20 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Product
                                    </th>
                                    <th
                                        class="md:px-5 py-3 border-b-2 border-gray-20 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Price
                                    </th>
                                    <th
                                        class="md:px-5 py-3 border-b-2 border-gray-20 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        QTY
                                    </th>
                                    <th
                                        class="md:px-5 py-3 border-b-2 border-gray-20 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                <hr />
                                <Card />
                                <hr />
                                <Card />

                            </tbody>
                        </table>
                    )}
                </div>


                <section className='min-w-full flex md:justify-end p-6 text-xs justify-center'>
                    <div className=' w-[200px]'>
                        <div className='flex justify-between py-1'>
                            <td>Subtotal</td>
                            <td>Rs. 118</td>
                        </div>
                        <div className='flex justify-between py-1'>
                            <td>Shipping</td>
                            <td>Rs. 50</td>
                        </div>
                        <div className='flex justify-between py-1'>
                            <td>discount</td>
                            <td>Rs. 30</td>
                        </div>
                        <hr />
                        <div className='flex justify-between py-1'>
                            <td className=' font-bold'>Total</td>
                            <td className=' font-bold'>Rs. 138</td>
                        </div>

                    </div>
                </section>
                <p className=' p-3 text-xs'>Ruturning Customer?<span className='font-bold'> Click here to Login.</span></p>
            </div>
        </div>
    )
}

export default CardContainer



const Card = () => {
    return (
        <tr>
            <td className='class="px-5 py-5 border-b border-gray-200 bg-white text-sm"'>
                1
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                    <div class="flex w-20">
                        <img
                            class="w-full rounded-lg"
                            src={Image}
                            alt="Image"
                        />
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap text-xl">
                            Harbalwala
                        </p>
                        <button className=''>
                            Remove
                        </button>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {/* $ {cartItems.price} */}
                    Rs 52
                </p>

            </td>
            <td class="px-5 py-5 border-b  bg-white text-sm">
                <div className='md:w-[75px] flex border-[2px]'>
                    <button className=' p-1'>+</button>
                    <input type="number" className=' p-1 w-10 text-center' value={5} />
                    <button className=' p-1'>-</button>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {/* ${cartItems.price * cartItems.qty} */}
                Rs 52
            </td>
        </tr>
    )
}
