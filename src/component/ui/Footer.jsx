import React from "react";
import logo from "../../../public/logo.png";
import prodMember from "../../../public/proudMember.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 border-t">
      {/* Top Section */}
      <div className="text-start px-4 md:px-8 mb-8">
        <p className="text-center md:text-left text-lg md:text-xl">
          <a href="#contact" className="text-blue-500 hover:underline">
            CONTACT ME
          </a>{" "}
          today to find out how{" "}
          <span className="font-bold">I can HELP YOU SAVE.</span>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 gap-8 md:gap-0">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <img src={logo} alt="Metal Mortgage Logo" className="h-12 md:h-16" />
          <div>
            <h3 className="text-lg md:text-xl font-bold">METAL MORTGAGE</h3>
            <p className="text-sm md:text-base">ROCK SOLID ADVICE</p>
          </div>
        </div>

        {/* Right: Membership and Policies */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end space-y-4">
          <p className="text-sm md:text-base">Proud member of</p>
          <img src={prodMember} alt="Verico Logo" className="h-6 md:h-8" />
          <p className="text-sm md:text-base">
            <a href="#privacy" className="text-blue-500 hover:underline">
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
          <p className="text-xs md:text-sm mt-2 text-center md:text-right">
            Each member is an independently owned and operated mortgage brokerage. <br />
            Copyright © Verico Financial Group Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
