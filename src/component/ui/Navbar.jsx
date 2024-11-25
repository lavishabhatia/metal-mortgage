import React, { useEffect, useState } from "react";
import Container from "./Container";

import logo from "../../../public/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 100);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className={`bg-black relative !z-[9999]  w-full`}>
      <Container>
        <nav className="flex items-center justify-between text-white p-4">
          <div className="flex items-center space-x-8">
            <a href="/" className="hover:text-gray-400 ">
              HOME
            </a>
            <a href="/about" className="hover:text-gray-400">
              ABOUT
            </a>
            <a href="/team" className="flex items-center hover:text-gray-400">
              TEAM <span className="ml-1">👥</span>
            </a>
            <a href="/services" className="hover:text-gray-400">
              SERVICES
            </a>
            <a href="/video" className="hover:text-gray-400">
              VIDEO
            </a>
            <a
              href="/contact"
              className="flex items-center hover:text-gray-400"
            >
              CONTACT ME <span className="ml-1">✉️</span>
            </a>
          </div>

          <div>
            <a href="/apply" className="flex items-center hover:text-gray-400">
              APPLY NOW <span className="ml-1">✏️</span>
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
