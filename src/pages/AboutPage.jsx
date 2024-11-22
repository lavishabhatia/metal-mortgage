import React, { useState, useEffect } from "react";
import bannerDefault from "../../public/banner.png";
import bannerScrolled from "../../public/banner2.png";
import logo from "../../public/logo.png";

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center ">
      <div className={` w-full h-full`}>
        <img
          alt="Banner"
          src={isScrolled ? bannerScrolled : bannerDefault}
          className={`w-full object-cover transition-all duration-500`}
        />
      </div>

      <div className="absolute bottom-4 right-4 text-xs bg-black text-white py-1 px-4 flex gap-4">
        <span>AGENT LICENSE ID | M13002164</span>
        <span>BROKERAGE LICENSE ID | 13607</span>
      </div>
    </div>
  );
};

export default AboutPage;
