import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className="py-40 px-4 bg-black text-center">
    <p className="text-white  text-5xl font-bold pb-5">
     Contact Us
    </p>
    </div>
    <div className=' mt-36 '>
      <h1 className='text-center font-extrabold text-yellow-600 text-5xl m-4'>
        Contact Form
      </h1>
      <div className='flex justify-center items-center '>
        {/* //left */}
        <div className='bg-gray-200 mt-8 mb-8 ml-8 h-[35em] flex items-center'>
          <div>
          <h3 className='text-center font-bold text-2xl'>Contact Us</h3>
          <form className='m-6 flex flex-col gap-8'>
            {/* full name and email  */}
              <div className='flex gap-10'>
                {/* full name  */}
                <div className='flex flex-col gap-2'>
                <label className='font-semibold '>Full Name</label>
                <input className='h-10 p-2 placeholder:p-2 rounded' type='text' name='fname' placeholder='Enter your full name' />
                </div>
                {/* email */}
                <div className='flex flex-col gap-2'>
                <label className='font-semibold '>Email</label>
                <input className='h-10 p-2 placeholder:p-2 rounded' type='text' name='email' placeholder='Enter your email' />
                </div>
              </div>
              {/* subject */}
              <div className='flex flex-col gap-2'>
                <label className='font-semibold '>Subject</label>
               <input className='w-full h-10 rounded  p-2 placeholder:p-2' type='text' name='subject' placeholder='Enter subject here'/>
              </div>
              {/* message */}
              <div className='flex flex-col gap-2'>
                <label className='font-semibold '>Message</label>
                <textarea className='w-full h-24 p-2 placeholder:p-2 rounded' name='message' placeholder='Enter message...'/>
              </div>
              <div >
              <button className='px-4 py-2 rounded bg-yellow-600 shadow-md text-white hover:bg-yellow-500' type='submit'>Send Message</button>
         </div> 
         </form>
         </div>
        </div>
       {/* { right} */}
        <div className='h-[35em] w-[25em]'>
         <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452792.9243489243!2d83.08932298060469!3d27.548705253009164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996995e4b5965b3%3A0xecd49d422ee27d46!2sRupandehi!5e0!3m2!1sen!2snp!4v1710151236116!5m2!1sen!2snp" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact