import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change 50 to adjust scroll threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className=" m-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-22 h-20 pb-1" src="smslogo3.png" alt="logo" />
        </div>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center gap-10 text-xl w-full lg:w-auto">
          <ul className="flex justify-center items-center gap-13 font-normal">
            <li><Link className="hover:font-semibold focus:font-semibold" to="/">Home</Link></li>
            <li><Link className="hover:font-semibold focus:font-semibold" to="/about">About</Link></li>
            <li><Link className="hover:font-semibold focus:font-semibold" to="/feature">Feature</Link></li>
            <li><Link className="hover:font-semibold focus:font-semibold" to="/service">Service</Link></li>
            <li><Link className="hover:font-semibold focus:font-semibold" to="/commitee">Committee</Link></li>
            <li><Link className="hover:font-semibold focus:font-semibold" to="/contact">Contact Us</Link></li>
          </ul>
          <button
            type="button"
               onClick={() => window.location.href ='/contact'}
            className="ml-6 px-4 py-2 rounded-full border-2 bg-black text-white text-base hover:bg-white hover:text-black transition"
          >
            Book Now!
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4 font-normal bg-white rounded shadow p-4">
            <li><Link className="font-semibold" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link className="hover:font-semibold" to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link className="hover:font-semibold" to="/feature" onClick={() => setMenuOpen(false)}>Feature</Link></li>
            <li><Link className="hover:font-semibold" to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li>
            <li><Link className="hover:font-semibold" to="/commitee" onClick={() => setMenuOpen(false)}>Committee</Link></li>
            <li><Link className="hover:font-semibold" to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li>
              <button
                type="button"
                className="w-full px-4 py-2 rounded-full border-2 bg-black text-white text-base hover:bg-white hover:text-black transition"
              >
                Book Now!
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;