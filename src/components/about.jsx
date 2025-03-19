import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Cpu, Smile, Briefcase, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import img0 from "/public/img/clinic/0.jpeg";
import img1 from "/public/img/clinic/1.jpeg";
import img2 from "/public/img/clinic/2.jpeg";

const About = () => {
  const images = [img0, img1, img2];

  // Accordion State
  const [openIndexes, setOpenIndexes] = useState([]); // Track multiple open indexes

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Close it if already open
        : [index] // Ensure only one item is open at a time
    );
  };

  // Swiper Navigation Fix
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.navigation.update(); // Ensure navigation buttons are registered
      }, 500);
    }
  }, []);

  // Features with unique icons
  const features = [
    {
      title: "Cutting-Edge Technology",
      description:
        "Benefit from leading-edge tools and techniques, ensuring precise and comfortable treatments for optimal oral health.",
      icon: <Cpu size={20} className="text-slate-800" />,
    },
    {
      title: "Exceptional Patient Experience",
      description:
        "Our warm and friendly team cultivates a welcoming atmosphere, prioritizing your comfort and satisfaction throughout your dental journey.",
      icon: <Smile size={20} className="text-slate-800" />,
    },
    {
      title: "Expert Professionalism",
      description:
        "Place your trust in our highly trained professionals who utilize the latest practices and techniques to deliver top-notch care.",
      icon: <Briefcase size={20} className="text-slate-800" />,
    },
  ];

  return (
    <section id="about" className="bg-gray-300 py-6 md:px-10 px-3 flex flex-col items-center text-center">
      {/* Heading Animation - Appears from Top */}
      <motion.h2
        className="md:text-4xl text-2xl font-bold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Best Dental Clinic in Kharghar - <span className="text-yellow-600">Sector 12</span>
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Image Slider Animation - Appears from Left */}
        <motion.div
          className="w-full md:w-1/2 rounded-full overflow-hidden shadow-xl shadow-slate-950/50 border-2 border-yellow-500 p-3 bg-slate-700 hover:scale-105 relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-full border-5 border-yellow-500"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setTimeout(() => swiper.navigation.update(), 500); // Ensure buttons update
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Clinic ${index + 1}`} className="w-full h-96 object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (Ensuring they are outside Swiper) */}
          <button className="custom-prev absolute top-1/2 left-6 transform -translate-y-1/2 bg-yellow-500 text-slate-800 p-3 rounded-full shadow-lg z-50 hover:scale-110 cursor-pointer">
            &#10094;
          </button>
          <button className="custom-next absolute top-1/2 right-6 transform -translate-y-1/2 bg-yellow-500 text-slate-800 p-3 rounded-full shadow-lg z-50 hover:scale-110 cursor-pointer">
            &#10095;
          </button>
        </motion.div>

        {/* Right Section (Text + Accordion) */}
        <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0 text-left flex flex-col">
          {/* Text Content Animation - Appears from Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-lg text-justify">
              Welcome to <strong>Perfect 32</strong>, Get the best dental care from{" "}
              <span className="text-yellow-600 font-bold">Dr. Ketan Revanwar</span>, the best dentist
              in Kharghar, Sector 12. We provide painless and personalized services, including root
              canals, dental implants, tooth extraction, smile designing, crowns & bridges, dental
              fillings, teeth braces, teeth whitening, and all kinds of dental treatments.
            </p>
            <p className="mt-4 text-gray-800 text-lg text-justify">
              Our dental clinic features the best orthodontist and pediatric dentist in Kharghar,
              Navi Mumbai. We use high-quality, world-class, and pain-free instruments to restore
              your brilliant and marvelous smile.
            </p>
          </motion.div>

          {/* Accordion Feature List - Appears from Right One by One */}
          <div className="mt-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="w-full bg-yellow-500/70 p-5 rounded-2xl my-3 backdrop-blur-lg transition-all duration-300 hover:bg-yellow-600/80 hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.5 }} // Stagger effect
                viewport={{ once: true }}
                style={{ boxShadow: "rgba(23, 29, 103, 1) 5px 5px" }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="py-2 font-bold flex items-center gap-2">
                    {feature.icon} {feature.title}
                  </p>
                  <ChevronDown
                    size={24}
                    className={`text-slate-800 transition-transform duration-300 ${
                      openIndexes.includes(index) ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Content Section - Only visible when openIndex matches index */}
                {openIndexes.includes(index) && <p className="mt-2">{feature.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
