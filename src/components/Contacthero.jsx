import React from "react";

function Contacthero() {
  return (
    <div className="flex justify-between items-center px-12 py-16 h-[85vh]">
      {/* Left Section */}
      <div className="w-1/2 mb-66">
        <h1 className="text-[50px] font-semibold">Contact us</h1>
        <p className="text-[22px] leading-relaxed text-gray-700">
          Contact us about anything related to our company or services. <br />
          We'll do our best to get back to you as soon as possible.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          src="/Contacthero.png" // Place your image inside public/ folder
          alt="hero section"
          className=" w-500 h-full"
        />
      </div>
    </div>
  );
}

export default Contacthero;