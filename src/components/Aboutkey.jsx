import { Link } from "react-router-dom"
import AboutCard from "./AboutCard"
import Aboutfeatureallinone from "./Aboutfeatureallinone"

function Aboutkey() {
  return (<>
   <div className='h-[100%] pt-15 flex justify-center items-center gap-5 flex-col'>
    <div className="flex justify-center items-center pt-10 font-semibold text-4xl">
        <h1> Key Feature</h1>
    </div>


    <div className='flex justify-start items-center gap-15 pt-20 pl-25 flex-wrap w-[75%] h-[55%]'>
        <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to="/all-in-one-solution#all-in-one-solution"><AboutCard image={"all in one (2).png"} title={"All-in-One Solution"} content={"Manages billing, visitors, complaints, and more."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to="/all-in-one-solution#role-based-access"><AboutCard image={"roll and based 2.png"} title={"Role-Based Access"} content={"Super Admin, Society Admin, Resident, and Guard dashboards."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to="/all-in-one-solution#cloud-base-convenince"><AboutCard image={"/cloud based.png"} title={"Cloud-Based"} content={"Access via Android/iOS apps from any device."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to="/all-in-one-solution#Top-notch" ><AboutCard image={"secure 2.png"} title={"Secure"} content={"2FA, data encryption, and backup/restore features."}/></Link> </div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to="/all-in-one-solution#indian-context"><AboutCard image={"Indian 2.png"} title={"Indian Focus"} content={"Resolves issues like festival miscommunication or parking disputes."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link  to="/all-in-one-solution#Scalable&Customizeable"><AboutCard image={"Scalaable 2.png"} title={"Scalable"} content={"Supports societies of all sizes with customizable features."}/></Link></div>

    
    
  
    </div>
    </div>
    </>
  )
}

export default Aboutkey
