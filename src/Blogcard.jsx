import React from "react";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Blogcard = ({data,cardsPerPage,currentPage}) => {
  
  
  // Get current cards based on pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <div className="mt-4 mx-8 grid grid-cols-2 md:grid-cols-3 gap-8">

      {currentCards.map((blog) => (
        <Link to={`/blogs/${blog.id}`} className=' p-5 rounded ' key={blog.id}>
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
  );
};

export default Blogcard;
