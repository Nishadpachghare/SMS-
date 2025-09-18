
import AboutCard from './AboutCard'
import { Link } from 'react-router-dom'

function Aboutsocitey() {
return (<>
      <div className='h-100vh pt-15 pb-50 flex justify-center items-center gap-5 flex-col'>
    <div className="flex justify-center items-center pt-10 font-semibold text-4xl">
        <h1> Why Choose Society Connect?</h1>
    </div>
    <p className='w-[70%] flex justify-center items-center text-center text-gray-600 '>Society Connect is built for Indian societies, tackling real-world challenges like delayed payments, visitor chaos during festivals, or lost paperwork. Our AI-powered platform automates billing, enhances security with QR codes, and ensures transparency with real-time analytics. With scalable plans and role-based dashboards, Society Connect supports small societies to large townships, making it the go-to solution for modern community management.</p>


    <div className='flex justify-start items-center gap-15 pl-25 flex-wrap w-[75%] h-[60%]'>
       <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to='/WhyChooseSociety#Automation1'> <AboutCard image={"Automation robo.png"} title={"Automation"} content={"Simplifies billing, complaints, and visitor logs."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/WhyChooseSociety#Security1'><AboutCard image={"sheld secure.png"} title={"Security"} content={"QR-based entry, incident reporting, encrypted data."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/WhyChooseSociety#Transparency'><AboutCard image={"tranperance.png"} title={"Transparency"} content={"Financial dashboards, audit logs."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/WhyChooseSociety#Scalability'><AboutCard image={"Scalaable 2.png"} title={"Scalability"} content={"Supports multi-society management for Super Admins."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/WhyChooseSociety#User-Friendly5'><AboutCard image={"user friendly.png"} title={"User-Friendly"} content={"Intuitive app with UPI payment support."}/></Link></div>

 <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/WhyChooseSociety#Indian-Focus2'><AboutCard image={"Indian 2.png"} title={"Indian Focus"} content={"Addresses local issues like festival planning."}/></Link></div>

   <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/WhyChooseSociety#Contact-Us'><AboutCard image={"contact.png"} title={"Contact Us"} content={"Reach out at [website] or [email/phone] for a demo."}/></Link></div>

    </div>
    </div>
    </>
  )
}

export default Aboutsocitey
