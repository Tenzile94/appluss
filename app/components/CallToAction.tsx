import Link from "next/link";
const CallToAction = () => {
  return (
    <section className="bg-gray-100 py-10 my-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800">
            Need Immediate Appliance Assistance?
          </h2>
          <p className="text-gray-600 mt-2 text-xl">
            Our expert technicians are ready to restore your appliances to peak
            performance. Contact us today for fast and reliable service.
          </p>
        </div>
        <Link
          href="tel: (571) 596-09-03"
          className="bg-red-600 text-white px-6 py-3 text-xl  font-semibold rounded-lg shadow-lg hover:bg-red-700 text transition duration-300"
        >
          Call Us Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
