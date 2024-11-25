import React from "react";

const ContactInfo = () => {
  return (
    <div className="p-4 ">
      <h1 className="text-lg font-light mb-2">Daniel Char</h1>
      <div className="text-blue-300 my-4 block font-light">Metal Mortgage</div>
      <p className="mb-2 flex gap-3 items-center">
        <span className="font-normal text-lg">Phone:</span>{" "}
        <a href="tel:6477489010" className="">
          647.748.9010
        </a>
      </p>
      <p className="mb-2 flex gap-3 items-center">
        <span className="font-normal text-lg">Email:</span>{" "}
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
