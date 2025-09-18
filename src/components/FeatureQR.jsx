import React from 'react'

function FeatureQR() {
  return (
  <>
<div className="min-h-screen pb-20">
<div className="p-10 pl-20">
    <div className="flex gap-2">
        <img src="vistior.png" alt="logo" />
    <h1 className="text-5xl font-semibold">Visitor Log Book (with QR)</h1>
    </div>
    <p className="w-[810px] pt-3">Visitor management during Indian festivals like Diwali can be chaotic. SMS’s digital logbook replaces paper records, letting Residents and Society Admins pre-approve visitors with QR codes. Security Guards scan codes for instant verification, logging details (name, time, purpose). Super Admins access visitor data across societies, ensuring security during high-traffic events.
</p>
</div>
 

<div className="relative  min-h-[300vh] ">

<div className="absolute float-left top-2 right-20 w-[500px] h-[500px] bg-white  shadow-lg rounded-3xl ">
 <img src="QR-1.png" alt="logo" className="w-115 pl-10 h-60 pt-5"/>
<h1 className="pl-5 text-2xl font-semibold">QR-Based Entry</h1>
<p className="text-gray-600 text-xl pl-5">QR-Based Entry is a modern and secure visitor management system that enables fast and contactless verification at society gates. Residents can pre-approve guests by generating unique, time-bound QR codes, which are scanned upon arrival by security personnel.</p>
</div>


<div className="absolute float-left top-75 left-20 w-[500px] h-[500px] bg-white shadow-lg rounded-3xl ">
 <img src="QR-2.png" alt="logo" className="w-115 pl-10 h-60 pt-5"/>
<h1 className="pl-5 text-2xl font-semibold">Resident Control</h1>
<p className="text-gray-600 text-xl pl-5 pr-5 ">Resident Control is a convenient feature that allows residents to pre-approve their guests directly through the society’s mobile app, ensuring a smooth and hassle-free entry process.</p>
</div>


<div className="absolute float-left top-160 right-20 w-[500px] h-[500px] bg-white shadow-lg rounded-3xl ">
 <img src="QR-3.png" alt="logo" className="w-115 pl-10 h-60 pt-5"/>
<h1 className="pl-5 text-2xl font-semibold">Guard Tools</h1>
<p className="text-gray-600 text-xl pl-5 pr-5 ">  Using the system, guards can record visitor details, verify their authorization, and maintain a time-stamped digital entry for each visit.</p>
</div>



<div className="absolute float-left top-245 left-20 w-[500px] h-[500px] bg-white shadow-lg rounded-3xl ">
 <img src="QR-4.png" alt="logo" className="w-115 pl-10 h-60 pt-5"/>
<h1 className="pl-5 text-2xl font-semibold">Secure Logs</h1>
<p className="text-gray-600 text-xl pl-5 pr-5">Secure Logs is a robust security feature that ensures all visitor data is stored in an encrypted format, protecting it from unauthorized access.</p>
</div>



<div className="absolute float-left top-330 right-20 w-[500px] h-[500px] bg-white shadow-lg rounded-3xl ">
 <img src="QR-5.png" alt="logo" className="w-115 pl-10 h-60 pt-5"/>
<h1 className="pl-5 text-2xl font-semibold">Real-Time Alerts</h1>
<p className="text-gray-600 text-xl pl-5 pr-5">Real-Time Alerts is an instant notification feature that keeps residents informed the moment their guests or deliveries arrive at the society gate.</p>
</div>


<div className="absolute float-left top-420 left-20 w-[500px] h-[500px] bg-white shadow-lg rounded-3xl ">
 <img src="QR-6.png" alt="logo" className="w-115 pl-10 h-60 pt-5"/>
<h1 className="pl-5 text-2xl font-semibold">Indian Focus</h1>
<p className="text-gray-600 text-xl pl-5 pr-5">Indian Focus is a specialized feature designed to handle the high volume of guests that visit during festivals and community celebrations.</p>
</div>

</div>
</div>
    </>
  )
}

export default FeatureQR
