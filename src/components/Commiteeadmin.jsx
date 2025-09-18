import React from 'react'
import FeatureCard from './FeatureCard'
import { Link } from 'react-router-dom'
function Commiteeadmin() {
  return (<> 

       <div className='flex flex-col'>
        <h1 className=' flex justify-center text-center w-[100%] text-[50px] font-semibold px-15'>Committee & Admin</h1>
    
            </div>
  <div className='flex justify-start items-center gap-15 pt-20 pl-40 flex-wrap w-full h-[70%]'>

        <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/Financial'><FeatureCard image={"bill.png"} title={"Financial Dashboard"} content={"Track all society money—income, expenses, and dues—with easy charts."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Ledger'><FeatureCard image={"Audit.png"} title={"Ledger & Audit Logs"} content={"Every rupee tracked maintenance, festival, or vendor payments."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Flatwise'> <FeatureCard image={"Flatwise due.png"} title={"Flatwise Due Summary"} content={"See dues per flat in one click. Send auto reminders by SMS or app."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Comunication'><FeatureCard image={"staff.png"} title={"Communication Logs"} content={"Whether it’s a Holi invite or a complaint, nothing gets missed."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Stafff' ><FeatureCard image={"salary.png"} title={"Staff Salary Export"} content={"Export payment slips with hours, deductions, and total pay."}/></Link></div>

       <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Superaadmmin'><FeatureCard image={"super oversite.png"} title={"Super Admin Overview"} content={"Control everything in one place—societies, residents, payments, and more."}/></Link></div>

    <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Sociteeye'><FeatureCard image={"socitey tool.png"} title={"Society Admin Tools"} content={"All from the app. No more chaos during festivals or AGMs."}/></Link></div>

       <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Vendor'><FeatureCard image={"voting.png"} title={"Vendor Management"} content={"Store all vendor details—electricians, plumbers, etc."}/></Link></div>
    

    </div>
    </>
  )
}

export default Commiteeadmin
