"use client";
import ContactForm from "@/app/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const ovenProblems = [
  {
    title: "🔥 Oven Not Heating Properly",
    description:
      "If your oven does not heat or takes too long to warm up, it may be due to a faulty heating element, broken thermostat, or electrical wiring issues.",
    solution:
      "We diagnose the root cause and replace faulty parts to restore full heating capacity.",
    image: "/images/oven/oven1.jpeg",
    image2: "/images/oven/oven2.jpeg",
  },
  {
    title: "⏳ Uneven Cooking or Baking Issues",
    description:
      "Does your food come out burnt on one side and raw on the other? This is often caused by damaged heating elements, a malfunctioning fan, or temperature sensor issues.",
    solution:
      "We check and calibrate your oven &apos; s temperature settings and replace damaged components.",
    image: "/images/oven/oven3.jpeg",
    image2: "/images/oven/oven4.jpeg",
  },
  {
    title: "⚡ Oven Won’t Turn On",
    description:
      "If your oven fails to start, the issue could be a tripped circuit breaker, a blown fuse, or a broken control panel.",
    solution:
      "Our technicians check all electrical connections and fix faulty wiring or switch problems.",
    image: "/images/oven/oven5.jpeg",
    image2: "/images/oven/oven6.jpeg",
  },
  {
    title: "🔥 Gas Oven Won’t Ignite",
    description:
      "A gas oven that won’t ignite can be due to a faulty igniter, clogged burner, or gas supply problems.",
    solution:
      "We safely clean and repair gas burners and replace defective igniters to restore function.",
    image: "/images/oven/oven7.jpeg",
    image2: "/images/oven/oven8.jpeg",
  },
  {
    title: "🔊 Strange Noises from the Oven",
    description:
      "A loud humming, buzzing, or clicking noise often indicates a broken fan motor, faulty igniter, or loose components.",
    solution: "We inspect and replace faulty parts to prevent further damage.",
    image: "/images/oven/oven9.jpeg",
    image2: "/images/oven/oven10.jpeg",
  },
  {
    title: "🚨 Oven Door Won’t Close Properly",
    description:
      "If your oven door doesn’t close completely, heat can escape, leading to uneven cooking and higher energy bills.",
    solution: "We repair or replace worn-out door hinges, seals, and latches.",
    image: "/images/oven/oven11.jpeg",
    image2: "/images/oven/oven12.jpeg",
  },
  {
    title: "💨 Oven Producing Smoke or Burning Smell",
    description:
      "If your oven emits smoke or an unusual burning smell, it could be due to food buildup, wiring issues, or a defective heating element.",
    solution:
      "We thoroughly clean and inspect the oven to remove blockages and replace burnt-out parts.",
    image: "/images/oven/oven13.jpeg",
    image2: "/images/oven/oven14.jpeg",
  },
];

const OvenRepairService = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Oven Repair Information */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-bold text-red-700 mb-4 flex items-center gap-6">
              Oven Repair Services{" "}
              <Image
                src="/icons/stove.png"
                width={40}
                height={40}
                alt="Oven repair"
              />
            </h2>
            <p className="text-gray-600 text-2xl leading-relaxed">
              Ovens are essential in every household, and a malfunction can
              disrupt your daily routine. We specialize in repairing all brands
              and models, ensuring your oven operates like new. Whether it
              &apos; s a heating issue, broken thermostat, or electrical fault,
              our experienced technicians can fix it.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>✅ Quick and reliable service</li>
              <li>✅ Repairs for gas & electric ovens</li>
              <li>✅ Affordable pricing with no hidden costs</li>
              <li>✅ Guaranteed work with warranty</li>
              <li>✅ Same-day service available</li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}

          <ContactForm />
        </div>
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-left my-20">
            <h2 className="text-3xl font-bold text-red-700">
              Common Oven Problems & Solutions
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              We specialize in diagnosing and fixing a wide range of oven
              problems. Here are some of the most common issues our customers
              face and how we solve them.
            </p>
          </div>

          {/* Alternating Layout */}
          {ovenProblems.map((problem, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 mb-12`}
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
                <div className="w-full lg:w-1/2 h-[400px] relative group overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    width={400}
                    height={300}
                    className="w-full  h-full rounded-lg shadow-md object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="w-full lg:w-1/2 h-[400px] relative group overflow-hidden rounded-lg shadow-md">
                  {" "}
                  <Image
                    src={problem.image2}
                    alt={problem.title}
                    width={400}
                    height={300}
                    className="w-full  h-full rounded-lg shadow-md object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action */}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-red-700">
            Need Professional Oven Repair?
          </h3>
          <p className="text-gray-700 mt-2 text-xl">
            Contact us today for fast and reliable oven repair services!
          </p>
          <Link
            href="tel: (571) 596-09-03"
            className="mt-4 inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 transition"
          >
            Call Us Now{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OvenRepairService;
