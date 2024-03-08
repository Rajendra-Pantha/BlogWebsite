import React from 'react'

const ButtonBlogPage = ({number,currentPage,setCurrentPage}) => {
  return (
    <div>
        <button
            className={`px-6 py-2 rounded border-2   shadow-lg ${currentPage===number?'border-gray-700':'border-gray-200'}`} 
            onClick={() => setCurrentPage(number)}
            
          >
            {number}
          </button>
    </div>
  )
}

export default ButtonBlogPage