import React from 'react'

const BillingCard = () => {
    return (
        <div className=' w-screen h-auto p-4'>
            <div className=' max-w-screen-xl py-9 p-3 shadow-xl m-auto'>
                <form className='flex md:flex-row flex-col'>
                    <div className=' md:w-[50%] w-full'>
                        <h2 className=' text-2xl p-3'>Billing Details</h2>
                        <div className=' p-3 flex justify-evenly gap-4 md:flex-row flex-col'>
                            <div className=' flex flex-col'>
                                <label htmlFor="" className=' py-1'>First Name*</label>
                                <input className=' border-[1px] rounded-md p-1 border-black' type="text" />
                            </div>
                            <div className=' flex flex-col'>
                                <label htmlFor="" className=' py-1'>Last Name*</label>
                                <input className=' border-[1px] rounded-md p-1 border-black' type="text" />
                            </div>
                        </div>
                        <div className=' p-3 flex justify-evenly gap-4  md:flex-row flex-col'>
                            <div className=' flex flex-col'>
                                <label htmlFor="" className=' py-1'>Phone*</label>
                                <input className=' border-[1px] rounded-md p-1 border-black' type="number" placeholder='+91-73000XXXXX' />
                            </div>
                            <div className=' flex flex-col'>
                                <label htmlFor="" className=' py-1'> Email Address*</label>
                                <input className=' border-[1px] rounded-md p-1 border-black' type="email" placeholder='example@gmail.com' />
                            </div>
                        </div>
                        <div className=' p-3 flex justify-evenly gap-4  md:flex-row flex-col'>
                            <div className=' flex flex-col md:w-[80%]'>
                                <label htmlFor="" className=' py-1'> Street Address*</label>
                                <input className=' w-full my-1 border-[1px] rounded-md p-1 border-black' type="text" placeholder='House No./Appartment No./ Plot No.' />
                                <input className=' w-full my-1 border-[1px] rounded-md p-1 border-black' type="text" placeholder='Street Name/ Locality' />
                            </div>
                        </div>
                        <div className=' p-3 flex justify-evenly gap-4  md:flex-row flex-col'>
                            <div className=' flex flex-col'>
                                <label htmlFor="" className=' py-1'>City*</label>
                                <input className=' border-[1px] rounded-md p-1 border-black' type="text" placeholder='jodhpur' />
                            </div>
                            <div className=' flex flex-col'>
                                <label htmlFor="" className=' py-1'>State*</label>
                                <input className=' border-[1px] rounded-md p-1 border-black' type="text" placeholder='Rajasthan' />
                            </div>
                        </div>
                        <div className=' p-3 flex justify-evenly gap-4  md:flex-row flex-col'>
                            <div className=' flex flex-col'>
                                <label htmlFor="" className=' py-1'>Pincode*</label>
                                <input className=' border-[1px] rounded-md p-1 border-black' type="text" placeholder='5000XXX' />
                            </div>
                            <div className=' flex flex-col'>
                                <label htmlFor="" className=' py-1'>Country*</label>
                                <input className=' border-[1px] rounded-md p-1 border-black' type="text" placeholder='India' />
                            </div>
                        </div>
                        <h2 className=' text-2xl p-3'>Billing Details</h2>
                        <div className=' flex gap-2 items-start'>
                            <input type="checkbox" name="" id="" className=' m-3' />
                            <div className=' flex flex-col gap-3'>
                                <h4>Pay Buy RazorPay Cards, NetBanking, Wallet & UPI</h4>
                                <p className=' text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione molestias aperiam sit possimus esse nihil error laboriosam fugit harum, voluptatem aspernatur nobis quidem similique deserunt.</p>
                            </div>
                        </div>
                    </div>
                    <div className=' py-3 flex flex-col justify-between md:w-[50%]'>
                        <div>
                            <div className=' flex gap-2 items-start'>
                                <input type="checkbox" name="" id="" className=' m-3' />
                                <div className=' flex flex-col gap-3'>
                                    <h4 className=' font-medium text-xl'>Ship to a Different AddressI</h4>
                                </div>
                            </div>
                            <div className=' p-3 flex justify-evenly gap-4'>
                                <div className=' flex flex-col w-[80%]'>
                                    <label htmlFor="" className=' py-1'>Order Notes (Optional)</label>
                                    <input className=' w-full my-1 border-[1px] rounded-md p-1 border-black' type="text" placeholder='Order Notes (Optional)' />
                                </div>
                            </div>
                        </div>
                        <div className='flex md:justify-end md:items-end md:px-7 justify-center py-6 md:py-0'>
                            <button type='submit' className=' px-8 py-2 bg-green-700 rounded-lg text-white font-medium'>Place Order</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BillingCard