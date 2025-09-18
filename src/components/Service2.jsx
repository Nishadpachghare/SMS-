import React from 'react';

function Service2() {
  return (
     <div className='flex flex-col justify-center items-center pt-10 gap-5 h-[100vh]'>
      <div className='text-[50px] font-semibold w-[50%] flex justify-center items-center text-center'>Services & Packages</div>

      <div className='flex justify-center items-center gap-5 pt-10 font-semibold w-[100%]'>

         <div className="w-[325px] h-[450px] bg-white rounded-2xl shadow-md p-6 ">
              <div className='flex justify-center items-center gap-2 '> 
             {/* <CloudinaryImage 
               publicId="community-icon"
               alt="icon"
               className='w-10 h-10'
               transformation={[
                 { width: 40, height: 40, crop: 'fill' },
                 { quality: 'auto', fetchFormat: 'auto' }
               ]}
             /> */}
      <h1 className="text-xl text-center font-semibold">COMMUNITY</h1></div> 
      <p className="text-gray-600 mt-2 text-center">Ideas for small societies to get started.</p>
       <p className= "text-xl font-semibold text-center pt-5">Free</p>

            <div className='flex justify-center items-center gap-2 pt-5 pr-1'>
         {/* <CloudinaryImage 
           publicId="vector-icon"
           alt="icon"
           className='w-5 h-5'
           transformation={[
             { width: 20, height: 20, crop: 'fill' },
             { quality: 'auto', fetchFormat: 'auto' }
           ]}
         /> */}
         <p>Basics feature</p>
      </div>
      <div className='flex justify-center items-center gap-2 pt-5 pl-5 pr-3'>
         {/* <CloudinaryImage 
           publicId="vector-icon"
           alt="icon"
           className='w-5 h-5'
           transformation={[
             { width: 20, height: 20, crop: 'fill' },
             { quality: 'auto', fetchFormat: 'auto' }
           ]}
         /> */}
         <p>Limited storage</p>
      </div>
      <div className='flex justify-center items-center gap-2 pt-5 pl-10'>
         {/* <CloudinaryImage 
           publicId="vector-icon"
           alt="icon"
           className='w-5 h-5'
           transformation={[
             { width: 20, height: 20, crop: 'fill' },
             { quality: 'auto', fetchFormat: 'auto' }
           ]}
         /> */}
         <p>Community supoort</p>
      </div>
       <div className='pt-22 pl-8'> <button type="button" className="p-2 rounded-full border-[2px] bg-[black] text-white text-base hover:bg-[white] hover:text-black  w-55" >Choose</button>
      </div>
   
       </div>

        <div className="w-[325px] h-[500px] bg-white border-2 border-black rounded-2xl shadow-md p-6">
          <div className='flex justify-center items-center gap-2 '> 
             <img src="Pro.img.png" alt="icon" />
      <h1 className="text-xl text-center font-semibold">PROFESSIONAL</h1></div> 
      <p className="text-gray-600 mt-2 text-center ">Enhanced feature for growing communities.</p>
         <p className= "text-xl font-semibold text-center pt-5">159 dollars / month</p>

        <div className='flex justify-center items-center gap-2 pt-5'>
         <img src="Vector@2x.png" alt="icon"  className='w-5 h-5' />
         <p>All Community feature</p>
      </div>
      <div className='flex justify-center items-center gap-2 pt-5 pl-5 pr-8'>
         <img src="Vector@2x.png" alt="icon"  className='w-5 h-5' />
         <p>Advance Automation</p>
      </div>
      <div className='flex justify-center items-center gap-2 pt-5 pr-13'>
         <img src="Vector@2x.png" alt="icon"  className='w-5 h-5' />
         <p>Priority support</p>
      </div>
         <div className='flex justify-center items-center gap-2 pt-5 pr-17'>
         <img src="Vector@2x.png" alt="icon"  className='w-5 h-5' />
         <p>More storage</p>
      </div>
        <div className="pt-[60px] pl-8">
  <button
    type="button"
    className="p-2 rounded-full border-2 bg-black text-white text-base hover:bg-white hover:text-black w-[220px]"
  >
    Choose
  </button>
</div>
       </div>


         <div className="w-[325px] h-[450px] bg-white rounded-2xl shadow-md p-6">
             <div className='flex justify-center items-center gap-2 '> 
             <img src="enterprize.png" alt="icon"  className='w-10 h-10'/>
      <h1 className="text-xl text-center font-semibold">ENTERPRISE</h1></div> 
      <p className="text-gray-600 mt-2 text-center">Custom solutions for large townships.</p>
       <p className= "text-xl font-semibold text-center pt-5">Get in Touch</p>

    <div className='flex justify-center items-center gap-2 pt-5 pl-5'> 
        <img src="Vector@2x.png" alt="icon" className='w-5 h-5' /> 
        <p>All professional feature</p> </div> 
        <div className='flex justify-center items-center gap-2 pt-5 pl-13'> 
            <img src="Vector@2x.png" alt="icon" className='w-5 h-5' />
            <p>Dedicated Account manager</p> </div> 
            <div className='flex justify-center items-center gap-2 pt-5 pl-1'>
                 <img src="Vector@2x.png" alt="icon" className='w-5 h-5' /> 
                 <p>Custom integrations</p> </div>
                  <div className='flex justify-center items-center gap-2 pt-5  '>
                      <img src="Vector@2x.png" alt="icon" className='w-5 h-5' />
                  <p>Unlitmited storages</p>  
                  </div>
    
       <div className='pt-10 pl-8'> <button type="button" className="p-2 rounded-full border-[2px] bg-[black] text-white text-base hover:bg-[white] hover:text-black  w-50" >Choose</button>
      </div>


       </div>
        </div>
    </div>
  )
}

export default Service2;
