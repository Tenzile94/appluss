"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Licensed & Insured",
    description:
      "Our technicians are fully licensed and insured to provide you with the confidence that your appliances are being handled by professionals. Every repair is performed with precision and attention to detail, adhering to the highest industry standards to ensure your safety and satisfaction.",
    description2: "Fully licensed & insured for professional service.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Upfront Pricing",
    description:
      "Transparency is at the core of our business. We believe in providing upfront pricing with no hidden fees or unexpected charges. Before starting any repair, we ensure you understand the costs involved, so there are no surprises when the job is done. Trust us for honest and fair pricing on every service.",
    description2: "No hidden fees. Clear, upfront pricing.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
    title: "Satisfaction Guaranteed",
    description:
      "Your satisfaction is our top priority. If you're not completely happy with the service we provide, we will work with you to make it right. With our 100% satisfaction guarantee, you can trust that we are committed to delivering excellent results and ensuring your appliances are functioning perfectly.",
    description2: "100% satisfaction guarantee.",
  },
];

const Features = () => {
  return (
    <div className="absolute bottom-0 translate-y-[90%] lg:translate-y-[50%] left-0 right-0 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="flex flex-col cursor-pointer items-center text-center text-white rounded-lg bg-[#05024ef4]  p-8"
            >
              <div className="mb-4 text-white text-2xl">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white text-lg md:block hidden">
                {feature.description}
              </p>
              <p className="text-white text-lg md:hidden block">
                {feature.description2}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
