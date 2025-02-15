import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-[#ce360b] mb-2">About Us</h2>
          <div className="h-[2px] w-16 bg-blue-700 mb-4"></div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Your Trusted Partner in Appliance Repair
          </h3>
          <p className="text-gray-600 mb-4 leading-normal text-2xl">
            Established in 2024, our mission is to deliver reliable, fast, and
            professional appliance repair services. We’re passionate about
            bringing life back to appliances that others may consider beyond
            repair. Over the years, we’ve earned a reputation for dependability,
            precision, and unmatched customer service.
          </p>
          <p className="text-gray-600 mb-4 leading-normal text-2xl">
            We understand the essential role appliances play in your daily life.
            A broken refrigerator, malfunctioning washing machine, or
            non-operational oven can disrupt your routine. That’s why we are
            dedicated to providing prompt, effective solutions that restore your
            appliances to peak performance as quickly as possible.
          </p>
          <p className="text-gray-600 mb-4 leading-normal text-2xl">
            At{" "}
            <span className="text-blue-900 font-semibold">
              Applus Appliance Services
            </span>
            , we don’t just fix appliances—we offer peace of mind. By combining
            expert knowledge, cutting-edge tools, and a customer-first approach,
            we ensure every repair is carried out with precision and care. Our
            team also prioritizes transparency and honest communication, so
            you’re always informed about the work being done.
          </p>
          <p className="text-gray-600 leading-normal text-2xl">
            Beyond repairs, we’re here to guide you with tips and insights to
            maintain your appliances for years to come. Trust us to be your
            go-to partner for all appliance-related needs, ensuring your home
            stays functional, efficient, and stress-free.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/app-ser.jpg"
            width={800}
            height={400}
            alt="Appliance Repair Service"
            className="h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
