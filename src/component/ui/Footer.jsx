import React from "react";
import logo from "../../../public/logo.png"
import prodMember from "../../../public/proudMember.png"

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 border-t">
      {/* Top Section */}
      <div className="text-start px-8 mb-8">
        <p>
          <a href="#contact" className="text-blue-500 hover:underline text-xl">
            CONTACT ME
          </a>
           today to find out how{" "}
          <span className="font-bold">I can HELP YOU SAVE.</span>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center px-8  mt-12">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Metal Mortgage Logo"
            className="h-16"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold">METAL MORTGAGE</h3>
            <p className="text-sm">ROCK SOLID ADVICE</p>
          </div>
        </div>

        {/* Right: Membership and Policies */}
        <div className="text-right flex flex-col items-start justify-start">
          <p className="text-sm">Proud member of</p>
          <img
            src={prodMember}
            alt="Verico Logo"
            className="h-8 my-2"
          />
          <p className="text-sm">
            <a
              href="#privacy"
              className="text-blue-500 hover:underline"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#confidentiality"
              className="text-blue-500 hover:underline"
            >
              Politique de confidentialité
            </a>
          </p>
          <p className="text-xs mt-2 text-start">
            Each member is an independently owned and operated mortgage brokerage. <br />
            Copyright © Verico Financial Group Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
