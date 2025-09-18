import React from 'react'

function AboutCard({ image, title, content }) {
  return (<>
 <div className='w-[205px] h-[200px] bg-white rounded-2xl shadow-md p-1 '>
    <div className='pb-2'>
     <img src={image} alt="" className='w-[25%] h-[25%] pt-2 pl-4' /> 
    <h1 className='text-black font-semibold text-2xl pt-2 pl-3'>{title}</h1>
    <p className='text-black-600  font-light pt-1 pl-3  '>{content}</p>
    </div>
   </div>

</>
  )
}

export default AboutCard
