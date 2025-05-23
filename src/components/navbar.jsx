import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/public/img/logo.jpg";
import { motion } from "framer-motion";
import { X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
    initial={{ y: -100, opacity: 0 }}  // Start position (hidden above screen)
    animate={{ y: 0, opacity: 1 }}   // End position (normal)
    transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
    className="absolute top-3 ml-[20px] md:ml-0 md:left-1/2 md:transform md:-translate-x-1/2 w-[90%] shadow-2xl bg-white border-t-0 border-b-6 border-yellow-500 rounded-full text-black py-4 px-10 md:px-20 flex items-center justify-between z-50 hover:scale-105">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-4 text-m font-medium">
  {[
    { name: "Home", id: "home" },
    { name: "About Clinic", id: "about" },
    { name: "Services", id: "services" },
    { name: "Dentist", id: "dentist" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Us", id: "contact" }

  ].map((item) => (
    <li
      key={item.id}
      className="hover:text-yellow-500 hover:bg-slate-800 p-3 rounded-2xl transition cursor-pointer"
      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
    >
      {item.name}
    </li>
  ))}
</ul>

      {/* Contact Us Button (Desktop) */}
      <button
  className="hidden md:block bg-gradient-to-r from-yellow-300 to-amber-500 text-black border-black border-2 font-semibold px-5 py-2 rounded-full hover:scale-110 hover:border-b-6 shadow-md"
  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
>
  Book Appointment
</button>


      {/* Hamburger Button (Mobile) */}
      <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu (Fixed Fullscreen) */}
      {isOpen && (

        
        
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center gap-6 z-50 rounded-4xl border-4 border-yellow-500 ">
           <button
      onClick={() => {
        closeMenu(); // Close the menu
        window.location.href = "#"; // Navigate to home
      }}
      className="absolute top-4 right-4 text-3xl text-black hover:text-yellow-500"
      aria-label="Close Menu"
    >
       <X className="w-8 h-8" />
    </button>
          <a href="#" className="hover:text-yellow-500 text-2xl " onClick={closeMenu}>Home</a>
          <a href="#about" className="hover:text-yellow-500 text-2xl" onClick={closeMenu}>About Us</a>
          <a href="#services" className="hover:text-yellow-500 text-2xl" onClick={closeMenu}>Services</a>
          <a href="#dentist" className="hover:text-yellow-500 text-2xl" onClick={closeMenu}>Dentist</a>
          <a href="#gallery" className="hover:text-yellow-500 text-2xl" onClick={closeMenu}>Gallery</a>
          <a href="#testimonials" className="hover:text-yellow-500 text-2xl" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" className="hover:text-yellow-500 text-2xl" onClick={closeMenu}>Contact Us</a>
          <button
              className="bg-gradient-to-r from-yellow-300 to-amber-500 text-black border-black text-xl mt-6 border-2 font-bold px-5 py-2 rounded-full hover:scale-110 hover:border-b-6 shadow-md"
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