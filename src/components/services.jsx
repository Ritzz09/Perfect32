import React from "react";

const Services = () => {
  return (
    <section id="services" className="relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do</h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle cx="50.1" cy="30.4" r="5" className="stroke-primary" style={{ fill: "transparent", strokeWidth: 2, strokeMiterlimit: 10 }}></circle>
            <line x1="55.1" y1="30.4" x2="100" y2="30.4" className="stroke-primary" style={{ strokeWidth: 2, strokeMiterlimit: 10 }}></line>
            <line x1="45.1" y1="30.4" x2="0" y2="30.4" className="stroke-primary" style={{ strokeWidth: 2, strokeMiterlimit: 10 }}></line>
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising & content for your business.
          </p>
        </header>

        {/* Service Cards */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
              <div className="py-8 px-12 mb-12 bg-blue-200 border-b border-gray-200 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg shadow-md">
                <div className="inline-block text-gray-900 mb-4">{service.icon}</div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Data
const services = [
  {
    title: "SEO Services",
    description: "Enhance your website’s search engine ranking and visibility.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
    ),
  },
  {
    title: "Social Media Content",
    description: "Create engaging content tailored for social media platforms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-chat-square-dots" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    ),
  },
  {
    title: "Email Marketing",
    description: "Automate and optimize email campaigns to boost engagement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
        <path d="M.05 4.555L8 9.414l7.95-4.86A1 1 0 0 0 15 4H1a1 1 0 0 0-.95.555z" />
      </svg>
    ),
  },
];

export default Services;
