import React from 'react'
import detailImage from '../images/detailImage.svg'
import Rectangle1 from '../images/Rectangle 62.svg'
import Rectangle2 from '../images/Rectangle 63.svg'
import Rectangle3 from '../images/Rectangle 64.svg'
import Rectangle4 from '../images/Rectangle 65.svg'
import navigate_before_black_24dp from '../images/navigate_before_black_24dp.svg'
import navigate_next_black_24dp from '../images/navigate_next_black_24dp.svg'
const ProductDetailComponent = () => {
    return (
        <div className=' w-screen h-auto m-auto flex justify-center'>
            <div className=' max-w-7xl w-[80%] bg-gray-200 py-4 flex'>
                <div className=' w-[50%]'>
                    <div>
                        <img src={detailImage} alt="" />
                    </div>
                    <div className='flex p-0 w-full justify-center'>
                        <img src={navigate_before_black_24dp} alt="" />
                        <img src={Rectangle1} alt="" className=' w-[20%]' />
                        <img src={Rectangle2} alt="" className=' w-[20%]' />
                        <img src={Rectangle3} alt="" className=' w-[20%]' />
                        <img src={Rectangle4} alt="" className=' w-[20%]' />
                        <img src={navigate_next_black_24dp} alt="" />
                    </div>
                </div>
                <div className='max-w-50%'>
                    <h2 className=' text-3xl p-1'>Herbalvala Relief Balm</h2>
                    <div>
                        <span className=' text-sm p-1 text-red-600 line-through'>₹80.00</span>
                        <span className=' text-xl p-1'>₹40.00</span>
                    </div>
                    <p className='p-1 text-sm'>Natural Pain Relief: HerbalVala Relief Balm combines a blend of potent herbs known for their analgesic and anti-inflammatory properties.</p>
                    <div>
                        <div className='flex my-3'>
                            <div className=' mx-2'>
                                <label htmlFor="">Quantity</label>
                                <div className=' border-black border-[2px] inline-block mx-1'>
                                    <button className=' bg-white w-5'>+</button>
                                    <input type="text" name="" value={1} id="" className=' w-5' />
                                    <button className=' bg-white w-5'>-</button>
                                </div>
                            </div>
                            <div className=' mx-2'>
                                <label htmlFor="">Extra</label>
                                <select name="" id="" className=' border-2 border-black mx-1'>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className=' rounded-xl px-12 font-bold py-3 bg-green-700 text-white'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailComponent