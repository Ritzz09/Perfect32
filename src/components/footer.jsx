import React from "react";
import { FaPhone, FaEnvelope, FaClock, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "/public/img/logo.jpg";

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-white pt-5 pb-6">
            {/* Triangle Shape */}
            
           

            <div className="container mx-auto px-6 text-center md:text-center">
                {/* Top Contact Info */}
                <div className="flex flex-col md:flex-row justify-around items-center text-center md:text-center mb-6 border-b border-gray-700 pb-6">
                    <div className="flex flex-col items-center mb-2 md:w-[34%]">
                        <FaPhone className="text-white text-6xl mb-3 bg-yellow-500 rounded-full p-4 rotate-90" />
                        <span>+91-8850568626</span>
                        <span>+91-7710001456</span>
                    </div>
                    <div className="flex flex-col items-center mb-2 md:w-[33%]">
                        <FaEnvelope className="text-white text-6xl mb-3 bg-yellow-500 rounded-full p-4" />
                        <span> info@perfect32dentist.com</span>
                    </div>
                    <div className="flex flex-col items-center mb-2 md:w-[33%]">
                        <FaClock className="text-white text-6xl mb-3 bg-yellow-500 rounded-full p-4" />
                        <span>Mon - Sat : 10 AM - 11 PM</span>
                        <span>Sunday : By Appointment</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center md:text-left">
                    {/* Logo Section */}
                    <div className="flex justify-center items-center">
    <div className="bg-white p-5 w-40 h-40 rounded-2xl flex justify-center items-center">
        <img src={logo} className="h-32 w-32 rounded-xl" />
    </div>
</div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mt-4 md:mt-0">Quick Links</h3>
                        <ul className="text-gray-400 mt-2 space-y-2">
                            {[
                                { name: "Home", id: "home" },
                                { name: "About Clinic", id: "about" },
                                { name: "Services", id: "services" },
                                { name: "Dentist", id: "dentist" },
                                { name: "Gallery", id: "gallery" },
                                { name: "Testimonials", id: "testimonials" },
                                { name: "Contact Us", id: "contact" }

                            ].map((item) => (
                                <li
                                    key={item.id}
                                    className="hover:text-yellow-500 rounded-2xl transition cursor-pointer"
                                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Open Hours */}
                    <div>
                        <h3 className="text-xl font-semibold mt-4 md:mt-0">Address :</h3>
                        <p className="text-gray-400 mt-2 md:max-w-[60%] text-center md:text-left">Shop no. 10, Sanjivani Center, besides Choudhary Medical, Plot No F-3, Sector 12, Kharghar, Navi Mumbai, Maharashtra - 410210</p>

                    </div>
                    {/* Location with Map */}
                    <div>
                        <h3 className="text-xl font-semibold mt-4 md:mt-0">Location :</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30171.95363241192!2d73.066225!3d19.041997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c217eaaaaaab%3A0xbe6a5da08409ee3!2sPerfect%2032%20Dentist%20Kharghar!5e0!3m2!1sen!2sin!4v1742559477921!5m2!1sen!2sin"
                            className="w-full h-54 mt-2 border-yellow-500 border-4 "
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mt-6 text-gray-400">
                    <FaFacebook className="hover:text-white text-xl" />
                    <FaLinkedin className="hover:text-white text-xl" />
                    <FaTwitter className="hover:text-white text-xl" />
                    <FaInstagram className="hover:text-white text-xl" />
                </div>

                {/* Footer Bottom */}
                <p className="text-center text-gray-500 mt-6 text-lg">© 2025<span className="font-bold"> Perfect 32</span>  All Rights Reserved. </p>
                <span> Designed by </span>
                <a target="_blanked" href="https://mastermindweb.in/" rel="noopener noreferrer" className="text-blue-600">MasterMind Web Developers</a>
            </div>
            
        </footer>
    );
};

export default Footer;
