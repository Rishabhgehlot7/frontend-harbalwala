import React from 'react'
import Image from '../images/IMG-20240216-WA0006.jpg'
const ContactComponent = () => {
  return (
    <div className=' w-screen h-auto bg-gray-50'>
      <div className=' p-6'>
        <h2 className=' text-3xl p-3 font-medium text-center'>Contact Us</h2>
        <div className='flex justify-center'>
          <h2 className='text-center w-32 h-1 bg-black'></h2>
        </div>
        <div className='flex md:flex-row flex-col gap-3 justify-evenly pt-9'>
          <div className=' max-w-96 shadow-lg rounded-lg min-h-96 bg-white'>
            <h2 className=' text-3xl text-green-500 p-3 font-medium '>Location</h2>
            <p className=' p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quam doloribus, asperiores veniam vitae distinctio quo maiores modi omnis quis minima, enim nesciunt fugiat officia. Ullam.</p>
            <div className=' font-bold p-3'>+91-998875423</div>
            <img src={Image} alt="" className='p-3 rounded-lg' />
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7150.368132508878!2d73.05224315470592!3d26.35290792056973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394192963a8717c1%3A0xf61f2bc297719922!2sDhana%20Bera%20Bhanu%20Nagar%2C%20Rajasthan%20342304!5e0!3m2!1sen!2sin!4v1709103306915!5m2!1sen!2sin"
            // width="70%"
            className=' rounded-lg md:w-[70%] w-full'
            // height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent