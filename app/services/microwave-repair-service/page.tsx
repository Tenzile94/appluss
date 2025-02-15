"use client";
import ContactForm from "@/app/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const microwaveProblems = [
  {
    title: "⚡ Microwave Not Heating",
    description:
      "If your microwave isn't heating, it could be due to a faulty magnetron, capacitor, or diode.",
    solution:
      "We inspect and replace defective components to restore proper heating functionality.",
    image: "/images/microwave/microwave6.jpg",
  },
  {
    title: "🔊 Microwave Making Loud Noises",
    description:
      "Unusual noises may come from a malfunctioning turntable motor, cooling fan, or magnetron.",
    solution:
      "We identify and fix noisy components to ensure smooth operation.",
    image: "/images/microwave/microwave2.webp",
  },
  {
    title: "🔥 Microwave Sparking Inside",
    description:
      "Sparks inside the microwave could be caused by a damaged waveguide cover, metal objects, or a failing high-voltage diode.",
    solution:
      "We diagnose and replace damaged parts to prevent electrical hazards.",
    image: "/images/microwave/microwave3.jpg",
  },
  {
    title: "🚪 Microwave Door Won't Close Properly",
    description:
      "A loose or misaligned door latch can prevent the microwave from operating safely.",
    solution:
      "We adjust or replace door components to ensure a secure and safe latch.",
    image: "/images/microwave/microwave4.jpg",
  },
  {
    title: "⏳ Microwave Runs but Doesn't Stop",
    description:
      "If your microwave continues running even after the timer stops, it may be due to a faulty door switch or control board issue.",
    solution:
      "We inspect and repair the control board or switch to restore normal operation.",
    image: "/images/microwave/microwave5.webp",
  },
];

const MicrowaveRepairService = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Microwave Repair Information */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-6">
              Microwave Repair Services{" "}
              <Image
                src="/icons/oven.png"
                width={40}
                height={40}
                alt="Microwave repair"
              />
            </h2>
            <p className="text-gray-600 text-2xl leading-relaxed">
              A malfunctioning microwave can disrupt your daily routine. Our
              skilled technicians repair all major microwave brands and models,
              ensuring your appliance works safely and efficiently.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>✅ Fast and professional service</li>
              <li>✅ Repairs for countertop and built-in microwaves</li>
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
              Common Microwave Problems & Solutions
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              We diagnose and fix various microwave issues. Here are some of the
              most common problems we resolve.
            </p>
          </div>

          {/* Alternating Layout */}
          {microwaveProblems.map((problem, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row justify-center ${
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
                <div className="w-full  h-[350px] relative group overflow-hidden ">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    width={300}
                    height={250}
                    className="w-full h-full rounded-md shadow-md object-contain transition-transform duration-300 group-hover:scale-105"
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
            Need Expert Microwave Repair?
          </h3>
          <p className="text-gray-700 mt-2 text-xl">
            Contact us today for professional and reliable microwave repair
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

export default MicrowaveRepairService;
