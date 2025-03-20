import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const images = [
  "/public/img/clinic/1.jpeg",
  "/public/img/clinic/2.jpeg",
  "/public/img/clinic/3.jpeg",
  "/public/img/clinic/4.jpeg",
  "/public/img/clinic/5.jpeg",
  "/public/img/clinic/6.jpeg",
  "/public/img/clinic/7.jpeg",
  "/public/img/clinic/8.jpeg",
];

export default function Gallery() {
  return (
    <div className="flex w-full justify-center items-center h-screen bg-gradient-to-b from-gray-200 to-gray-400">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Adjust this to match the style
        spaceBetween={-50} // Adjust to control overlap
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="w-[90%] md:w-[90%] lg:w-[90%]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-yellow-400/70 p-2 rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-lg shadow-md w-full h-84 object-cover"
              />
              <p className="text-center mt-2 text-gray-700 italic text-sm">
                Modern interior
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
