import React from 'react'

function Servicehero() {  
   return (
    <div className='flex justify-between p-10 h-[70vh]'>
      <div className='flex justify-center items-center flex-col w-1/2'>
        <h1 className='text-[50px] font-semibold px-15 pl-22 '>Our Services: Simplifying Everyday Society Management</h1>
        <p className='pl-22 pt-5 '>From managing late-night visitor entries to handling last-minute maintenance issues, society life in India comes with daily challenges. At SMS, we offer services that don’t just automate tasks — they solve real problems. Our platform is built with every society member in mind, making your day-to-day management smoother, safer, and smarter.</p>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <img src="Service hero.png" alt="hero section" />
      </div>
    </div>
  )  
}

export default Servicehero
