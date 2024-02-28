import React from 'react'
import PosterImg from '../images/home.png'

const Poster = () => {
  return (
    <div className=' w-screen h-auto flex justify-center items-center'>
      <img src={PosterImg} alt="" />
    </div>
  )
}

export default Poster