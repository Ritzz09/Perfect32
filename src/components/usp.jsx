import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import root from "/public/img/root_canal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth, faCrown, faSmileBeam } from "@fortawesome/free-solid-svg-icons";

// Place uspData ABOVE the component
const uspData = [
  {
    icon: <FontAwesomeIcon icon={faTooth} size="4x" className="text-yellow-500" />,
    count: "2000+",
    text: "Dental Implants",
  },
  {
    icon: <img src={root} alt="Root Canal" className="w-14 h-16" />,
    count: "6000+",
    text: "RCT (Root Canal)",
  },
  {
    icon: <FontAwesomeIcon icon={faCrown} size="4x" className="text-yellow-500" />,
    count: "5000+",
    text: "Crowns & Bridges",
  },
  {
    icon: <FontAwesomeIcon icon={faSmileBeam} size="4x" className="text-yellow-500" />,
    count: "700+",
    text: "Smile Designing",
  },
];

const USP = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
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
          <p className="text-black text-sm font-semibold text-center">{usp.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default USP;
