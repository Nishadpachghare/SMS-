import React from 'react'
import Commiteeinner from './Commiteeinner'

function CommiteeFinancial() {
  return (
    <div>
     
    <div className="gap-2 flex p-2 m-2 pl-12 pt-10">
  <img src="bill.png" alt="logo" className="w-12 h-[55px] pt-2" />
  <h1 className="text-5xl font-semibold">Financial Dashboard</h1>
</div>

<div className="pl-14 flex">
  <p className="w-[810px] gap-2 pt-3 pr-8 text-[19px]">
    Managing society finances in India, from festival budgets to maintenance dues, is complex, with disputes over Diwali funds or monsoon repairs common. The Society Management System (SMS) simplifies this with a real-time financial dashboard. Society Admins monitor income, expenses, and dues with easy-to-read charts, tracking everything from lift maintenance to Holi event costs. Super Admins get a consolidated view across multiple societies, perfect for large townships. The dashboard’s AI-powered analytics highlight trends, helping plan budgets or resolve payment delays. With secure access via two-factor authentication (2FA) and data encryption, SMS ensures transparency, making financial oversight a breeze for Indian societies.
  </p>

  <div className="pb-[55px]">
    <img src="comiteeherocomponent.png" alt="hero section" />
  </div>


</div>
       <Commiteeinner />
    </div>
   
  )
}

export default CommiteeFinancial
