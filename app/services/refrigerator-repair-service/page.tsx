"use client";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const fridgeProblems = [
  {
    title: "❄️ Refrigerator Not Cooling",
    description:
      "If your refrigerator is not cooling properly, it could be due to a dirty condenser coil, malfunctioning thermostat, or faulty compressor.",
    solution:
      "We diagnose the root cause and repair or replace damaged components to restore efficient cooling.",
    image: "/images/fridge/fridge1.jpeg",
    image2: "/images/fridge/fridge2.jpeg",
  },
  {
    title: "💦 Water Leaking from Refrigerator",
    description:
      "A clogged or frozen defrost drain can cause water to leak inside or under your refrigerator.",
    solution:
      "We clear the drainage system, check for blockages, and ensure proper water flow.",
    image: "/images/fridge/fridge3.jpeg",
    image2: "/images/fridge/fridge4.jpeg",
  },
  {
    title: "🌀 Refrigerator Making Loud Noises",
    description:
      "Loud buzzing, humming, or rattling sounds usually come from a faulty evaporator fan, condenser fan, or a defective compressor.",
    solution:
      "Our technicians inspect the cooling system, lubricate necessary parts, and replace noisy components.",
    image: "/images/fridge/fridge5.jpeg",
    image2: "/images/fridge/fridge6.jpeg",
  },
  {
    title: "⚡ Refrigerator Won't Turn On",
    description:
      "If your fridge doesn't turn on, it might be due to a faulty start relay, control board failure, or power supply issues.",
    solution:
      "We test all electrical components, replace defective parts, and ensure proper power connections.",
    image: "/images/fridge/fridge7.jpeg",
    image2: "/images/fridge/fridge8.jpeg",
  },
  {
    title: "🌡️ Freezer is Cold, but Fridge is Warm",
    description:
      "This issue often results from a faulty air damper, evaporator fan, or temperature control board malfunction.",
    solution:
      "We balance the airflow between the fridge and freezer, replace defective components, and restore proper cooling.",
    image: "/images/fridge/fridge9.jpeg",
    image2: "/images/fridge/fridge10.jpeg",
  },
  {
    title: "🚪 Refrigerator Door Won’t Close Properly",
    description:
      "A loose, damaged, or misaligned refrigerator door seal can cause warm air to enter and reduce cooling efficiency.",
    solution:
      "We adjust, repair, or replace the gasket and hinges to ensure a perfect seal.",
    image: "/images/fridge/fridge11.jpeg",
    image2: "/images/fridge/fridge12.jpeg",
  },
  {
    title: "🧊 Ice Maker Not Working",
    description:
      "A non-functioning ice maker can be due to a clogged water line, faulty inlet valve, or broken ice maker assembly.",
    solution:
      "We clean and inspect the water lines, replace damaged components, and restore ice production.",
    image: "/images/fridge/fridge13.jpeg",
    image2: "/images/fridge/fridge14.jpeg",
  },
];

const RefrigeratorRepairService = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Refrigerator Repair Information */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-6">
              Refrigerator Repair Services{" "}
              <Image
                src="/icons/fridge.png"
                width={40}
                height={40}
                alt="Refrigerator repair"
              />
            </h2>
            <p className="text-gray-600 text-2xl leading-relaxed">
              A faulty refrigerator can cause food spoilage and unnecessary
              expenses. Our expert technicians specialize in repairing all major
              refrigerator brands and models, ensuring that your appliance is
              running efficiently.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>✅ Quick and reliable service</li>
              <li>
                ✅ Repairs for single-door, double-door, and side-by-side
                fridges
              </li>
              <li>✅ Affordable pricing with no hidden costs</li>
              <li>✅ Guaranteed work with warranty</li>
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
              Common Refrigerator Problems & Solutions
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              We diagnose and fix a wide range of refrigerator issues. Here are
              some of the most common problems we solve.
            </p>
          </div>

          {/* Alternating Layout */}
          {fridgeProblems.map((problem, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-center   ${
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

export default RefrigeratorRepairService;
