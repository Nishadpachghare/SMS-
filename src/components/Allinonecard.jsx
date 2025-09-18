import React from 'react'

function Allinonecard( {image,title,content}) {
  return (<>
 <div className='w-[550px] h-[455px] bg-white rounded-2xl shadow-md p-1 ' >
    <div className='pt-5'>
     <img src={image} alt="" className='w-[85%] h-[55%] pl-15' /> 
    <h1 className='text-black font-semibold text-3xl pt-4 pl-3 pr-6'>{title}</h1>
    <p className='text-black-600  text-xl font-light pt-2 pl-3 '>{content}</p>
    </div>
   </div>
</>
  )
}

export default Allinonecard
