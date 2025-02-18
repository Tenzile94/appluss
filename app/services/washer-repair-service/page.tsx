"use client";
import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const washerProblems = [
  {
    title: "🚿 Washer Not Spinning",
    description:
      "If your washer drum isn't spinning, it may be due to a broken drive belt, faulty motor, or lid switch issue.",
    solution:
      "We inspect and replace defective components to restore proper drum movement.",
    image: "/images/washer/washer1.jpeg",
    image2: "/images/washer/washer2.jpeg",
  },
  {
    title: "💧 Washer Leaking Water",
    description:
      "Leaks can result from damaged hoses, faulty pumps, or a worn door seal.",
    solution:
      "We check for leaks, replace defective parts, and ensure proper water drainage.",
    image: "/images/washer/washer3.jpeg",
    image2: "/images/washer/washer4.jpeg",
  },
  {
    title: "🔊 Washer Making Loud Noises",
    description:
      "Strange noises often come from worn bearings, defective shock absorbers, or loose drum components.",
    solution:
      "We inspect, tighten, or replace noisy components to ensure smooth operation.",
    image: "/images/washer/washer5.jpeg",
    image2: "/images/washer/washer6.jpeg",
  },
  {
    title: "⚡ Washer Won't Start",
    description:
      "Power issues may be caused by a faulty control board, broken start switch, or defective timer.",
    solution:
      "We diagnose electrical faults and replace defective parts to restore power.",
    image: "/images/washer/washer7.jpeg",
    image2: "/images/washer/washer8.jpeg",
  },
  {
    title: "🌊 Washer Not Draining",
    description:
      "A clogged drain pump, blocked filter, or damaged drain hose can prevent water from draining.",
    solution:
      "We clean and repair drainage components to restore proper function.",
    image: "/images/washer/washer9.jpeg",
    image2: "/images/washer/washer10.jpeg",
  },
  {
    title: "⚙️ Washer Drum Not Agitating",
    description:
      "A broken agitator, faulty drive motor, or worn-out transmission can cause the washer drum to stop moving properly.",
    solution:
      "We inspect and replace damaged agitator components to ensure proper washing cycles.",
    image: "/images/washer/washer11.jpeg",
    image2: "/images/washer/washer12.jpeg",
  },
  {
    title: "⏳ Washer Taking Too Long to Wash",
    description:
      "Issues with the timer, water inlet valve, or control board can result in unusually long wash cycles.",
    solution:
      "We troubleshoot the timer system and optimize cycle times to ensure efficiency.",
    image: "/images/washer/washer13.jpeg",
    image2: "/images/washer/washer14.jpeg",
  },
  {
    title: "🔥 Washer Overheating",
    description:
      "An overheating washer can be caused by a faulty thermostat, blocked vents, or excessive load size.",
    solution:
      "We diagnose overheating causes and replace components to prevent damage and improve performance.",
    image: "/images/washer/washer15.jpeg",
    image2: "/images/washer/washer16.jpeg",
  },
];

const WasherRepairService = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Washer Repair Information */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-6">
              Washer Repair Services{" "}
              <Image
                src="/icons/laundry-machine.png"
                width={40}
                height={40}
                alt="Washer repair"
              />
            </h2>
            <p className="text-gray-600 text-2xl leading-relaxed">
              A malfunctioning washer can disrupt your daily routine. Our
              skilled technicians repair all major washer brands and models,
              ensuring your appliance runs efficiently.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>✅ Fast and professional service</li>
              <li>✅ Repairs for top-load and front-load washers</li>
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
              Common Washer Problems & Solutions
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              We diagnose and fix various washer issues. Here are some of the
              most common problems we resolve.
            </p>
          </div>

          {/* Alternating Layout */}
          {washerProblems.map((problem, index) => (
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

export default WasherRepairService;
