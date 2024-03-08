import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import currentCards from './data/Blog.json'
import { Icon } from '@iconify/react'
import './Home.css'
const Home = () => {
  return (
   <div className='mb-4 scrollbarhome'>
    <Banner/>
    {/* racent uploads */}
    <div className=' mt-4'>
      <p className='text-3xl font-bold  mt-4 ml-8'>Recent Uploads</p>
      <div className='w-[95%] h-[1.5px] bg-slate-300 ml-8 mt-1 mb-4'/>
    <div className='flex  overflow-x-auto  overflow-y-hidden gap-4 h-56 scrollprt'>
    {currentCards.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className=' p-5 rounded min-w-[20%] ' key={blog.id}>
          <img className="rounded cursor-pointer" src={blog.image} />
          <p className="font-bold mb-2">{blog.title}</p>
          <div className="flex gap-1">
      
            <Icon
            className="text-lg leading-3"
              icon="iconamoon:profile-fill"
              style={{ color: "gray" }}
            />
            <p className="text-gray-500 leading-4 mb-2">{blog.author}</p>
          </div>
          <p className="text-gray-500 text-sm">published : {blog.published_date}</p>
        </Link>
      ))}
    </div>
   </div>
    {/* popular uploads */}
   <div>
   <div className=' mt-8'>
      <p className='text-3xl font-bold  mt-4 ml-8'>Popular Uploads</p>
      <div className='w-[95%] h-[1.5px] bg-slate-300 ml-8 mt-1 mb-4'/>
    <div className='flex  overflow-x-auto  overflow-y-hidden gap-4 h-56 scrollprt'>
    {currentCards.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className=' p-5 rounded min-w-[20%] ' key={blog.id}>
          <img className="rounded cursor-pointer" src={blog.image} />
          <p className="font-bold mb-2">{blog.title}</p>
          <div className="flex gap-1">
      
            <Icon
            className="text-lg leading-3"
              icon="iconamoon:profile-fill"
              style={{ color: "gray" }}
            />
            <p className="text-gray-500 leading-4 mb-2">{blog.author}</p>
          </div>
          <p className="text-gray-500 text-sm">published : {blog.published_date}</p>
        </Link>
      ))}
    </div>
   </div>
   </div>
   </div>
  )
}

export default Home