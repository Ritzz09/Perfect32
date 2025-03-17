import React from "react";

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 max-w-6xl mx-auto">
      {/* Left Section - Text Content */}
      <div className="lg:w-1/2">
      <div className="flex items-center gap-3 mb-2">
  <div className="flex-grow border-t border-gray-300"></div>
  <h3 className="text-gray-500 text-sm font-semibold uppercase">
    <span className="text-red-500 font-bold">About</span> DesignHub
  </h3>
  <div className="flex-grow border-t border-gray-300"></div>
</div>
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          Introduction To The Best <br />
          <span className="text-red-500">Digital Agency</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu enim id gravida pulvinar. 
          Tristique consectetur mi curabitur congue enim dignissim amet justo. Porta morbi nulla aliquet adipiscing.
        </p>
        <p className="text-gray-600 mt-2">
          Sed diam mauris erat faucibus eu posuere ultricies quisque amet. Quam pellentesque in tristique sed neque scelerisque quam pulvinar.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition-all">
          Hire Us
        </button>
      </div>
      
      {/* Right Section - Images */}
      <div className="lg:w-1/2 flex flex-col items-end mt-10 lg:mt-0 relative">
        <div className="relative w-80 h-52 border-4 border-red-300 rounded-md p-3" >
          <img
          src="https://img.freepik.com/free-photo/dental-chair-other-accesorries-used-by-dentist-empty-cabinet-stomatology-cabinet-with-nobody-it-orange-equipment-oral-treatment_482257-12475.jpg?uid=R60856154&ga=GA1.1.1412458065.1733763983&semt=ais_hybrid"
          alt="Teamwork"
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div className="absolute bottom-[-30px] left-10 border-4 border-red-500 rounded-md p-3">
          <img
          src="https://img.freepik.com/free-photo/close-up-dentist-instruments_23-2151042932.jpg?uid=R60856154&ga=GA1.1.1412458065.1733763983&semt=ais_hybrid"
          alt="Collaboration"
            className="w-64 h-44 object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
