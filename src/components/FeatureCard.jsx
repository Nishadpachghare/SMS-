import React from 'react'

function FeatureCard({ image, title, content }) {
  return (<>
 <div className='w-[90vw] max-w-[250px] h-[235px] bg-white rounded-2xl shadow-md p-1 sm:w-[250px] sm:h-[230px]' >
  <div className='pt-5 flex flex-col items-start sm:items-start'>
   <img src={image} alt="" className='w-[25%] h-[25%] pl-4' /> 
  <h1 className='text-black font-semibold text-lg sm:text-2xl pt-4 pl-3 pr-6'>{title}</h1>
  <p className='text-black-600 font-light pt-2 pl-3 text-sm sm:text-base'>{content}</p>
  </div>
   </div>
</>
  )
}

export default FeatureCard
