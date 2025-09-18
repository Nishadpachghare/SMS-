import React from 'react'
import AboutCard from './AboutCard'
import { Link } from 'react-router-dom'
function Residence() {
  return (   <>
   <div className= 'h-[100%] pt-15 flex justify-center items-center gap-5 flex-col'>
  <h1 className='flex justify-center  font-semibold text-4xl '>Admin vs Resident Views</h1>

    <div className='flex justify-between  gap-5 p-10'>
    
       <div className='w-1/2 flex justify-center items-center '>
        <img src="residence admin.png" alt="hero section"  className='h-100 mask-radial-farthest-corner'/>
      </div>
      <div className='w-1/2 flex justify-center items-center '>
        <img src="Residence viwes.png" alt="hero section"  className='h-100 mask-radial-farthest-corner'/>
      </div>
       </div>
      <p className='w-[70%] flex justify-center text-center text-xl text-gray-600 '>Society Connect offers tailored dashboards to streamline society management. Super Admins oversee multiple societies, viewing consolidated data and approving registrations. Society Admins manage a single society, handling resident onboarding and event scheduling. Residents access bills, visitor logs, and polls via a user-friendly app, while Security Guards log entries and report incidents. With cloud-based access and 2FA, every role enjoys secure, intuitive navigation, making tasks like organizing a Republic Day event or tracking dues effortless.</p>
      

       <div className='flex justify-start items-center gap-15 pt-20 pl-25 flex-wrap w-[75%] h-[55%]'>
          <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/residence#Super-Addmin'> <AboutCard image={"roll and based 2.png"} title={"Super Admin"} content={"Manage multiple societies, generate cross-society reports."}/></Link></div>

       <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/residence#Soocitey-Admin'><AboutCard image={"socitey admin.png"} title={"Society Admin"} content={"Add residents, approve complaints, manage parking."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/residence#Residents'><AboutCard image={"Residence.png"} title={"Resident"} content={" Pay bills, pre-approve visitors, access documents."}/></Link></div> 

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
         <Link to='/residence#Security-guards'><AboutCard image={"guard.png"} title={"Security Guard"} content={" Log visitors, verify IDs, send alerts."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
      <Link to='/residence#cloud-acccess'><AboutCard image={"cloud based.png"} title={"Cloud Access"} content={"Use from any device with mobile app support."}/></Link></div>

     <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/residence#Secure-logins'><AboutCard image={"secure login.png"} title={"Secure Logins"} content={"2FA ensures data protection."}/></Link></div>

        <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/residence#user-friendly'><AboutCard image={"user friendly.png"} title={"User-Friendly"} content={"Intuitive interfaces for all ages."}/></Link></div>

   </div>
    </div>
    </>
  )
}

export default Residence
