import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import React from "react";
import img0 from "/public/img/services/Dental-Implants.jpg";
import img1 from "/public/img/services/Root-Canal.jpg";
import img2 from "/public/img/services/Teeth-Braces.jpg";
import img3 from "/public/img/services/Crowns-and-Bridges.jpg";
import img4 from "/public/img/services/Kids-Dental-Care.jpg";
import img5 from "/public/img/services/Teeth-Whitening.jpg";
import img6 from "/public/img/services/Smile-Designing.jpg";
import img7 from "/public/img/services/Tooth-Extraction.jpg";
import img8 from "/public/img/services/filing.jpg";
import img9 from "/public/img/services/Dentures-and-Overdentures.jpg";
import img10 from "/public/img/services/Cosmetic-Dentistry.jpg";


import wave from "/public/img/services/wave.png";

const services = [
  {
    title: "Dental Implants",
    description: "Painless and Sutureless’ dental implants are what we at Perfect 32 Advanced Dental Clinic, the Best Dental Clinic in Kharghar provide you with.",
    image: img0,
  },
  {
    title: "Root Canal Treatment",
    description: "When it comes to the dreaded ‘Root Canal’ treatment two things that spring to mind are toothache and pain.",
    image: img1,
  },
  {
    title: "Teeth Braces",
    description: "Do you feel that your smile is not well-aligned and therefore not attractive? If so, then do not ‘Fear’ because the Best Dentist in Kharghar at Perfect 32 Advanced Dental Clinic is here just for you.",
    image: img2,
  },
  {
    title: "Crowns and Bridges",
    description: "If you are looking to either fortify your tooth structure or bridge the gap that may occur in your teeth then, you must visit a dentist at the Perfect 32.",
    image: img3,
  },
  {
    title: "Kids Dental Care",
    description: "For all those parents worried about your child’s Dental Care fear no more because the Perfect 32 Advanced Dental Clinic.",
    image: img4,
  },
  {
    title: "Teeth Whitening",
    description: "Are you looking to strike a lightning smile by flashing your whitened teeth wide? If so, then come visit the Perfect 32 Advanced Dental Clinic.",
    image: img5,
  },
  {
    title: "Smile Designing",
    description: "Well, do you know that your smile like ‘Graphics’ can be designed by a dentist who knows the ‘ART OF DENTISTRY’?",
    image: img6,
  },
  {
    title: "Tooth Extraction",
    description: "Tooth extraction is a process in ‘Dentistry’ similar to when a human commits a crime for which redemption is impossible.",
    image: img7,
  },
  {
    title: "Dental Fillings",
    description: "Tooth decay is one of the most common ‘Dental’ issues that a large number of people struggle with daily. The only perfect ‘Solution’.",
    image: img8,
  },
  {
    title: "Dentures and Overdentures",
    description: "Are you frightened by just the thought of one day losing all your teeth? Well, with Perfect 32 Advanced Dental Clinic.",
    image: img9,
  },
  {
    title: "Cosmetic Dentistry",
    description: "‘Beautiful Smile’ is what Perfect 32 Advanced Dental Clinic Dentistry guarantees. We, therefore, have created Cosmetic Dentistry.",
    image: img10,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 px-10 md:h-150 md:px-20 relative bg-[#0F172A]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%233E4405' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23EAB308'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-transparent "></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full">
        {/* Heading */}
        <motion.h2
          className="md:text-4xl text-2xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay:1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Featured - <span className="text-yellow-500">Services</span>
        </motion.h2>

        {/* Slider Wrapper */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className=" rounded-lg overflow-hidden border-yellow-500  bg-white border-4 md:h-86 h-88 m-2 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-44 object-cover border-b-2 border-yellow-500"
                  />
                  
                  <div className="p-3 text-center">
                    <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0  transform -translate-y-1/2 z-10">
            <button className="custom-prev bg-yellow-500 text-slate-800 p-3 rounded-full shadow-lg hover:scale-110 cursor-pointer">
              &#10094;
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button className="custom-next bg-yellow-500 text-slate-800 p-3 rounded-full shadow-lg hover:scale-110 cursor-pointer">
              &#10095;
            </button>
          </div>
        </div>

      </div>
      <img
        src= {wave} // Update this path to your actual PNG image location
        alt="Wave"
        className="absolute bottom-0 left-0 w-full"
      />
    </section>
  );
};

export default Services;
