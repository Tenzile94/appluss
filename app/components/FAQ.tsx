"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface Faqs {
  question: string;
  answer: string;
}

const faqs: Faqs[] = [
  {
    question: "How quickly can you repair my appliance?",
    answer:
      "We offer same-day or next-day service for most appliance repairs, depending on availability and the complexity of the issue. Contact us to schedule a convenient appointment.",
  },
  {
    question: "Do you repair all types of appliances?",
    answer:
      "Yes, we specialize in repairing a wide range of appliances, including refrigerators, washers, dryers, dishwashers, microwaves, and more. If you have questions about a specific appliance, give us a call!",
  },
  {
    question: "What brands do you service?",
    answer:
      "We service all major brands, including Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, Bosch, and more. Our technicians are trained to handle repairs for appliances of all brands and models.",
  },
  {
    question: "Do you offer a warranty on your repairs?",
    answer:
      "Yes, all our repairs come with a warranty for both parts and labor. We stand behind our work and ensure customer satisfaction.",
  },
  {
    question: "How do I know if my appliance is worth repairing?",
    answer:
      "Our technicians will provide an honest assessment of your appliance's condition. In many cases, repairing your appliance is more cost-effective than replacing it. We'll help you make the best decision for your situation.",
  },
  {
    question: "What are your service hours?",
    answer:
      "We are open Monday through Saturday, from 8:00 AM to 6:00 PM. For emergency repairs, we may be able to accommodate outside these hours. Contact us for details.",
  },
  {
    question: "Do you offer emergency appliance repair services?",
    answer:
      "Yes, we understand that appliance issues can be urgent. We offer emergency repair services whenever possible to minimize disruptions to your daily routine.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling us at (555) 123-4567 or using our online booking system on our website. We make it easy to find a time that works for you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit cards (Visa, Mastercard, American Express, Discover), and checks. Payment is due upon completion of the repair.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "Yes, all our technicians are fully licensed, insured, and highly trained to provide safe and reliable repairs. Your appliances are in good hands with us!",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 ">
      <div className="container mx-auto px-4  max-w-5xl py-8">
        <h2 className="text-4xl font-bold text-[#ce360b] mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <div className="h-[2px] w-16 bg-blue-700 mb-12 mx-auto"></div>
        {faqs.map((faq, index) => (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ duration: 0.8 }}
            key={index}
            className="mb-4 bg-[#05024eed] border-gray-300 pb-4 rounded-md  p-4"
          >
            <button
              className="w-full text-left flex justify-between items-center text-2xl font-semibold text-white rounded-sm hover:text-red-700 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2">{activeIndex === index ? "-" : "+"}</span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-gray-100 text-xl">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
