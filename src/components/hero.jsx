import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Smile, Users, ShieldCheck, Heart } from "lucide-react";
import heroimg from "/public/img/hero.jpeg";

const uspData = [
  { icon: <Smile size={40} className="text-yellow-500" />, count: "500+", text: "Happy Patients" },
  { icon: <Users size={40} className="text-yellow-500" />, count: "50+", text: "Expert Dentists" },
  { icon: <ShieldCheck size={40} className="text-yellow-500" />, count: "100%", text: "Safety Assured" },
  { icon: <Heart size={40} className="text-yellow-500" />, count: "5-Star", text: "Patient Care" },
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-slate-900"></div>

      {/* Background Image (Right 60%) */}
      <div
        className="absolute top-0 right-0 h-full w-full md:w-[55%] bg-cover bg-right md:opacity-60 opacity-50"
        style={{ backgroundImage: `url(${heroimg})` }}
      ></div>

      {/* Content (Aligned to Left) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-2xl px-8 md:px-16 md:text-left text-center text-white"
      >
        <h1 className="text-yellow-500 text-3xl md:text-5xl font-bold leading-tight w-fit">
          <TypeAnimation
            sequence={["The Dental Care With The Gentle Touch", 2000]}
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-lg font-bold text-white mt-3">
          The Perfect Stairway To Dental Heaven
        </p>

        {/* Buttons */}
        <div className="mt-6">
          <button className="mt-10 bg-transparent text-white border-2 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black hover:border-b-6">
            Book Appointment
          </button>
        </div>
      </motion.div>

      {/* USP Cards */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:absolute hidden bottom-10 right-6 md:right-20 z-20 md:flex grid-cols-2  gap-4"
      >
        {uspData.map((usp, index) => (
          <div
            key={index}
            className="bg-white/10  backdrop-blur-lg rounded-xl p-4 md:p-6 flex flex-col items-center shadow-md shadow-amber-50 hover:scale-110 "
          >
            {usp.icon}
            <p className="text-black text-2xl font-bold mt-2">{usp.count}</p>
            <p className="text-black text-sm font-semibold">{usp.text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
