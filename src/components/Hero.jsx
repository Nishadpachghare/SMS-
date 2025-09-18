import React from 'react'

function Hero() {
  return (
    <div className='flex justify-between p-10 h-[85vh]'>
      <div className='flex justify-center items-center flex-col w-1/2'>
        <h1 className='text-[50px] font-semibold px-15'>Manage Your Society Smarter – Bills, Visitors, Bookings & More in One App!</h1>
        <p className='pr-15 pt-5'>Manage your society with ease – from maintenance to security, all in one place.</p>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <img src="https://res.cloudinary.com/dk0ehzodv/image/upload/v1758006642/hero-section_pupsvb.png" alt="hero section" />
      </div>
    </div>
  )
}

export default Hero
