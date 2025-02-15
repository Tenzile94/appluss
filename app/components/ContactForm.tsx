"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipcode: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Response Error:", result); // Log full response
        throw new Error(result.message || "Failed to send email");
      }

      setStatusMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        zipcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error sending message:", error.message);
        setStatusMessage(
          error.message || "Failed to send message. Please try again."
        );
      } else {
        console.error("Unexpected error:", error);
        setStatusMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      <motion.div
        className="bg-gray-100 p-8 shadow-lg rounded-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#18054b] mb-2">
          Book Your Service
        </h2>
        <div className="h-[2px] w-16 bg-blue-700 mb-4"></div>

        {statusMessage && (
          <p
            className={`text-lg mb-4 ${
              statusMessage.includes("Failed")
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {statusMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border px-4 py-3"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full border px-4 py-3"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full border px-4 py-3"
          />
          <input
            type="number"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder="Zip Code"
            required
            className="w-full border px-4 py-3"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Refrigerator Repair">Refrigerator Repair</option>
            <option value="Washer Repair">Washer Repair</option>
            <option value="Oven Repair">Oven Repair</option>
            <option value="Dryer Repair">Dryer Repair</option>
            <option value="Dishwasher Repair">Dishwasher Repair</option>
            <option value="Microwave Repair">Microwave Repair</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            maxLength={1000}
            placeholder="Message"
            required
            className="w-full border px-4 py-3"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#ce360b] hover:bg-[#992201] text-white py-3"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
