import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import img1 from "/public/img/Gallery/1.webp";
import img2 from "/public/img/Gallery/2.jpg";
import img3 from "/public/img/Gallery/3.jpg";
import img4 from "/public/img/Gallery/4.webp";
import img5 from "/public/img/Gallery/5.jpg";
import img6 from "/public/img/Gallery/6.jpg";
import img7 from "/public/img/Gallery/7.jpg";
import img8 from "/public/img/Gallery/8.webp";
import img9 from "/public/img/Gallery/9.webp";
import img10 from "/public/img/Gallery/10.webp";
import img11 from "/public/img/Gallery/11.jpg";
import img12 from "/public/img/Gallery/12.jpg";
import img13 from "/public/img/Gallery/13.jpg";
import img14 from "/public/img/Gallery/14.webp";
import wave from "/public/img/Gallery/wave1.png";
import wave1 from "/public/img/services/wave.png";

const images = [
  img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14, img1, img2
];

export default function Gallery() {
  return (
    <div id="gallery" className="relative md:h-200 w-full justify-center items-center bg-[#0F172A] h-screen pt-5  "
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%233E4405' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23EAB308'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        className="md:text-4xl text-2xl font-bold text-white md:mt-26 mt-15 mb-8 text-center px-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        A Glimpse Inside Our <span className="text-yellow-500">State-of-the-Art </span>Facility
      </motion.h2>
      <motion.div className="relative w-full pt-5  "
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
       viewport={{ once: true }}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop
          spaceBetween={-50}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="md:w-[88%] md:h-[450px] "
          breakpoints={{
            0: {
              slidesPerView: 1, // Show 1 slide for mobile screens
            },
            768: {
              slidesPerView: 3, // Show 3 slides for md and larger
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center h-auto px-10  ">
              <div className="bg-yellow-400/70 p-2 rounded-lg shadow-lg h-auto md:w-[400px] ">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-md md:w-[400px] object-cover h-[400px] w-[400px]"
                />
                <p className="text-center mt-2 text-gray-700 italic text-sm">
                  Through The Lens
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="prev-btn absolute -left-[-10px] md:left-[30px] top-1/2 transform -translate-y-1/2 z-10 text-white md:bg-yellow-500 bg-slate-900 p-2 rounded-full shadow-lg">
          ❮
        </button>
        <button className="next-btn absolute -right-[-10px] md:right-[30px] top-1/2 transform -translate-y-1/2 z-10 text-white md:bg-yellow-500 bg-slate-900 p-2 rounded-full shadow-lg">
          ❯
        </button>

        {/* Custom Pagination Dots */}


      </motion.div>
      <img
        src={wave} // Update this path to your actual PNG image location
        alt="Wave"
        className="absolute top-0 left-0 w-full"
      />
      <img
        src={wave1} // Update this path to your actual PNG image location
        alt="Wave"
        className="absolute bottom-0 left-0 w-full"
      />


    
    </div>
        );
}
