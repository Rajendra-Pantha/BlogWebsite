import React from 'react'
import blogsdata from './data/Blog.json'
import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";
const Sidebar = () => {
  return (
    <div className=' pt-6  pb-4 pr-6'>
        <h2 className='font-bold text-2xl pb-4'>Latest Blogs</h2>
        {
            blogsdata.slice(0,5).map((title,i)=><div className='border-b-2 border-gray-400  border-spacing-2' key={i}><p className='text-justify pb-4 font-bold pt-4' >{title.title}</p>
           <Link to="#" className="text-md font-bold pb-2 text-gray-600 ">Read More <Icon className="text-gray-600 inline text-lg font-semibold" icon="carbon:arrow-right"/></Link>
    
            </div>
            )
        }

    </div>
  )
}

export default Sidebar