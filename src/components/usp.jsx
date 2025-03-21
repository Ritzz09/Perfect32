import { Smile, Users, ShieldCheck, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const USP = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true); // Triggers only once when the page loads
  }, []);

  return (
    <motion.div className="relative md:hidden grid grid-cols-2 gap-4 p-2">
      {uspData.map((usp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={startAnimation ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          className="bg-slate-900/10 backdrop-blur-lg rounded-xl p-4 md:p-6 flex flex-col items-center shadow-md shadow-amber-50 hover:scale-110 transition-transform duration-300"
        >
          {usp.icon}
          <p className="text-black text-2xl font-bold mt-2">{usp.count}</p>
          <p className="text-black text-sm font-semibold">{usp.text}</p>
        </motion.div>
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
