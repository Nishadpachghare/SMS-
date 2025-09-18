import React from 'react';

function Abouthero() {
  return (
    <div>
       <div className='flex justify-between p-10 pt-20 h-[75vh]'>
      <div className='flex justify-center flex-col w-1/2 mb-50 '>
        <h1 className='text-[55px] font-semibold pl-15'>What is SMS ?</h1>
        <p className=' pl-15 pt-5 text-[17px] '>In India, running a residential society often means juggling endless paperwork, chasing maintenance dues, and managing visitor chaos during festivals like Holi or Ganesh Chaturthi. The Society Management System (SMS) is a cloud-based platform that simplifies these challenges with automation, security, and transparency. Designed for apartments, villas, and townships, SMS offers role-based dashboards: Super Admins oversee multiple societies, Society Admins manage single communities, Residents engage via intuitive apps, and Security Guards ensure safety with dedicated tools. From generating bills to tracking complaints, SMS ensures every task is streamlined, secure, and accessible anytime, anywhere, with 2FA and data encryption.</p>
      </div>
      <div className='w-1/2 flex justify-center items-center mb-30 '>
        {/* <CloudinaryImage 
          publicId="about-hero"
          alt="hero section"
          className='h-115 mask-radial-farthest-corner'
          responsive={true}
          transformation={[
            { width: 'auto', crop: 'scale' },
            { quality: 'auto', fetchFormat: 'auto' }
          ]}
        /> */}
        <img src="/Abouthero.png" alt="hero section" />
      </div>
    </div>
    </div>
  );
}

export default Abouthero;
