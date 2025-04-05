import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Clock, DollarSign, MapPin, Calendar , Mail } from "lucide-react";
import back from "/public/img/contact_bg.png";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div id="contact" className="flex items-center flex-col justify-center bg-slate-900"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%233E4405' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23EAB308'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        className="md:text-lg text-sm font-bold text-yellow-600 hidden md:block mt-15"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-white">Ready to Get </span> Started?
      </motion.h2>
      <motion.h2
        className="md:text-4xl text-2xl font-bold text-white mb-5 z-12 md:mt-2 mt-15 px-5 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-yellow-500"> Complete </span>Our Inquiry Form Now

      </motion.h2>
      <div className="relative w-full max-w-6xl h-[700px] md:p-10 p-2 perspective-1000 justify-center">
        {/* Flip Container */}
        <motion.div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full bg-gray-200/90 shadow-xl rounded-2xl md:p-8 md:pt-2 p-2 pt-4 flex flex-col"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h1 className="text-center md:text-3xl p-2 font-bold text-2xl text-slate-800">Contact Details</h1>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 gap-1 md:flex-grow">

              {/* Left Side */}
              <div className="md:border-r-2 border-dashed border-yellow-600  md:px-10 md:py-10 text-center md:text-left">

                <h2 className="flex items-center justify-center md:justify-start text-xl md:text-2xl font-bold gap-2 md:gap-4 mt-3 md:mt-0 mb-3 text-yellow-500">
                  <Phone className="w-6 h-6 text-yellow-500" /> Emergency Case
                </h2>

            
                <a href="tel:+918850568626"><p className="text-lg flex  justify-center md:justify-start "><Phone className="w-8 h-8 p-1 text-gray-700" /> +91-8850568626</p></a>
                <a href="tel:+917710001456"><p className="text-lg flex  justify-center md:justify-start"><Phone className="w-8 h-8 p-1  text-gray-700" />+91-7710001456</p></a>
                <a href="mailto:info@perfect32dentist.com"><p className="text-lg flex  justify-center md:justify-start"><Mail className="w-8 h-8 p-1  text-gray-700" />info@perfect32dentist.com</p></a>
               

                <h2 className="text-xl md:text-2xl font-bold flex items-center justify-center md:justify-start gap-2 md:mt-10 mt-4 mb-3 text-yellow-500 ">
                  <Clock className="w-6 h-6 text-yellow-500" /> Working Time
                </h2>
                <p className="flex text-lg text-gray-900 md:ml-2 justify-center md:justify-start">
                  <Calendar className="w-6 h-6 mr-2  text-gray-700" />
                  <span className="font-semibold">Mon-Sat : </span> 10 AM - 11 PM
                </p>
                <p className="flex text-lg  md:ml-2 justify-center md:justify-start">
                  <Calendar className="w-6 h-6 mr-2  text-gray-700" />
                  <span className="font-semibold">Sunday : </span> By Appointment
                </p>
              </div>

              {/* Right Side */}
              <div className="md:p-10 mt-3 md:mt-0 ">
                <h2 className="text-xl md:text-2xl  font-bold flex items-center gap-2 text-yellow-500 justify-center md:justify-start">
                  <DollarSign className="w-6 h-6 text-yellow-500" /> Pricing
                </h2>
                <p className="text-lg md:text-left text-center">➤ <span className="font-semibold">Consultation - </span>Rs 400/-</p>
                <p className="text-lg md:text-left text-center">➤ <span className="font-semibold">Dental X-Ray - </span>Rs 300/-</p>
                <p className="text-lg md:text-left text-center">➤ <span className="font-semibold">Teeth Cleaning - </span>Rs 1200/- onwards</p>
                <p className="text-lg md:text-left text-center">➤ <span className="font-semibold">Simple Removal of a Tooth - </span>Rs 800/- onwards</p>

                <h2 className="text-xl md:text-2xl  font-bold md:flex items-center gap-2 mt-4 text-yellow-500 hidden ">
                  <MapPin className="w-6 h-6 text-yellow-500" /> Our Location
                </h2>
                <div className="mt-2 hidden md:block">
                  <iframe
                    className="w-full h-52 rounded-lg border-4 border-blue-900"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30171.95363241192!2d73.066225!3d19.041997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c217eaaaaaab%3A0xbe6a5da08409ee3!2sPerfect%2032%20Dentist%20Kharghar!5e0!3m2!1sen!2sin!4v1742559477921!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Book Appointment Button at the Bottom */}
            <div className="flex justify-center mt-3">
              <button
                onClick={() => setFlipped(true)}
                className="md:w-1/4 w-2/3 bg-gradient-to-r from-yellow-300 to-amber-500 text-black border-black border-2 font-semibold px-5 py-2 rounded-full hover:scale-110 hover:border-b-6 mt-7 md:mt-0  shadow-md"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-auto h-[90%] bg-gray-200/90 shadow-xl rounded-2xl md:px-26 md:py-0 p-6  flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div
              className="absolute justify-center md:h-[700px] md:w-[700px] h-full w-full bg-cover opacity-20 z-0"
              style={{ backgroundImage: `url(${back})` }}
            ></div>
            
            <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 z-10">Book an Appointment</h2>
            <div className=" md:grid md:grid-cols-2 gap-4 z-10">
              <input type="text" placeholder="Name" required className="bg-black/10 md:w-[420px] w-full border p-2 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 required" />
              <input type="email" placeholder="Email" className="bg-black/10 w-full border p-2 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="tel" placeholder="Mobile Number" required className="bg-black/10 w-full border p-2 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="text" placeholder="Interest" className="bg-black/10 w-full border p-2 mb-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <textarea placeholder="Message" className="bg-black/10 w-full border p-2 mb-6 md:mt-4 h-30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 z-10"></textarea>

            <button type="submit" className="z-10 bg-gradient-to-r from-yellow-300 to-amber-500 text-black border-black border-2 font-semibold px-5 py-2 rounded-full hover:scale-110 hover:border-b-6 shadow-md transition">
              Book Appointment
            </button>

            <button
              onClick={() => setFlipped(false)}
              className="z-10 mt-2 w-full text-slate-900 py-1 rounded-lg hover:underline"
            >
              Back to Details
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
