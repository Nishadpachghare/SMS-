import AboutCard from "./AboutCard"
import { Link } from 'react-router-dom'

function Aboutpreviwe() {
 return (<>
   <div className='h-[100%] pt-15 flex justify-center items-center gap-5 flex-col'>
    <div className="flex justify-center items-center pt-10 font-semibold text-4xl">
        <h1> Why Choose Society Connect?</h1>
    </div>
    <p className='w-[70%] flex justify-center items-center text-center text-gray-600 '>Society Connect is built for Indian societies, tackling real-world challenges like delayed payments, visitor chaos during festivals, or lost paperwork. Our AI-powered platform automates billing, enhances security with QR codes, and ensures transparency with real-time analytics. With scalable plans and role-based dashboards, Society Connect supports small societies to large townships, making it the go-to solution for modern community management.</p>


    <div className='flex justify-start items-center gap-15 pt-20 pl-25 flex-wrap w-[75%] h-[55%]'>
      <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/Previwes#Multi-Role-Support'><AboutCard image={"socitey admin.png"} title={"Multi-Role Support"} content={"Dashboards for Residents, Admins, and Guards."}/></Link> </div>
 
  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Previwes#push-Notifications'><AboutCard image={"real time uptades.png"} title={"Push Notifications"} content={"Alerts for bills, visitors, and events."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Previwes#Secure1'><AboutCard image={"sheld secure.png"} title={"Secure Access"} content={"2FA and encrypted data storage."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Previwes#Offline-Mode'><AboutCard image={"offine.png"} title={"Offline Mode"} content={"Access key features without internet."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Previwes#Indian-Context1'><AboutCard image={"Indian 2.png"} title={"Indian context"} content={"Manage festival events or monsoon complaints."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Previwes#Easy-Download1'><AboutCard image={"easy download.png"} title={"Easy Download"} content={"Available on Android/iOS app stores."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Previwes#Demo-CTA'><AboutCard image={"demo cta.png"} title={"Demo CTA"} content={"Schedule at [website] or [email/phone]."}/></Link> </div>

    
  
    </div>
    </div>
    </>
  )
}

export default Aboutpreviwe
