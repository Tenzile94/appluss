"use client";
import ContactForm from "@/app/components/ContactForm";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
const dryerImages = [
  "/images/dryer/dryer21.jpeg",
  "/images/dryer/dryer22.jpeg",
  "/images/dryer/dryer23.jpeg",
  "/images/dryer/dryer24.jpeg",
  "/images/dryer/dryer25.jpeg",
  "/images/dryer/dryer26.jpeg",
  "/images/dryer/dryer27.jpeg",
  "/images/dryer/dryer28.jpeg",
  "/images/dryer/dryer29.jpeg",
  "/images/dryer/dryer30.jpeg",
  "/images/dryer/dryer31.jpeg",
  "/images/dryer/dryer32.jpeg",
  "/images/dryer/dryer33.jpeg",
  "/images/dryer/dryer34.jpeg",
  "/images/dryer/dryer35.jpeg",
  "/images/dryer/dryer36.jpeg",
  "/images/dryer/dryer37.jpeg",
  "/images/dryer/dryer38.jpeg",
  "/images/dryer/dryer39.jpeg",
  "/images/dryer/dryer40.jpeg",
];

const dryerProblems = [
  {
    title: "🔥 Dryer Not Heating",
    description:
      "If your dryer isn't producing heat, it could be due to a faulty heating element, thermal fuse, or thermostat.",
    solution:
      "We diagnose and replace defective heating components to restore proper drying function.",
    image: "/images/dryer/dryer1.jpeg",
    image2: "/images/dryer/dryer2.jpeg",
  },
  {
    title: "💨 Dryer Not Spinning",
    description:
      "A broken drive belt, worn-out motor, or faulty idler pulley can prevent the dryer drum from spinning.",
    solution:
      "We inspect and replace worn-out belts, motors, and pulleys to restore drum rotation.",
    image: "/images/dryer/dryer3.jpeg",
    image2: "/images/dryer/dryer4.jpeg",
  },
  {
    title: "🔊 Dryer Making Loud Noises",
    description:
      "Unusual noises can come from worn-out drum rollers, damaged bearings, or a defective blower wheel.",
    solution:
      "We inspect and replace noisy components to ensure smooth and quiet operation.",
    image: "/images/dryer/dryer5.jpeg",
    image2: "/images/dryer/dryer6.jpeg",
  },
  {
    title: "⚡ Dryer Won't Start",
    description:
      "If your dryer isn't starting, it may be due to a faulty start switch, blown fuse, or power supply issue.",
    solution:
      "We test and repair electrical components to restore power and functionality.",
    image: "/images/dryer/dryer7.jpeg",
    image2: "/images/dryer/dryer8.jpeg",
  },
  {
    title: "🌫️ Dryer Takes Too Long to Dry",
    description:
      "A clogged vent, faulty thermostat, or damaged heating element can slow down drying times.",
    solution:
      "We clean vents, check thermostats, and replace heating elements to improve drying efficiency.",
    image: "/images/dryer/dryer9.jpeg",
    image2: "/images/dryer/dryer10.jpeg",
  },
  {
    title: "🚪 Dryer Door Won't Close Properly",
    description:
      "A misaligned door latch, faulty hinge, or worn-out gasket can prevent the dryer door from closing securely.",
    solution:
      "We adjust, repair, or replace door components to ensure a proper seal and prevent heat loss.",
    image: "/images/dryer/dryer11.jpeg",
    image2: "/images/dryer/dryer38.jpeg",
  },
  {
    title: "⚙️ Dryer Overheating",
    description:
      "Blocked vents, a malfunctioning thermostat, or a faulty thermal fuse can cause your dryer to overheat.",
    solution:
      "We diagnose and fix overheating issues to protect your appliance and clothes from damage.",
    image: "/images/dryer/dryer13.jpeg",
    image2: "/images/dryer/dryer14.jpeg",
  },
  {
    title: "🔌 Dryer Shutting Off Mid-Cycle",
    description:
      "A failing motor, overheating, or faulty sensor could be causing your dryer to stop before completing a cycle.",
    solution:
      "We identify the issue and repair the necessary components to keep your dryer running smoothly.",
    image: "/images/dryer/dryer15.jpeg",
    image2: "/images/dryer/dryer16.jpeg",
  },
  {
    title: "📊 Dryer Display Panel Not Working",
    description:
      "A faulty control board, loose wiring, or power issue may cause the display panel to become unresponsive.",
    solution:
      "We test and repair control boards, reconnect wiring, and ensure the display panel functions correctly.",
    image: "/images/dryer/dryer17.jpeg",
    image2: "/images/dryer/dryer18.jpeg",
  },
  {
    title: "🌪️ Dryer Producing Burning Smell",
    description:
      "A clogged lint filter, overheating motor, or electrical fault can cause a burning smell during operation.",
    solution:
      "We inspect and clean the lint filter, check motor safety, and fix electrical issues to prevent hazards.",
    image: "/images/dryer/dryer19.jpeg",
    image2: "/images/dryer/dryer20.jpeg",
  },
];

const DryerRepairService = () => {
  const [more, setMore] = useState(true);
  function handleClick() {
    setMore((prev) => !prev);
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Dryer Repair Information */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-6">
              Dryer Repair Services{" "}
              <Image
                src="/icons/drying-machine.png"
                width={40}
                height={40}
                alt="Dryer repair"
              />
            </h2>
            <p className="text-gray-600 text-2xl leading-relaxed">
              A malfunctioning dryer can cause inconvenience and delay laundry
              tasks. Our expert technicians specialize in diagnosing and
              repairing all major dryer brands and models.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>✅ Fast and professional service</li>
              <li>✅ Repairs for electric and gas dryers</li>
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
              Common Dryer Problems & Solutions
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              We diagnose and fix a wide range of dryer issues. Here are some of
              the most common problems we resolve.
            </p>
          </div>

          {/* Alternating Layout */}
          {dryerProblems.map((problem, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
                <div className="w-full lg:w-1/2 h-[400px] relative group overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    width={400}
                    height={300}
                    className="w-full h-full rounded-lg shadow-md object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="w-full lg:w-1/2 h-[400px] relative group overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={problem.image2}
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
        <div>
          <div className="container mx-auto px-4 flex flex-col items-center ">
            {" "}
            <div
              className={`grid grid-cols-1 lg:grid-cols-3 gap-4 py-8 ${
                more ? "hidden" : ""
              }`}
            >
              {dryerImages.map((dryer, index) => (
                <div key={index} className="h-[300px]  rounded-md">
                  <Image
                    src={dryer}
                    width={400}
                    height={200}
                    alt="dryer"
                    className="w-full h-full object-cover rounded-md"
                  ></Image>
                </div>
              ))}
            </div>
            <button
              onClick={handleClick}
              className="text-2xl font-bold text-red-500 p-3 "
            >
              {more ? "See more ⤵" : "See Less ⤴"}
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-blue-700">
            Need Professional Refrigerator Repair?
          </h3>
          <p className="text-gray-700 mt-2 text-xl">
            Contact us today for fast and reliable refrigerator repair services!
          </p>
          <Link
            href="tel:(571)596-09-03"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Call Us Now{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DryerRepairService;
