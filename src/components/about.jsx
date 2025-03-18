import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Cpu, ChevronDown } from "lucide-react";
import { useState } from "react";

const About = () => {
  const images = [
    "/public/img/clinic/0.jpeg",
    "/public/img/clinic/1.jpeg",
    "/public/img/clinic/2.jpeg",
  ];

  // Accordion State
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: "Cutting-Edge Technology",
      description:
        "Benefit from leading-edge tools and techniques, ensuring precise and comfortable treatments for optimal oral health.",
    },
    {
      title: "Exceptional Patient Experience",
      description:
        "Our warm and friendly team cultivates a welcoming atmosphere, prioritizing your comfort and satisfaction throughout your dental journey.",
    },
    {
      title: "Expert Professionalism",
      description:
        "Place your trust in our highly trained professionals who utilize the latest practices and techniques to deliver top-notch care.",
    },
  ];

  return (
    <section className="bg-gray-300 py-6 md:px-10 px-3 flex flex-col items-center text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Best Dental Clinic in Kharghar - <span className="text-yellow-600">Sector 12</span>
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Image Slider */}
        <div className="w-full md:w-1/2 rounded-full overflow-hidden shadow-xl shadow-slate-950/50 border-2 border-yellow-500 p-3 bg-slate-700">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-full border-5 border-yellow-500"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Clinic ${index + 1}`} className="w-full h-96 object-cover " />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0 text-left">
          <p className="text-gray-800 text-lg text-justify">
            Welcome to <strong>Perfect 32</strong>, Get the best dental care from <span className="text-yellow-600 font-bold">Dr. Ketan Revanwar</span>, the best dentist in Kharghar, Sector 12. We provide painless and personalized services, including root canals, dental implants, tooth extraction, smile designing, crowns & bridges, dental fillings, teeth braces, teeth whitening, and all kinds of dental treatments.
          </p>
          <p className="mt-4 text-gray-800 text-lg text-justify">
            Our dental clinic features the best orthodontist and pediatric dentist in Kharghar, Navi Mumbai. We use high-quality, world-class, and pain-free instruments to restore your brilliant and marvelous smile.
          </p>

          {/* Accordion Feature List */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full bg-yellow-500/70 p-5 rounded-2xl my-3 backdrop-blur-lg transition-all duration-300 hover:bg-yellow-600/80 hover:scale-105"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className="py-2 font-bold flex items-center gap-2">
                  <Cpu size={20} className="text-slate-800" /> {feature.title}
                </p>
                <ChevronDown
                  size={24}
                  className={`text-slate-800 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Content Section - Only visible when openIndex matches index */}
              {openIndex === index && <p className="mt-2">{feature.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
