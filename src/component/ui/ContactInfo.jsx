import React from "react";

const ContactInfo = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md text-gray-700">
      <h1 className="text-lg font-semibold mb-2">Daniel Char</h1>
      <a
        href="#"
        className="text-blue-600 hover:underline mb-4 block"
      >
        Metal Mortgage
      </a>
      <p className="mb-2">
        <span className="font-medium">Phone:</span>{" "}
        <a href="tel:6477489010" className="text-blue-600 hover:underline">
          647.748.9010
        </a>
      </p>
      <p className="mb-2">
        <span className="font-medium">Email:</span>{" "}
        <a
          href="mailto:daniel@metalmortgage.ca"
          className="text-blue-600 hover:underline"
        >
          daniel@metalmortgage.ca
        </a>
      </p>
      <address className="not-italic">
        38 Iannuzzi Street <br />
        Toronto, Ontario M5V 0S2
      </address>
    </div>
  );
};

export default ContactInfo;
