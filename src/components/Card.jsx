import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({head, content, image, button, color, visit}) {
  const navigate = useNavigate();
  return (
  
    <div className="w-[400px] h-[100px]  bg-linear-to-l from-stone-600 via-stone-900 to-stone-950 rounded-2xl shadow-md p-6 w-[500px] h-[300px]">
        <h1 className='text-white font-semibold text-2xl '>{head}</h1>
        <div className='flex justify-between items-center '>
          <p className='text-white  font-light pt-1 pr-10 text-xl'>{content}</p>
          <img src={image} alt="" className='w-[78px] m-3' />  </div>
          <div className='pt-15 '>
          <button onClick={() => navigate(visit)} type="button" className="p-2 rounded border-[2px] bg-[black] text-white text-base hover:bg-[white] hover:text-black w-30 h-10 ">{button}</button>
          </div>
        
    </div>
  )
}

export default Card
