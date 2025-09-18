import React from 'react'
import FeatureCard from './FeatureCard'
import { Link } from 'react-router-dom'
function Commiteeresidence() {
  return (<> 
        <div className='h-[100vh] pt-40'>
       <div className='flex flex-col  '>
        <h1 className=' flex justify-center text-center w-[100%] text-[50px] font-semibold px-15'>Resident Experience</h1>
    
            </div>
  <div className='flex justify-start items-center gap-15 pt-20 pl-40 flex-wrap h-[70%]'>
    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/Flat'> <FeatureCard image={"bill.png"} title={"Flat Dashboard"} content={"The resident dashboard offering easy access to bills, visitor logs, event notifications, and parking requests."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Bill'><FeatureCard image={"Payment gateway integration.png"} title={"Bill Payment History"} content={"Residents view detailed payment histories with downloadable receipts."}/></Link> </div>


    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Vistor' ><FeatureCard image={"vistior.png"} title={" Visitor Log Access"} content={"Residents register/pre-approve visitors, generating QR codes for gate entry."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Rise'><FeatureCard image={"staff.png"} title={"Raise a Complaint"} content={"Residents submit complaints with photos via the app, tracking status in real-time."}/></Link> </div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Poll'><FeatureCard image={"bill.png"} title={"Polls and Surveys"} content={"Residents vote in polls (e.g., Holi event planning) anonymously via the app"}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Event1'><FeatureCard image={"vistior.png"} title={"Event Notifications"} content={"Residents receive push notifications for events and view invitations."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Parking'><FeatureCard image={"real time uptades.png"} title={"Parking Management"} content={"Parking disputes are common in Indian societies."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Rule'><FeatureCard image={"voting.png"} title={"Society Rules and Documents"} content={"Residents access/download society rules, guidelines, and meeting minutes via the app."}/></Link></div>
    

    </div>
      </div>
    </>
  )
}

export default Commiteeresidence
