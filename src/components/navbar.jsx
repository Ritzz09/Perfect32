import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/public/logo.jpg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
    initial={{ y: -100, opacity: 0 }}  // Start position (hidden above screen)
    animate={{ y: 0, opacity: 1 }}   // End position (normal)
    transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
    className="absolute top-3 ml-[20px] md:ml-0 md:left-1/2 md:transform md:-translate-x-1/2 w-[90%] shadow-2xl bg-white border-t-0 border-b-6 border-yellow-500 rounded-full text-black py-4 px-10 md:px-20 flex items-center justify-between z-50">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-12 w-16" />
        
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-m font-medium">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 transition cursor-pointer">About Us</li>
        <li className="hover:text-blue-500 transition cursor-pointer">Services</li>
        <li className="hover:text-blue-500 transition cursor-pointer">Portfolio</li>
        <li className="hover:text-blue-500 transition cursor-pointer">Testimonials</li>
        <li className="hover:text-blue-500 transition cursor-pointer">Faqs</li>
      </ul>

      {/* Contact Us Button (Desktop) */}
      <button className="hidden md:block bg-gradient-to-r from-yellow-300 to-amber-500 text-black border-black border-2 font-semibold px-5 py-2 rounded-full hover:scale-110 hover:border-b-6  shadow-md">
        Book Appointment
      </button>

      {/* Hamburger Button (Mobile) */}
      <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu (Fixed Fullscreen) */}
      {isOpen && (
        
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 text-white flex flex-col items-center justify-center gap-6 z-50">
          <a href="#" className="hover:text-blue-500 text-lg" onClick={closeMenu}>Home</a>
          <a href="#" className="hover:text-blue-500 text-lg" onClick={closeMenu}>About Us</a>
          <a href="#" className="hover:text-blue-500 text-lg" onClick={closeMenu}>Services</a>
          <a href="#" className="hover:text-blue-500 text-lg" onClick={closeMenu}>Portfolio</a>
          <a href="#" className="hover:text-blue-500 text-lg" onClick={closeMenu}>Testimonials</a>
          <a href="#" className="hover:text-blue-500 text-lg" onClick={closeMenu}>Faqs</a>
          <button
            className="bg-transparent  text-blue-600 font-semibold px-5 py-2 rounded-full border-2 border-blue-600 hover:scale-110 shadow-md"
            onClick={closeMenu}
          >
            Book Appointment
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;