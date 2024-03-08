import { useState } from "react";

import Blogcard from "./Blogcard";
import blogdata from "./data/Blog.json";
import ButtonBlogPage from "./ButtonBlogPage";
import Sidebar from "./Sidebar";
import BlogDetails from "./BlogDetails";
const Blogpage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);
  let numberOfPage = Math.ceil(blogdata.length / cardsPerPage);
  const pagenumber = [];
  for (let i = 1; i <= numberOfPage; i++) {
    pagenumber.push(i);
  }


  return (
    <div>
      
      <div className="flex flex-col md:flex-row gap-12">
        <Blogcard
          data={blogdata}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
        />
        <Sidebar/>
      </div>
      <div className="flex gap-4 m-2 justify-center ">
        <button disabled={currentPage===1} onClick={()=>setCurrentPage(currentPage-1)} className="px-6 py-2 rounded  shadow-lg ">prev</button>
        {pagenumber.map((number, i) => (
          <ButtonBlogPage key={i} number={number} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        ))}
         <button disabled={currentPage===numberOfPage} onClick={()=>setCurrentPage(currentPage+1)} className="px-6 py-2 rounded border-2 shadow-lg ">next</button>
      </div>
      
    </div>
  );
};

export default Blogpage;
