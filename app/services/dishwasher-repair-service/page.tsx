"use client";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const dishwasherProblems = [
  {
    title: "🌀 Dishwasher Not Draining",
    description:
      "If your dishwasher isn't draining properly, it could be due to a clogged filter, faulty drain pump, or blocked hose.",
    solution:
      "We inspect and clean drainage components to restore proper water flow.",
    image: "/images/dishwasher/dishwasher6.jpeg",
  },
  {
    title: "💦 Dishwasher Leaking Water",
    description:
      "Leaks can result from a damaged door gasket, loose connections, or faulty pump seals.",
    solution:
      "We identify the source of the leak and replace any defective parts to prevent water damage.",
    image: "/images/dishwasher/dishwasher2.jpeg",
  },
  {
    title: "🔊 Dishwasher Making Loud Noises",
    description:
      "Unusual noises may come from a malfunctioning motor, loose spray arms, or worn bearings.",
    solution:
      "We inspect and replace noisy components to ensure smooth operation.",
    image: "/images/dishwasher/dishwasher3.jpeg",
  },
  {
    title: "⚡ Dishwasher Won't Start",
    description:
      "Power issues may be caused by a faulty door latch, control board failure, or wiring problems.",
    solution:
      "We diagnose electrical faults and repair or replace defective components to restore functionality.",
    image: "/images/dishwasher/dishwasher4.jpeg",
  },
  {
    title: "🍽️ Dishes Not Getting Clean",
    description:
      "Poor cleaning performance can be due to clogged spray arms, a broken detergent dispenser, or hard water buildup.",
    solution:
      "We clean or replace spray arms, inspect water flow, and ensure detergent is properly dispensed.",
    image: "/images/dishwasher/dishwasher5.jpeg",
  },
];

const DishwasherRepairService = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Dishwasher Repair Information */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-6">
              Dishwasher Repair Services{" "}
              <Image
                src="/icons/dishwasher.png"
                width={40}
                height={40}
                alt="Dishwasher repair"
              />
            </h2>
            <p className="text-gray-600 text-2xl leading-relaxed">
              A malfunctioning dishwasher can disrupt your daily routine. Our
              skilled technicians repair all major dishwasher brands and models,
              ensuring your appliance runs efficiently.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>✅ Fast and professional service</li>
              <li>✅ Repairs for built-in and portable dishwashers</li>
              <li>✅ Transparent pricing with no hidden fees</li>
              <li>✅ Warranty-backed repairs</li>
              <li>✅ Same-day service available</li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <ContactForm />
        </div>

        {/* Problems and Solutions Section */}
        <div className="container mx-auto px-4">
          <div className="text-left my-20">
            <h2 className="text-3xl font-bold text-blue-700">
              Common Dishwasher Problems & Solutions
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              We diagnose and fix various dishwasher issues. Here are some of
              the most common problems we resolve.
            </p>
          </div>

          {/* Alternating Layout */}
          {dishwasherProblems.map((problem, index) => (
            <div
              key={index}
              className={`flex flex-col  lg:flex-row justify-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 mb-20`}
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2 p-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {problem.title}
                </h3>
                <p className="text-xl text-gray-600 mt-2">
                  {problem.description}
                </p>
                <p className="text-xl mt-2 font-medium text-gray-700">
                  ✅ {problem.solution}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 flex flex-col lg:flex-row gap-2">
                <div className="w-full  h-[500px] relative group overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    width={400}
                    height={300}
                    className="w-full h-full rounded-lg shadow-md object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-blue-700">
            Need Expert Washer Repair?
          </h3>
          <p className="text-gray-700 mt-2 text-xl">
            Contact us today for professional and reliable washer repair
            services!
          </p>
          <Link
            href="tel:(571)596-09-03"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Call Us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DishwasherRepairService;
