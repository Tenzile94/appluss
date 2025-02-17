"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

interface NavItem {
  title: string;
  path: string;
  submenu?: {
    title: string;
    path: string;
  }[];
}

const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/#services",
    submenu: [
      {
        title: "Refrigerator Repair",
        path: "/services/refrigerator-repair-service",
      },
      { title: "Washer Repair", path: "/services/washer-repair-service" },
      { title: "Dryer Repair", path: "/services/dryer-repair-service" },
      {
        title: "Dishwasher Repair",
        path: "/services/dishwasher-repair-service",
      },
      { title: "Oven Repair", path: "/services/oven-repair-service" },
      { title: "Microwave Repair", path: "/services/microwave-repair-service" },
    ],
  },
  {
    title: "Brands",
    path: "/brands",
    // submenu: [
    //   { title: "Samsung", path: "/brands/samsung" },
    //   { title: "LG", path: "/brands/lg" },
    //   { title: "Whirlpool", path: "/brands/whirlpool" },
    //   { title: "GE", path: "/brands/ge" },
    // ],
  },
  {
    title: "FAQ",
    path: "/faq",
    // submenu: [
    //   { title: "Area 1", path: "/service-areas/area1" },
    //   { title: "Area 2", path: "/service-areas/area2" },
    //   { title: "Area 3", path: "/service-areas/area3" },
    // ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        {/* Top Menu */}
        <div className="  bg-[#111827] text-white py-2 fixed top-0 left-0 right-0 z-20">
          <div className="container mx-auto px-4 py-2 flex flex-col-reverse lg:flex-row justify-between items-start">
            <div className="flex items-center space-x-4">
              <Link
                href="applusappliance@gmail.com"
                className="flex items-center hover:text-white font-semibold text-ll"
              >
                <FaEnvelope className="mr-2" />
                <span>applusappliance@gmail.com</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
            <div className="flex items-center ">
              <Link
                href="tel:(571) 596-09-03"
                className="flex items-center hover:text-white font-semibold text-l"
              >
                <FaPhone className="mr-2" />
                <span>Call Now: (571) 596-09-03</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-transparent shadow-lg relative mt-24 lg:mt-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" className="text-xl font-bold text-gray-800">
                <Image
                  src="/logo.svg"
                  width={180}
                  height={80}
                  alt="logo"
                  className="  w-[180px] h-20 object-contain"
                ></Image>{" "}
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  {isMobileMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <div key={item.title} className="relative group">
                    <Link
                      href={item.path}
                      className="text-xl font-semibold text-gray-900 hover:text-blue-600 py-2 group-hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.path}
                            className="block px-4 py-4 text-xl text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden ${
                isMobileMenuOpen ? "block" : "hidden"
              } pb-4`}
            >
              {navItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.path}
                    className="block py-2 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.path}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
