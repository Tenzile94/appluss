"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
interface Services {
  src: string;
  title: string;
  description: string;
  link: string;
}

const services: Services[] = [
  {
    src: "/icons/fridge.png",
    title: "Refrigerator Repair",
    description: "Expert repair for all refrigerator brands",
    link: "/services/refrigerator-repair-service",
  },
  {
    src: "/icons/laundry-machine.png",
    title: "Washer Repair",
    description: "Professional washing machine repair services",
    link: "/services/washer-repair-service",
  },
  {
    src: "/icons/drying-machine.png",

    title: "Dryer Repair",
    description: "Fast and reliable dryer repair",
    link: "/services/dryer-repair-service",
  },
  {
    src: "/icons/stove.png",

    title: "Oven Repair",
    description: "Professional oven and stove repair",
    link: "/services/oven-repair-service",
  },
  {
    src: "/icons/dishwasher.png",

    title: "Dishwasher Repair",
    description: "Expert dishwasher repair and maintenance",
    link: "/services/dishwasher-repair-service",
  },
  {
    src: "/icons/oven.png",

    title: "Microwave Repair",
    description: "Quick and efficient microwave repairs",
    link: "/services/microwave-repair-service",
  },
];

const Services = () => {
  return (
    <section className="mt-[80vh] lg:mt-[230px] py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-36">
          <h2 className="text-5xl font-bold text-[#ce360b] mb-2">
            {" "}
            Our Services
          </h2>
          <div className="h-[2px] w-16 bg-blue-700 mb-4 mx-auto "></div>
          <p className="text-2xl text-[#002554] px-2 lg:px-16  hidden lg:block">
            To keep your home functioning properly, we take pride in providing
            same-day appliance repair services. Our staff of knowledgeable
            specialists guarantees effective and dependable repairs for any
            necessary appliance, including your oven, washing machine,
            refrigerator, and more.{" "}
          </p>
          <p className="block lg:hidden text-2xl text-[#002554">
            We take pride in offering same-day appliance repairs to keep your
            home running smoothly. Our expert technicians ensure fast, reliable
            service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white pt-16 pb-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow text-center mb-3 "
            >
              <div className="text-blue-600 mb-4 absolute top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] p-4 rounded-full  shadow-sm shadow-blue-400">
                <Image
                  src={service.src}
                  width={70}
                  height={70}
                  alt="icon"
                ></Image>
              </div>
              <h3 className="text-2xl font-semibold text-[#002554] mb-2">
                {service.title}
              </h3>
              <p className="text-[#002554] mb-4 text-xl">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="flex flex-row justify-center items-center  text-xl font-semibold text-[#ce360b]  px-6 py-2 rounded-lg hover:tracking-wider transition-all duration-500"
              >
                See Details <FaCaretRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
