import React from 'react'
import AboutCard from './AboutCard'
import { Link } from 'react-router-dom'

function Apartment() {
   return (<>
      <div className='h-[100%] pt-15 flex justify-center items-center gap-5 flex-col'>
    <div className="flex justify-center items-center pt-10 font-semibold text-4xl">
        <h1> Apartment vs Villa Workflow</h1>
    </div>
    <p className='w-[70%] flex justify-center items-center text-center text-gray-600 '>Indian societies vary widely—high-rise apartments in Mumbai face different challenges than sprawling villa communities in Bengaluru. SMS is tailored for both. Apartments benefit from centralized automation, like flat-wise billing and shared facility bookings, while villas get personalized maintenance plans and private visitor logs. Super Admins manage multiple societies, adding or deleting as needed, while Society Admins handle local tasks like parking assignments. Push notifications keep residents updated, ensuring no one misses a monsoon repair notice or a festival event.</p>


    <div className='flex justify-start items-center gap-15 pt-20 pl-25 flex-wrap w-[75%] h-[55%]'>
        <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/apartment#Apartment'> <AboutCard image={"all in one (2).png"} title={"Apartments"} content={"Automates flat allocation, billing, and amenity bookings."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/apartment#Villas'> <AboutCard image={"villa 1.png"} title={"Villas"} content={"Supports individualized plans and staff coordination."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/apartment#Super-Admin'> <AboutCard image={"roll and based 2.png"} title={"Super Admin Control"} content={" Add/delete societies, assign admins."}/></Link></div>

      <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/apartment#Society-admin-tools'> <AboutCard image={"roll and based 2.png"} title={"Society Admin Toolscure"} content={"2Manage residents, parking, and events."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/apartment#Resident-Access'> <AboutCard image={"roll and based 2.png"} title={"Resident Access"} content={"View rules, lodge complaints via app."}/></Link></div>

     <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/apartment#Real-time'><AboutCard image={"real time uptades.png"} title={"Real-Time Updates"} content={"Push notifications for notices and alerts."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/apartment#Security'><AboutCard image={"secure 2.png"} title={"Security Focus"} content={"QR-based visitor logs for both setups."}/></Link></div>

    
  
    </div>
    </div>
    </>
  )
}

export default Apartment
