import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-gray-50 w-full h-auto'>
      <div class="container mx-auto md:p-4 py-4">
        <h2 className=' text-3xl p-3 font-medium text-center'>About Us</h2>
        <div className='flex justify-center'>
          <h2 className='text-center w-32 h-1 bg-black'></h2>
        </div>
        <div className='flex gap-1 justify-between md:flex-row flex-col items-center pt-5'>
          <div className=' max-w-[80%]'>
            <div className=' w-[100%] md:w-[500px] h-auto md:p-10 p-2 rounded-md shadow-lg md:absolute bg-white md:translate-x-[50%] md:translate-y-4 flex flex-col items-center '>
              <h3 className=' p-3 text-4xl'>How we started</h3>
              <p className='p-3 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, repellat laudantium. Earum deleniti magni perspiciatis odio nesciunt eius quae provident quis unde, debitis doloremque repudiandae ex soluta nam consequuntur ipsum quidem voluptatum ipsa labore recusandae. Sit exercitationem laboriosam non ipsum vel? Praesentium commodi repellendus neque aliquid dolores doloribus voluptatum cupiditate? Facere eveniet doloremque est voluptatum!</p>
            </div>
            <div className=' md:p-24 md:pt-56 p-1 m-1'>
              <img className=' rounded-lg' src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?cs=srgb&dl=pexels-fauxels-3184357.jpg&fm=jpg" alt="" />
            </div>
          </div>
          <div className=' md:w-80 w-[80%]  shadow-lg rounded-lg md:p-4 p-1'>
            <h3 className=' text-3xl p-2'>We are trusted Company</h3>
            <p className=' text-xs p-2'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam labore debitis dolores consequatur odit ipsum quo quidem voluptate eveniet? Debitis nihil similique fugit culpa. Consequuntur aperiam, iusto aliquam voluptatem enim fugit molestiae reiciendis ut veritatis. amet consectetur adipisicing elit. Voluptate, enim dignissimos atque nostrum sequi sunt id, porro suscipit cum aperiam animi excepturi cupiditate.</p>
            <h4 className='p-2 text-xl'>VALUES:</h4>
            <p className=' text-xs p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, distinctio provident magnam maxime dicta sunt harum. Odit, adipisci. Sapiente maiores animi deserunt.</p>
            <ul className='list-disc pl-10'>
              <li className='text-xs p-1'>QUALITY</li>
              <li className='text-xs p-1'>QUALITY</li>
              <li className='text-xs p-1'>QUALITY</li>
              <li className='text-xs p-1'>QUALITY</li>
              <li className='text-xs p-1'>QUALITY</li>
              <li className='text-xs p-1'>QUALITY</li>
              <li className='text-xs p-1'>QUALITY</li>
              <li className='text-xs p-1'>QUALITY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutUs