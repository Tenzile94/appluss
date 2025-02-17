"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Samsung",
    logo: "/brands/samsung.png",
    description:
      "Samsung is a leader in smart home appliances, known for cutting-edge technology and efficiency.",
    features: [
      "SmartThings connectivity",
      "Energy-efficient cooling systems",
      "Sleek, modern design",
    ],
    appliances: ["Refrigerators", "Washers & Dryers", "Microwaves", "Ovens"],
  },
  {
    name: "LG",
    logo: "/brands/lg.png",
    description:
      "LG offers premium home appliances with innovative AI features and long-lasting durability.",
    features: [
      "AI-powered smart washing machines",
      "TurboWash technology for fast cleaning",
      "Quiet and efficient operation",
    ],
    appliances: ["Refrigerators", "Dishwashers", "Washing Machines", "Dryers"],
  },
  {
    name: "Whirlpool",
    logo: "/brands/whirlpool.png",
    description:
      "A household name for durable and energy-efficient appliances for over a century.",
    features: [
      "Adaptive wash and dry technology",
      "Energy Star certified products",
      "Advanced water filtration systems",
    ],
    appliances: ["Refrigerators", "Dishwashers", "Washing Machines", "Dryers"],
  },
  {
    name: "Dacor Appliances",
    logo: "/brands/dacor.png",
    description:
      "Dacor is renowned for its luxury kitchen appliances, blending performance with modern aesthetics.",
    features: [
      "Smart oven controls",
      "Professional-grade cooktops",
      "Elegant stainless steel finishes",
    ],
    appliances: ["Ovens", "Cooktops", "Refrigerators", "Dishwashers"],
  },
  {
    name: "Bosch",
    logo: "/brands/bosch-logo.png",
    description:
      "Bosch is synonymous with German engineering, offering high-performance kitchen and laundry appliances.",
    features: [
      "Silent dishwashers with advanced drying",
      "Precision cooking technology",
      "Highly durable materials",
    ],
    appliances: ["Dishwashers", "Refrigerators", "Washing Machines", "Ovens"],
  },
  {
    name: "Electrolux",
    logo: "/brands/electrolux.webp",
    description:
      "Electrolux specializes in high-end, energy-efficient appliances with advanced cooking and cooling technology.",
    features: [
      "Induction cooking for fast heat",
      "Self-cleaning oven features",
      "Frost-free refrigeration",
    ],
    appliances: ["Ovens", "Cooktops", "Refrigerators", "Dishwashers"],
  },
  {
    name: "Maytag",
    logo: "/brands/maytag.png",
    description:
      "Maytag is known for its powerful and reliable home appliances built to handle heavy-duty tasks.",
    features: [
      "Commercial-grade washing machines",
      "Powerful motor-driven dishwashers",
      "Long-lasting and durable design",
    ],
    appliances: ["Washers", "Dryers", "Dishwashers", "Refrigerators"],
  },
  {
    name: "Frigidaire",
    logo: "/brands/frigidaire.png",
    description:
      "Frigidaire is a trusted name for innovative cooling and kitchen appliances with energy-efficient features.",
    features: [
      "Smudge-proof stainless steel finishes",
      "Efficient cooling technology",
      "Air purification in refrigerators",
    ],
    appliances: ["Refrigerators", "Ovens", "Dishwashers", "Freezers"],
  },
  {
    name: "GE Appliances",
    logo: "/brands/gee.webp",
    description:
      "A pioneer in home appliances, GE offers smart and high-quality solutions for every household.",
    features: [
      "Smart home connectivity with voice control",
      "Advanced water filtration in refrigerators",
      "Industry-leading warranties",
    ],
    appliances: ["Refrigerators", "Ranges", "Microwaves", "Washers & Dryers"],
  },
];

const Brands = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#ce360b] mb-3"
        >
          Trusted Appliance Brands We Service
          <div className="h-[2px] w-24 bg-blue-700 mb-4 mx-auto mt-2"></div>
        </motion.h1>

        <p className="text-[#002554] mt-4 max-w-3xl mx-auto text-xl">
          We provide expert repair services for the top appliance brands. Our
          technicians are trained to handle a variety of home appliances,
          ensuring quality and reliability.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 text-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-32 h-32 object-contain "
              />
              {/* <h3 className="text-xl font-semibold text-gray-800">
                {brand.name}
              </h3> */}
              <p className="text-[#002554] text-xl mt-2 text-left">
                {brand.description}
              </p>

              <div className="mt-4 text-left w-full">
                <p className="text-[#002554] font-semibold text-xl">
                  Key Features:
                </p>
                <ul className="list-disc list-inside text-[#002554] text-l">
                  {brand.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 text-left w-full">
                <p className="text-[#002554] font-semibold text-xl">
                  Appliances We Repair:
                </p>
                <ul className="list-disc list-inside text-[#002554] text-l">
                  {brand.appliances.map((appliance, i) => (
                    <li key={i}>{appliance}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 hover:scale-105"
          >
            Schedule a Repair
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;
