import { Link } from "react-router-dom"
import FeatureCard from "./FeatureCard"

function Featurehero() {
  return (<>
          <div className='flex flex-col w-1/2 pl-25'>
        <h1 className='text-[50px] font-semibold px-15'>Feature</h1>
        <p className='w-[70%] flex justify-center items-center  text-gray-600 pl-15 '>Build your smart society — QR, bills, bookings, and your own app. Let's do it together!</p>
            </div>

     <div className='flex justify-start items-center gap-15 pt-20 pl-40 flex-wrap w-[95%] h-[70%]'>
      <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to="/Maintenance"><FeatureCard image={"bill.png"} title={"Maintenance Bill Generation"} content={"Easily view and pay your maintenance bills online."}/></Link></div>

      
  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
       <Link to= '/Payment'><FeatureCard image={"Payment gateway integration.png"} title={"Payment gateway integration"} content={"Accept payments through various methods like UPI and Razorpay."}/></Link> </div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/QR'><FeatureCard image={"vistior.png"} title={"Visitor Logs & QR Code Entry"} content={"Manage visitor logs and use QR codes for entry."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Staff'><FeatureCard image={"staff.png"} title={"Staff Attendance"} content={"Track staff attendance and export salary reports."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Booking'><FeatureCard image={"bill.png"} title={"Facility Booking "} content={"Book facilities like the gym or clubhouse with ease."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Tracking'><FeatureCard image={"vistior.png"} title={"Complaint Tracker"} content={"Track the status of your complaints and get updates."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Notice'><FeatureCard image={"real time uptades.png"} title={"Notice Board & Alerts"} content={"Post notices and send alerts to residents."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Votting'><FeatureCard image={"voting.png"} title={"Voting & Polls"} content={"Participate in society polls and voting."}/></Link></div>
        
          <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/DOC'><FeatureCard image={"doc.png"} title={"Secure document storage"} content={"Store important documents securely."}/></Link></div>

  <div className=' transform transition-transform duration-250 hover:scale-110 hover:bg-white rounded-2xl'>
        <Link to='/Reporting'><FeatureCard image={"tranperance.png"} title={"Analytics and Reporting"} content={"Data-driven decisions are key for Indian societies."}/></Link></div>

        </div>
        </>
  )
}

export default Featurehero
