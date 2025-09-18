import React from 'react'

function Commiteetestominal() {
  return (
    <div className='flex flex-col w-full items-center justify-center mt-10 mb-10 h-[155vh]'>
      <h1 className="text-[55px] font-semibold pt-12">Testimonials</h1>
      
      <img 
        src="testominal.png" 
        alt="testominal"  
        className="pt-10"
      />
      
      <div className="flex flex-col items-center justify-center pt-20 space-y-6">
        <h1 className="text-[40px] md:text-[55px] font-semibold text-center">
          Ready to Simplify Your Society 
          <br /> Management?
        </h1>
        
        <button 
          type="button" 
          className="px-6 py-3 rounded-full border-2 bg-black text-white text-lg hover:bg-white hover:text-black transition-all duration-300"
        >
          Book Now!
        </button>
      </div>
    </div>
  )
}

export default Commiteetestominal
