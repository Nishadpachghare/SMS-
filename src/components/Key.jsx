import Card from './Card'

function key() {
  return (
  <div className='h-[100%] pt-10 flex justify-center items-center gap-5 flex-col'>
    <div>
        <h1 className='flex justify-center items-center text-[40px] font-semibold'>Key Features</h1>
        <p className='flex justify-center items-center text-gray-600 '>Build your smart society — QR, bills, bookings, and <br />your own app. Let’s do it together!</p>
    </div>
      <div className='flex justify-evenly items-center gap-10 pt-10 flex-wrap w-[70%]'>
        <div><Card 
                head={"Comprehensive Automation"} 
                content={"Streamline billing, visitor logs, and complaints with our automated system, reducing manual effort and errors."} 
                image={"./Automation.png"} 
                button={"learn more"}
                visit={"/QR"}
                />
              </div>

        <div><Card head={"Role-Based Dashboards"} content={"Tailored interfaces for Super Admins, Society Admins, Residents, and Security Guards, ensuring relevant access."} image={"./role base.png"} button={"Learn more"}  visit={"/apartment#Super-Admin"}/></div>

        <div><Card head={"Secure Access "} content={"Robust security with two-factor authentication (2FA) and end-to-end data encryption to protect your society's."} image={"./access.png"} button={"Learn more"}
         visit={"/all-in-one-solution#Top-notch"}/></div>

        <div><Card head={"Mobile App"} content={"Dedicated Android/iOS apps with push notifications for real-time updates and seamless communication on the go."} image={"./mobile app.png"} button={"Learn more"}
        visit={"/all-in-one-solution#Real-time"}/></div>
       
        <div><Card head={"Scalable Plans"} content={"Flexible plans designed to cater to the needs of all community sizes, from small societies to large townships."} image={"./plans.png"} button={"Learn more"} visit={"/all-in-one-solution#Scalable&Customizeable"}/></div>
      
        <div><Card head={"Indian Context"} content={"Specifically designed to tackle unique local issues prevalent in Indian communities, such as festival funds or monsoon repairs."} image={"indian.png"} button={"Learn more"} visit={"/Previwes#Indian-Context1"}/></div>
        </div>
    
    <div className='pt-10 pb-10'>
       <button 
         type="button" 
         onClick={() => window.location.href ='/contact'}
         className="p-2 rounded-full border-[2px] border-black text-black text-base hover:bg-[black] hover:text-white"
       >
         Schedule a Demo Now!
       </button>
    </div>
  </div>
  )
}

export default key
