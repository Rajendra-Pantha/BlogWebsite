import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <div className="py-40 px-4 bg-black text-center">
    <p className="text-white  text-5xl font-bold pb-5">
      About Us
    </p>
    </div>
    <div className='flex w-screen h-screen'>
      <div className='w-[45%] flex justify-center items-center'>
     <div>
       <h1 className='text-center font-bold text-4xl text-yellow-600 mb-2'>This is about us</h1>
      <p className='text-lg font-semibold text-justify p-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, harum veniam! Distinctio ipsam debitis facilis. Dolorum a aliquam quos quam repudiandae dolorem voluptate, maiores minus autem quaerat beatae error quo!</p>
      <div className='flex justify-center'>
      <button className=' text-lg font-bold text-center px-4 py-2 bg-yellow-600 text-white rounded shadow-md hover:bg-yellow-500'>Read More</button></div>
      </div>
      </div>
      <div className='w-[55%] flex justify-center items-center '>
        <img className=' w-[60%] h-[60%] ' src='https://th.bing.com/th/id/OIP.sFX3vuL8IxCkdAFf2SnH4QHaFl?rs=1&pid=ImgDetMain'/>
      </div>
      
    </div>
    </div>
  )
}

export default About