"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaAddressBook,
  FaMailBulk,
  FaCalendarWeek,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Company Logo"
              width={180}
              height={60}
              className="object-cover h-20 w-[180px]"
            />
          </Link>

          <p className="mt-4 text-gray-400 text-md leading-relaxed">
            Applus Appliance Repair Service provides expert repair services all
            time, covering a wide range of home appliances. We pride ourselves
            on exceptional customer service and guaranteed satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 pl-3">
            <li>
              <Link href="/" className="hover:underline text-gray-400 text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline text-gray-400 text-xl"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline text-gray-400 text-xl"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:underline text-gray-400 text-xl"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:underline text-gray-400 text-xl"
              >
                Terms of use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:underline text-gray-400 text-xl"
              >
                Privacy&Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 pl-3">
            <li>
              <Link
                href="/services/refrigerator-repair-service"
                className="hover:underline text-gray-400 text-xl"
              >
                Refrigerator Repair
              </Link>
            </li>
            <li>
              <Link
                href="/services/dishwasher-repair-service"
                className="hover:underline text-gray-400 text-xl"
              >
                Dishwasher Repair
              </Link>
            </li>
            <li>
              <Link
                href="/services/washer-repair-service"
                className="hover:underline text-gray-400 text-xl"
              >
                Washer Repair
              </Link>
            </li>
            <li>
              <Link
                href="/services/dryer-repair-service"
                className="hover:underline text-gray-400 text-xl"
              >
                Dryer Repair
              </Link>
            </li>
            <li>
              <Link
                href="/services/microwave-repair-service"
                className="hover:underline text-gray-400 text-xl"
              >
                Microwave Repair
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2 text-xl">
              <FaAddressBook className="text-xl " />
              44030 Gala Cir, Ashburn, VA 20147, USA
            </li>
            <li className="flex items-center gap-2 text-xl">
              <FaPhone className="text-xl " />
              (571) 596-09-03
            </li>
            <li className="flex items-center gap-2 text-xl">
              <FaCalendarWeek className="text-xl " />
              Mon - Sat: 9:00 AM - 6:00 PM
            </li>
            <li className="flex items-center gap-2 text-xl">
              <FaMailBulk className="text-xl " />
              applusappliance@gmail.com
            </li>
          </ul>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.1131090926333!2d-77.47875212456356!3d39.05833643719275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63c021cbed18d%3A0x7df3e49ee1a9a863!2s44030%20Gala%20Cir%2C%20Ashburn%2C%20VA%2020147%2C%20USA!5e0!3m2!1sen!2saz!4v1738870752679!5m2!1sen!2saz"
              width="100%"
              height="150"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2025 Applus Appliance Repair Service. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
