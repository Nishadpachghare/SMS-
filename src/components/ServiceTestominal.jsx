import React from 'react'

function ServiceTestominal() {
  return (
    <div className='flex flex-col items-center justify-center mt-10 mb-10 h-[175vh]'>
      <h1 className='text-[55px] font-semibold pt-55'> Testimonials</h1>
      <img src="testominal.png" alt="testominal"  className='pt-10'/>
      <div className='flex flex-col items-center justify-center  pt-20'>
       <h1 className='text-[55px] font-semibold  flex items-center '> Ready to Simplify Your Society 
        <br /> Management</h1>
         <button type="button" onClick={() => window.location.href ='/contact'} className=" p-2 rounded-full border-[2px] bg-[black] text-white text-base hover:bg-[white] hover:text-black w-35">Book-now!</button>
       </div>
    </div>
  )
}

export default ServiceTestominal
