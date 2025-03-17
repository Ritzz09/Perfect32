import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HoverDevCards from "./components/usp";
import Accordion from "./components/Faq";
import ContactForm from "./components/contact";
import Services from "./components/services";
import About from "./components/about";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 4 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Hide preloader completely after 5 seconds
    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

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
      <div className="relative  flex items-center justify-center">
        <div className="absolute w-40 h-40 border-4 bg-white border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Static Logo inside a separate div */}
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full z-50">
          <img src="src/assets/logo.jpg" alt="Logo" className="w-38 h-16" />
        </div>
      </div>
    </div>
    
     
      )}

      {/* Main Content */}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          {/* <HoverDevCards />
          <About />
          <Services />
          <ContactForm />
          <Accordion /> */}
        </>
      )}
    </div>
  );
}

export default App;
