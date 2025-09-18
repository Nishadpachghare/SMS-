import React from 'react'

function Platform() {
  return (
    <div className='flex flex-col justify-center items-center pt-10 gap-5 h-[100vh]'>
      <div className='text-[40px] font-semibold w-[50%] flex justify-center items-center text-center'>A smart society platform with a community-first vision
     </div>
     <div className='w-[50%] flex justify-center items-center text-center'>SMS offers role-based dashboards for Super Admins, Society Admins, Residents, and Security Guards—bringing transparency and efficiency to every Indian community. Secure and accessible via Android/iOS with 2FA and data encryption.</div>
      <div className='flex justify-center items-center gap-20 pt-10 font-semibold w-[100%]'>
        <div>
            <img src="./platform 1.png" alt="App Dashboard" />
            <h1>App Dashboard</h1>
        </div>
        <div>
            <img src="./platform .png" alt="Vistor QR" />
            <h1>Vistor QR</h1>
        </div>
        <div>
            <img src="/platform2 .png" alt="Payment bill" />
            <h1>Payment bill </h1>
        </div>
      </div>
    </div>
  )
}

export default Platform
