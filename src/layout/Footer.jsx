import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img 
            src="smslogo3.png" 
            alt="logo" 
            className="w-[95px] h-[85px] mb-5"
          />
          <p className="text-white text-lg font-semibold">
            Simplifying Community <br /> Living.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-base">Company</h2>
          <ul className="space-y-2 text-sm"> 
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white ">Contact</a></li>
            <li><a href="/contact#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-base">Learn</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/commitee" className="hover:text-white">Commitee</a></li>
            <li><a href="#" className="hover:text-white">Case Studies</a></li>
            <li><a href="#" className="hover:text-white">Guides</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3 text-base">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Terms of Services</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white text-center py-4 text-sm text-gray-400">
        © 2024 Society Management System. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;