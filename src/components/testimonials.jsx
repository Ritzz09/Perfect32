import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { id: 1, videoUrl: "https://www.youtube.com/embed/GbNooAvC6x4", text: "A patient's infectious smile illuminates the room." },
  { id: 2, videoUrl: "https://www.youtube.com/embed/5EatE3eMLMU", text: "Celebrating health: A radiant smile from a satisfied patient." },
  { id: 3, videoUrl: "https://www.youtube.com/embed/rUoaExHHw1o", text: "A patient's smile tells a story of healing and gratitude." },
  { id: 4, videoUrl: "https://www.youtube.com/embed/zaiucY3gAtA", text: "Happiness has no language...🤌✨️💯" },
];

const TestimonialSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
        <div>
          <ul className="custom-dots"> {dots} </ul>
        </div>
      ),
  };

  return (
    <div id="testimonials" className="bg-gray-300 py-10 px-10">
      <motion.h2 className="text-slate-900 md:text-4xl text-2xl font-bold text-center mb-14"
       initial={{ opacity: 0, y: -50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
       viewport={{ once: true }}
      >Real Testimonials, <span className="text-yellow-600">Real Transformations</span></motion.h2>
      <div className="w-full mx-auto">
        {isMobile ? (
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-4 gap-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-4 rounded-2xl shadow-lg relative group border-2 border-slate-600"
    >
      <iframe
        src={testimonial.videoUrl}
        title="Testimonial Video"
        className="w-full h-74 rounded-2xl border-4 border-yellow-500 hover:scale-110"
        allowFullScreen
      ></iframe>
      <div className="text-slate-900 text-center mt-3 font-semibold">{testimonial.text}</div>
      {/* <button className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 p-4 rounded-full text-white text-lg font-bold transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110">
        ▶
      </button> */}
    </motion.div>
  );
};

export default TestimonialSection;