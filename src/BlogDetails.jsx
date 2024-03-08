import React from 'react'
import { useParams } from 'react-router-dom'
import db from './data/Blog.json'
import { useNavigate } from 'react-router-dom'
const BlogDetails = () => {
  
   const {id}=useParams()
  
   const blogpost = db.find(data=>data.id.toString()===id)
  const navigate = useNavigate()
   const handleBack=()=>{
    navigate(-1)
   }

   if(blogpost){
    return (
        <div>
          
        <div className='mt-14 bg-black p-24 text-white text-center'>
          <h1 className='text-3xl font-bold mx-24 pb-2'>{blogpost.title}</h1>
          <p className='font-semibold'><span>By {blogpost.author}</span> . <span>{blogpost.category}</span></p>
          <p>{blogpost.published_date}</p>


          
        </div>
        <button onClick={handleBack} className='px-8 py-2 my-4 ml-8 bg-yellow-600 text-white rounded font-bold '>back</button>
        <img className='md:mx-36 md:w-[80%] mx-4 h-96 rounded my-4' src={blogpost.image} />
        <p className='md:mx-36 text-justify mx-4 mt-14 font-medium text-lg'>{blogpost.content}</p>

        <div className='flex justify-between mx-8 mb-8'>
          <button className='px-8 py-2 bg-yellow-600 text-white rounded font-bold '>prev</button>
          <button className='px-8 py-2 bg-yellow-600 text-white rounded font-bold'>next</button>
        </div>
        </div>
      )
   }else{
    return(
        <div className='mt-14'>data not found</div>
    )
   }
  
}

export default BlogDetails