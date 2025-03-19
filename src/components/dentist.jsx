import Image from "/public/img/dentist.jpg"; // Replace with your image path
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Importing star icon

export default function DentistSection() {
    return (
        <section className="bg-gray-300 py-10 px-4 md:px-10 flex flex-col items-center text-center">
            {/* Heading Animation - Appears from Top */}
            <motion.h2
                className="md:text-lg text-sm font-bold text-yellow-600"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <span className="text-gray-800">Meet</span> Our Visionary Founder
            </motion.h2>
            <motion.h2
                className="md:text-4xl text-2xl font-bold text-gray-800 mb-10 z-12"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <span className="text-yellow-600">Dr.</span> Ketan Revanwar
            </motion.h2>

            {/* Responsive Layout: Image First on Mobile */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10">
                {/* Left Content (Text) */}
                <motion.div
                    className="w-full md:w-2/3 text-justify text-lg px-4 md:pl-10"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="my-4">
                        <strong>Meet</strong> <span className="text-yellow-600 font-bold">Dr. Ketan Revanwar</span>, 
                        a visionary and the driving force behind the establishment of Perfect 32 Advanced Dental Clinic. 
                        With a decade of clinical experience in Dentistry, he stands as a seasoned Dental Surgeon.
                    </p>
                    <p className="my-4">
                        Dr. Revanwar specializes in a wide array of dental services, excelling in cosmetic dentistry, 
                        root canal treatments, dental implants, and full mouth rehabilitation. His commitment to excellence 
                        is evident in the transformative smiles he crafts for his patients.
                    </p>
                    <p className="my-4">
                        Notably, over the past ten years, Dr. Revanwar has extended the 'Perfect' Dental Service to 
                        over 10,000 patients, ensuring a 100% satisfaction rate. His passion for dentistry and dedication 
                        to patient care make him a true leader in the field.
                    </p>
                    <ul className="mt-6 space-y-3 font-semibold">
                        <li className="flex items-start gap-3">
                            <Star className="text-yellow-500 fill-amber-300 w-6 h-6" />
                            <span>Over 10 years of clinical experience in Dentistry.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Star className="text-yellow-500 fill-amber-300 w-6 h-6" />
                            <span>Specializes in cosmetic dentistry and full mouth rehabilitation.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Star className="text-yellow-500 fill-amber-300 w-6 h-6" />
                            <span>Successfully treated over 10,000 patients with a 100% satisfaction rate.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Star className="text-yellow-500 fill-amber-300 w-6 h-6" />
                            <span>Committed to transforming smiles with cutting-edge dental procedures.</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Right Content (Image with Background Shapes) */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center items-center relative"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Background Shapes */}
                    <div className="absolute -top-10 right-0 md:w-42 md:h-42 w-30 h-30 border-2 border-slate-700 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-80 z-10 shadow-black/80 shadow-2xl"></div>
                    <motion.div className="absolute -bottom-15 md:left-[-10px] left-0 md:w-66 md:h-66 w-26 h-26 border-2 border-yellow-500 bg-gradient-to-r from-blue-900 to-slate-900 rounded-full animate-spin duration-75 opacity-80 z-10 "
    
                    ></motion.div>

                    {/* Image */}
                    <img
                        src={Image} // Replace with your actual image path
                        alt="Dr. Ketan Revanwar"
                        className="relative z-12 w-64 md:w-100 rounded-lg  shadow-black/80 shadow-lg border-4 border-t-slate-700 border-r-slate-700 border-b-yellow-500 border-l-yellow-500 hover:scale-105"
                    />
                </motion.div>
            </div>
        </section>
    );
}
