"use client";

import Link from "next/link";

const TermsOfUse = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto px-4 bg-white  py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Use</h1>

        <p className="text-gray-600 mb-4">
          Welcome to Applus Appliance Repair Services! These Terms of Use
          (Terms) govern your access to and use of our website, services, and
          products (collectively, the Services). By accessing or using our
          Services, you agree to be bound by these Terms. If you do not agree,
          please do not use our Services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By accessing or using our Services, you confirm that you are at least
          18 years old or have legal parental or guardian consent to use our
          Services. You also agree to comply with all applicable laws and
          regulations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          2. Changes to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update these Terms at any time. Any changes
          will be effective immediately upon posting. Your continued use of our
          Services constitutes your acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          3. User Conduct
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>
            You agree not to use the Services for unlawful purposes or to
            violate any applicable laws.
          </li>
          <li>
            You will not engage in any activity that disrupts or interferes with
            the Services.
          </li>
          <li>
            You will not upload or transmit harmful, offensive, or infringing
            content.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          4. Intellectual Property
        </h2>
        <p className="text-gray-600 mb-4">
          All content, designs, trademarks, and logos displayed on our website
          are the intellectual property of Applus Appliance Repair Services or
          our licensors. You are prohibited from using any of these without
          prior written consent.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          5. Third-Party Links
        </h2>
        <p className="text-gray-600 mb-4">
          Our Services may contain links to third-party websites. We are not
          responsible for the content, privacy policies, or practices of any
          third-party sites. Access them at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          6. Disclaimer of Warranties
        </h2>
        <p className="text-gray-600 mb-4">
          Our Services are provided as is without warranties of any kind. We do
          not guarantee the accuracy, reliability, or availability of our
          Services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          7. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          To the fullest extent permitted by law, Applus Appliance Repair
          Services and its affiliates are not liable for any indirect,
          incidental, or consequential damages arising from your use of our
          Services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          8. Termination
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to suspend or terminate your access to our
          Services at any time for violation of these Terms or for any other
          reason at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          9. Governing Law
        </h2>
        <p className="text-gray-600 mb-4">
          These Terms are governed by the laws of [Your Jurisdiction], without
          regard to conflict of laws principles.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
          10. Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or concerns about these Terms, please
          contact us at:
        </p>
        <ul className="text-gray-600">
          <li>
            Email:{" "}
            <Link
              href="mailto:contact@applusrepair.com"
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
          <li>Address: 44030 Gala circle, Ashburn VA,20147</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">
          Last updated: February 10, 2025
        </p>
      </div>
    </section>
  );
};

export default TermsOfUse;
