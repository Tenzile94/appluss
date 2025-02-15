"use client";

import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto px-4 bg-white rounded-lg shadow-md py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">
          At Applus Appliance Repair Services, your privacy is important to us.
          This Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you interact with our website and services.
          By using our Services, you agree to the practices described in this
          policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We may collect the following types of information when you use our
          Services:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>
            Personal Information: Name, email address, phone number, and mailing
            address when you fill out forms on our website.
          </li>
          <li>
            Payment Information: Credit card details and billing information for
            processing transactions securely.
          </li>
          <li>
            Technical Data: IP address, browser type, operating system, and
            device information.
          </li>
          <li>
            Cookies and Usage Data: Information about your interactions with our
            website, such as pages visited and time spent.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          The information we collect is used to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Provide and improve our Services.</li>
          <li>Process payments and schedule appointments.</li>
          <li>Send important updates and promotional materials.</li>
          <li>Respond to your inquiries and provide customer support.</li>
          <li>Analyze website usage to enhance user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We do not sell, rent, or trade your personal information. However, we
          may share your information with trusted third parties for the
          following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Payment processors to complete transactions securely.</li>
          <li>
            Service providers who assist with website operations and analytics.
          </li>
          <li>
            Compliance with legal obligations or to protect our rights and
            property.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          4. Data Security
        </h2>
        <p className="text-gray-600 mb-4">
          We implement industry-standard security measures to protect your
          information from unauthorized access, disclosure, or destruction.
          However, no method of transmission over the internet is completely
          secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          5. Cookies
        </h2>
        <p className="text-gray-600 mb-4">
          Our website uses cookies to enhance your browsing experience. Cookies
          are small files stored on your device that help us analyze website
          traffic and remember your preferences. You can manage your cookie
          settings through your browser.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          6. Your Rights
        </h2>
        <p className="text-gray-600 mb-4">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections to inaccurate or incomplete information.</li>
          <li>Opt out of receiving promotional communications.</li>
          <li>
            Request the deletion of your personal data, subject to legal
            requirements.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date. We encourage you to
          review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          8. Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us:
        </p>
        <ul className="text-gray-600">
          <li>
            Email:{" "}
            <Link
              href="mailto:privacy@applusrepair.com"
              className="text-blue-600 hover:underline"
            >
              applusappliance@gmail.com
            </Link>
          </li>
          <li>
            Phone:{" "}
            <Link
              href="tel:1234567890"
              className="text-blue-600 hover:underline"
            >
              (571) 596-09-03
            </Link>
          </li>
          <li>Address: 456 Appliance Repair Avenue, Your City, USA 12345</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">
          Last updated: February 10, 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
