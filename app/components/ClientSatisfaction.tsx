"use client";

import { FaSmile, FaAward, FaShieldAlt } from "react-icons/fa";

const StatsSection = () => {
  return (
    <section className="bg-[#ce360b] py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
        {/* Happy Customers */}
        <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-white pb-6 md:pb-0">
          <FaSmile size={50} className="mb-4" />
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-2xl">Happy Customers</p>
        </div>

        {/* Customer Ratings */}
        <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-white pb-6 md:pb-0">
          <FaAward size={50} className="mb-4" />
          <h3 className="text-3xl font-bold">9/10</h3>
          <p className="text-2xl">Customers Rated</p>
        </div>

        {/* Warranty */}
        <div className="flex flex-col items-center">
          <FaShieldAlt size={50} className="mb-4" />
          <h3 className="text-3xl font-bold">100%</h3>
          <p className="text-2xl">Warranty</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
