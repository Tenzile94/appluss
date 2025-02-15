import Link from "next/link";
import Image from "next/image";
const AboutUs = () => {
  return (
    <section id="about" className="py-16 ">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-[#ce360b] mb-2">About Us</h2>
          <div className="h-[2px] w-16 bg-blue-700 mb-4"></div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Your Trusted Partner in Appliance Repair
          </h3>
          <div className="lg:block hidden">
            <p className="text-gray-600 mb-4 leading-normal  text-2xl">
              Established in 2024, our mission is to bring reliable, fast, and
              professional appliance repair services to your doorstep. With a
              passion for fixing what others deem unrepairable, we’ve built a
              reputation for excellence and trust.
            </p>
            <p className="text-gray-600 mb-4 leading-normal text-2xl">
              We understand how important your home appliances are to your daily
              life. Whether it’s a broken refrigerator, a malfunctioning washing
              machine, or a non-heating oven, we’re here to ensure your
              appliances work like new again.
            </p>
            <p className="text-gray-600 leading-normal text-2xl">
              At{" "}
              <span className="text-blue-900 font-semibold">
                Applus Appliance Services
              </span>
              , we combine expertise, transparency, and customer care to deliver
              the best solutions for your needs.
            </p>
          </div>
          <div className="block lg:hidden">
            <p className="text-gray-600 mb-4 leading-normal text-2xl">
              Established in 2024, Applus Appliance Services is dedicated to
              fast, reliable, and professional repairs. We specialize in fixing
              appliances others deem unrepairable, ensuring your essentials work
              like new. With expertise, transparency, and customer care, we
              deliver trusted solutions for your home.
            </p>
          </div>

          <div className="mt-6">
            <Link
              href="/about"
              className="inline-block text-xl bg-[#ce360b] hover:bg-[#992201] hover:tracking-wider  text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              See More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/app-ser.jpg"
            width={800}
            height={400}
            alt="Appliance Repair Service"
            className=" h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
