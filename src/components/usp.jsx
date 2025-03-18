import { Smile, Users, ShieldCheck, Heart } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const USP = () => {
  return (
    <motion.div
      layout
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative md:hidden grid grid-cols-2 gap-4"
    >
      {uspData.map((usp, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 flex flex-col items-center shadow-md shadow-amber-50 hover:scale-110 transition-transform duration-300"
        >
          {usp.icon}
          <p className="text-black text-2xl font-bold mt-2">{usp.count}</p>
          <p className="text-black text-sm font-semibold">{usp.text}</p>
        </div>
      ))}
    </motion.div>
  );
};
export default USP;

const uspData = [
  { icon: <Smile size={40} className="text-yellow-500" />, count: "500+", text: "Happy Patients" },
  { icon: <Users size={40} className="text-yellow-500" />, count: "50+", text: "Expert Dentists" },
  { icon: <ShieldCheck size={40} className="text-yellow-500" />, count: "100%", text: "Safety Assured" },
  { icon: <Heart size={40} className="text-yellow-500" />, count: "5-Star", text: "Patient Care" },
];
