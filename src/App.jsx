import React, { useState, useEffect } from "react";
import "./App.css";
import { FaArrowUp, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"; // Import icons
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Accordion from "./components/Faq";
import ContactForm from "./components/contact";
import Services from "./components/services";
import About from "./components/about";
import logo from "/public/img/logo.jpg";
import USP from "./components/usp";
import DentistSection from "./components/dentist";
import Gallery from "./components/gallery";
import TestimonialSection from "./components/testimonials";
import Footer from "./components/footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showScroll, setShowScroll] = useState(false); // State for scroll button

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Hide preloader completely after 3 seconds
    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Show Scroll to Top Button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Preloader */}
      {loading && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-900 z-50 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Spinning Outer Circle */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-50 h-50 border-4 bg-white border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

            {/* Static Logo */}
            <div className="flex items-center justify-center bg-white rounded-full z-50">
              <img src={logo} alt="Logo" className="w-30 h-30" />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <USP />
          <About />
          <Services />
          <DentistSection />
          <Gallery />
          <TestimonialSection />
          <ContactForm />
          <Accordion />
          <Footer />

          {/* Scroll to Top Button */}
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed md:bottom-6 md:right-6 bottom-3 right-3 bg-yellow-500 text-slate-800 p-3 rounded-2xl shadow-lg hover:bg-yellow-600 transition z-50"
            >
              <FaArrowUp size={30} />
            </button>
          )}

          {/* Floating Phone & WhatsApp Buttons */}
          <div className="fixed md:bottom-6 md:left-6 bottom-3 left-3 flex flex-col space-y-3 z-50">
            {/* Phone Button */}
            <a
              href="tel:+918850568626" // Replace with actual phone number
              className="bg-green-500 text-white p-3 rounded-2xl shadow-lg hover:bg-green-700 transition"
            >
              <FaPhoneAlt size={30} />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918850568626" // Replace with actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-3 rounded-2xl shadow-lg hover:bg-green-800 transition"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
