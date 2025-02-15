"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Features from "./Features";

const Banner = () => {
  return (
    <div
      className="relative h-[700px] lg:h-[90vh] bg-cover  bg-bottom lg:bg-right-top  bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(#00000038, #00000082), url(/appl2.png)",
      }}
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-cover bg-center lg:bg-right-top  bg-no-repeat" /> */}

      {/* Content Container */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-start  pt-24 items-start text-left">
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 w-full lg:max-w-[75%]"
        >
          Expert Appliance Repair Services You Can Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-200   mb-8 w-full  lg:max-w-[70%]"
        >
          Professional repairs for all major appliance brands with same-day
          service available
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col  justify-start lg:flex-row gap-4 items-start"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="red"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </motion.div>
            </div>
            <div>
              <p className="text-gray-100 font-bold text-2xl">Call us 24/7</p>
              <Link
                href="tel:(571) 596-09-03"
                className="text-gray-100 lg:text-white text-3xl font-bold hover:text-blue-300 transition-colors"
              >
                (571) 596-09-03
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300  hover:scale-105"
          >
            Schedule Service
          </Link>
        </motion.div>
      </div>

      {/* Add Features component */}
      <Features />
    </div>
  );
};

export default Banner;
