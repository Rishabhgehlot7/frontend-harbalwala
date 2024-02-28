import React from 'react'
import Image from '../images/shop.png'
import { Img } from './Img'

const ShopPoster = () => {
  return (
    <div className=' w-screen h-auto bg-yellow-300 flex justify-center items-center text-5xl md:text-7xl'>
      <Img
        className="md:h-auto min-h-80 h-full object-cover rounded-bl-lg rounded-br-lg w-full"
        src={Image}
        alt={Image}
      />
      <p className='absolute w-full h-auto text-center text-white text-7xl'>Shop</p>
    </div>
  )
}

export default ShopPoster