import React from 'react'

function Contactus() {
  return (<>

        <div className='flex justify-center item-center pb-55 h-[70vh]'>
        <div className="grid md:grid-cols-2 gap-70 w-[150vh] pr-10">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border bg-[white] border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border bg-[white] border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Subject (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded-md border bg-[white] border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Message
              </label>
              <textarea
                placeholder='Message for the booking'
                rows="4"
                className="w-full rounded-md border bg-[white] border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black-50"
              ></textarea>
            </div>
          </form>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Phone (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded-md border bg-[white] border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Company (Optional)
              </label>
              <input
                type="text"
                className="w-full rounded-md border bg-[white] border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-black-50"
              />
            </div>

            <div className="pt-6">
              <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Phone Number:</span> +91 9876543210
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Email Address:</span>{" "}
                support@societyhub.com
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Physical Address:</span> 123,
                Society Lane, Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
        </div>
         <div className='flex justify-center item-center pb-15'>
          <button type="button" className=" p-2  rounded-full border-[2px] bg-[black] text-white text-base hover:bg-[white] hover:text-black  font-semibold w-35">Send Message </button>
          </div>
     </>
  
  );
}

export default Contactus
