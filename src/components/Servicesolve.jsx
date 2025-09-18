import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Servicesolve() {


  return (
    

  <div className='h-[100%] pt-10 flex justify-center items-center gap-5 flex-col'>
     <h1 className='text-[22px] font-semibold w-[50%] flex justify-center items-center text-center'>Who We Serve <br />
(Role-based Problem Solving)</h1>
  
      <div className='flex justify-evenly items-center gap-10 pt-10 flex-wrap w-[70%]'>
        <div><Card head={" For Residents"} content={"No more changing admin for bills or parking slots.Easily raise complaints,vote in polls,and pre-apporove guest."} image={"/For resitance.png"} button={"Learn more"} visit={"/residence#Residents"}/></div>

        <div><Card head={"For Security Guards"} content={"Maintain digital vistor records with QR- scan. Verify residents, log incidents, and improve gate security."} image={"/For-2.png"} button={"Learn more"} visit={"/residence#Security-guards"}/></div>

        <div><Card head={"For Society Admins"} content={"Manage flats, staff, complaints, and events with ease. Track payments, attendance, and send mass notices in clicks."} image={"/For-3.png"} button={"Learn more"} visit={"/apartment#Society-admin-tools"}/></div>

          <div><Card head={"For Super Admins"} content={"Handle multiple societies from a single dashboard.Monitor financial health, approve vendors, and create audit logs."} image={"/For-4 .png"} button={"Learn more"} visit={"/apartment#Super-Admin"}/></div>
          
      </div>
      </div>
      
  )
}

export default Servicesolve

