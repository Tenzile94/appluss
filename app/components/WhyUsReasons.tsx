import {
  FaTools,
  FaClock,
  FaDollarSign,
  FaShieldAlt,
  FaStar,
  FaThumbsUp,
  FaCogs,
  FaCalendarCheck,
} from "react-icons/fa";

const greatReasons = [
  {
    icon: <FaTools className="text-2xl text-white" />,
    title: "Expert Technicians",
    description: "Certified specialists ensuring precision repairs.",
  },
  {
    icon: <FaClock className="text-2xl text-white" />,
    title: "Same-Day Service",
    description: "Fast, same-day repairs to keep your home running smoothly.",
  },
  {
    icon: <FaDollarSign className="text-2xl text-white" />,
    title: "Upfront & Honest Pricing",
    description: "No hidden fees—transparent pricing before repairs begin.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-white" />,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for peace of mind.",
  },
  {
    icon: <FaStar className="text-2xl text-white" />,
    title: "Quality Workmanship",
    description: "Top-quality parts and techniques for long-lasting repairs.",
  },
  {
    icon: <FaThumbsUp className="text-2xl text-white" />,
    title: "Customer Satisfaction Guaranteed",
    description: "100% satisfaction guarantee—we make it right.",
  },
  {
    icon: <FaCogs className="text-2xl text-white" />,
    title: "Service for All Major Brands",
    description: "Expertise in repairing appliances from all major brands.",
  },
  {
    icon: <FaCalendarCheck className="text-2xl text-white" />,
    title: "Convenient Scheduling",
    description: "Flexible appointments to fit your busy lifestyle.",
  },
];

const GreatReasons = () => {
  return (
    <section className="container mx-auto px-6 mt-24">
      <div className="mt-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#ce360b] mb-2">
            {" "}
            Why Choose Applus Appliance ?
          </h2>
          <div className="h-[2px] w-20 bg-blue-700 mb-4 mx-auto "></div>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white text-lg">
          {greatReasons.map((reason, index) => (
            <li
              key={index}
              className="flex items-center bg-[#05024eed] p-4 rounded-lg"
            >
              <div className="mr-4">{reason.icon}</div>
              <div>
                <h3 className="font-semibold">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GreatReasons;
