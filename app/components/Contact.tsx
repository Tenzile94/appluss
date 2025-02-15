import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 mt-24 gap-8">
      <ContactForm />
      <div className="rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.1131090926333!2d-77.47875212456356!3d39.05833643719275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63c021cbed18d%3A0x7df3e49ee1a9a863!2s44030%20Gala%20Cir%2C%20Ashburn%2C%20VA%2020147%2C%20USA!5e0!3m2!1sen!2saz!4v1739213807457!5m2!1sen!2saz"
          width="100%"
          height="720"
          loading="lazy"
          className="border-0 rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
