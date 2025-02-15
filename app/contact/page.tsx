"use client";
import { FaClock, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className=" text-white bg-gray-100">
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className=" flex flex-col justify-center gap-12 text-[#170259] shadow-lg  rounded-lg px-4 bg-gray-100"
        >
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <div className="mb-4 flex items-center gap-4">
            <FaClock size={30} />
            <div>
              <h4 className="text-3xl font-semibold">Work Hours</h4>
              <p className="text-xl">Weekdays: 9AM - 6PM</p>
              <p className="text-xl">Saturday: 10AM - 4PM</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <FaEnvelope size={30} />
            <div>
              <h4 className="text-3xl font-semibold">Email</h4>
              <p className="text-xl">applusapplience@gmail.com.com</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <FaPhone size={30} />
            <div>
              <h4 className="text-3xl font-semibold">Phone</h4>
              <p className="text-xl">(571) 596-09-03</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <FaMapMarkerAlt size={30} />
            <div>
              <h4 className="text-3xl font-semibold">Address</h4>
              <p className="text-xl">44030 Gala Cir, Ashburn, VA 20147, USA</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-Screen Map */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.1131090926333!2d-77.47875212456356!3d39.05833643719275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63c021cbed18d%3A0x7df3e49ee1a9a863!2s44030%20Gala%20Cir%2C%20Ashburn%2C%20VA%2020147%2C%20USA!5e0!3m2!1sen!2saz!4v1739213807457!5m2!1sen!2saz"
          width="100%"
          height="450"
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
