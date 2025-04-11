import React, { useState } from "react";
import { motion } from "framer-motion";
import triangle from "/public/img/footer_tri.png";


const Accordion = () => {
  return (
    <section className="relative z-8 overflow-hidden bg-gray-300 pb-12 md:px-20 px-10 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] text-center lg:mb-20">
              <motion.h2
                className="md:text-lg text-sm font-bold text-yellow-600 hidden md:block"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-gray-800">Your Queries</span> Answered
              </motion.h2>
              <motion.h2
                className="md:text-4xl text-2xl font-bold text-gray-800 mb-10 z-12"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-yellow-600">Dive into Our </span>Frequently Asked Questions
              </motion.h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <AccordionItem header={item.header} text={item.text} />
              </motion.div>
            ))}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <AccordionItem header={item.header} text={item.text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <svg className="absolute bottom-[-1px] md:h-20 h-10 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
        <polygon points="0,10 50,0 100,10" fill="rgb(15, 23, 42)" />
      </svg>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div id="faqs" className="group md:mb-8 mb-1 w-full rounded-lg bg-white/40 p-4 border-2 border-slate-700 hover:bg-slate-800 hover:text-white">
      <button className="faq-btn bg flex w-full text-left" onClick={handleToggle}>
        <div className="mr-5 flex h-8 w-full max-w-[40px] items-center justify-center rounded-lg bg-yellow-500">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""}`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"/>
          </svg>
        </div>
        <div className="w-full">
          <h4 className="mt-1 md:text-lg text-sm font-semibold text-black group-hover:text-white">
            {header}
          </h4>
        </div>
      </button>
      <div className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
        <p className="py-3 md:text-lg text-sm leading-relaxed text-body-color hover:text-white">
          {text}
        </p>
      </div>
      
    </div>
  );
};

const leftItems = [
  {
    header: "How can I make my teeth whiter?",
    text: "Teeth cleaning (scaling of teeth) and teeth whitening (teeth bleaching) are two procedures that we can do to make your teeth whiter. Sometimes veneers are also recommended by the dentist to improve the smile and make them sparkling white."
  },
  {
    header: "How can I improve my smile?",
    text: "Depending on the teeth arrangement and color, texture of the teeth, smile can be improved in many ways. Smile designing is one of the best ways to improve smile drastically and having braces treatment is again the one of the best things to have to improve the smile."
  },
  {
    header: "Is Tooth Removal painful?",
    text: "Process of tooth removal is done under local anesthesia. So, it’s a completely painless procedure. In certain situations, it can cause little pain but dentist will give medications to overcome that pain."
  },
  {
    header: "Is Root Canal Treatment Painful?",
    text: "Its completely painless treatment. Now a days with improved technology and methodologies, root canal treatment is no more painful procedure."
  }
];

const rightItems = [
  {
    header: "How often should I have a dental visit for teeth cleaning?",
    text: "It is advisable to visit a dental clinic after every 6 months for follow up visit and teeth cleaning to maintain oral hygiene in its best achievable state."
  },
  {
    header: "How to maintain oral hygiene?",
    text: "Best and most effective way is to brush twice a day and rinse mouth after every meal or snacking. Flossing and using mouth wash are again a good habit to improve oral hygiene. Also, teeth cleaning by a Dentist in Kharghar after every 6 months."
  },
  {
    header: "How to maintain oral hygiene for kids?",
    text: "Brushing twice and rinsing after every time we eat is the best way of maintaining oral hygiene. For above 5 years kids, we can also do flossing if needed."
  },
  {
    header: "How often should I visit the dentist?",
    text: "It is recommended to visit the dentist every 6 months for a routine check-up and cleaning. Regular visits help detect problems early, maintain oral health, and prevent issues like cavities, gum disease, and plaque buildup."
  },
  
  
];
